import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import Navpages from './Navpages';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from './Footer';

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        collegeEmail: '',
        personalEmail: '',
        mobileNumber: '',
        permanentAddress: '',
        college: '',
        degree: '',
        specialization: 'Select',
        currentSemester: '',
    });

    const [registrationStatus, setRegistrationStatus] = useState(null);
    const [emptyFieldsError, setEmptyFieldsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (registrationStatus === 'success') {
            // Registration successful, you can redirect or perform other actions.
        }
    }, [registrationStatus]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emptyFields = Object.values(formData).some((value) => value === '');
        if (emptyFields) {
            setEmptyFieldsError(true);
            return; // Prevent form submission
        }

        const registrationData = {
            attributes: {
                "College Email": formData.collegeEmail,
                "Personal Email": formData.personalEmail,
                "Mobile Number": formData.mobileNumber,
                "Permanent Address": formData.permanentAddress,
                "College": formData.college,
                "Degree": formData.degree,
                "Specialization": formData.specialization,
                "Current Semester": formData.currentSemester,
            },
            credentials: [
                {
                    temporary: false,
                    type: 'password',
                    value: formData.password,
                },
            ],
            username: formData.username,
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            emailVerified: false,
            enabled: true,
            requiredActions: ['VERIFY_EMAIL'],
        };

        const requestData = {
            grant_type: 'client_credentials',
            client_id: 'creamcollar_client',
            client_secret: 'Av2q7rGG5ndSTBljEx5AEP7LSC66WcNw',
        };

        axios
            .post(
                'https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/token',
                qs.stringify(requestData),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            .then((response) => {
                const accessToken = response.data.access_token;
                axios
                    .post(
                        'https://test1.cream-collar.com:8443/admin/realms/creamcollar/users',
                        registrationData,
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'application/json',
                            },
                        }
                    )
                    .then((response) => {
                        console.log('User registration successful:', response.data);

                        // After user registration, get the user ID
                        axios
                            .get(`https://test1.cream-collar.com:8443/admin/realms/creamcollar/users?username=${formData.username}`, {
                                headers: {
                                    Authorization: `Bearer ${accessToken}`,
                                },
                            })
                            .then((response) => {
                                const user = response.data[0]; // Assuming there's only one user with the given username
                                const userId = user.id; // This is the user ID
                                console.log('User ID:', userId);

                                // Send the email verification link to the user using the obtained userId
                                axios
                                    .put(
                                        `https://test1.cream-collar.com:8443/admin/realms/creamcollar/users/${userId}/send-verify-email`,
                                        ['VERIFY_EMAIL'],
                                        {
                                            headers: {
                                                Authorization: `Bearer ${accessToken}`,
                                                'Content-Type': 'application/json',
                                            },
                                        }
                                    )
                                    .then((emailResponse) => {
                                        window.alert('User registration successfully created => Email verification link sent Please Verfiy your email')
                                        console.log('Email verification link sent:', emailResponse.data);
                                        setRegistrationStatus('success');
                                        navigate('/login');

                                    })
                                    .catch((emailError) => {
                                        console.error('Error sending email verification link:', emailError);
                                        setRegistrationStatus('error');
                                    });
                            })
                            .catch((error) => {
                                console.error('Error retrieving user information:', error);
                                setRegistrationStatus('error');
                            });
                    })
                    .catch((error) => {
                        window.alert('Username or EmailId is Already Registered')
                        console.error('Error during registration:', error);
                        setRegistrationStatus('error');
                    });
            })
            .catch((error) => {
                console.error('Error getting access token:', error);
                setRegistrationStatus('error');
            });
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    return(
        <div>
            <Navpages/>
    <div class="container">
        <h1 >Registration</h1>
        {emptyFieldsError && (
                    <div className="alert alert-danger" role="alert">
                        Please fill all the fields
                    </div>
                )}
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" value={formData.firstname} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" value={formData.lastname} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="collegeEmail">College Email Address:</label>
                <input type="email" id="collegeEmail" name="collegeEmail" placeholder="Enter your college email address" value={formData.collegeEmail} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="personalEmail">Personal Email Address:</label>
                <input type="email" id="personalEmail" name="personalEmail" placeholder="Enter your personal email address" value={formData.personalEmail} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" value={formData.mobileNumber} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="permanentAddress">Permanent Address:</label>
                <textarea id="permanentAddress" name="permanentAddress" placeholder="Enter your permanent address" value={formData.permanentAddress} onChange={handleInputChange} required></textarea>
            </div>
            <div class="form-group">
                <label for="college">College (University):</label>
                <input type="text" id="college" name="college" placeholder="Enter your college or university" value={formData.college} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="degree">Degree:</label>
                <input type="text" id="degree" name="degree" placeholder="Enter your degree" value={formData.degree} onChange={handleInputChange} required/>
            </div>
            <div class="form-group">
                <label for="specialization">Specialization:</label>
                <select id="specialization" name="specialization" value={formData.specialization} onChange={handleInputChange} required>
                    <option value="Select">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="profilePic">Profile Picture (optional):</label>
                <input type="file" id="profilePic" name="profilePic" value={formData.profilePic} onChange={handleInputChange} />
            </div>
            <div class="form-group">
                <label for="currentSemester">Current Semester:</label>
                <input class="p-2" type="number" id="currentSemester" name="currentSemester" placeholder="Enter your current semester" value={formData.currentSemester} onChange={handleInputChange} required/>
            </div>
            <button class="mt-3 button1 mb-3" type="submit" onClick={handleSubmit}>Register</button>
        </form>
    </div>
    <Footer/>
</div>
    )
}

export default Register;
