import React, { useState, useEffect, useRef } from 'react';
import Navpages from './Navpages';
import axios from 'axios';
import qs from 'qs';
import { Navigate, useNavigate,Link} from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from './Footer';

 
const Login = () => {
  const userRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
 
  useEffect(() => {
    setErrMsg('');
  }, [username, password]);
 
  const handleLogin = (e) => {
    e.preventDefault(); // Corrected typo: preventDefault()

    
    const requestData = {
      grant_type: 'password',
      client_id: 'creamcollar_client',
      client_secret: 'Av2q7rGG5ndSTBljEx5AEP7LSC66WcNw',
      username: username,
      password: password,
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
        console.log('Login successful');
        console.log(response.data);
        setIsLoggedIn(true);
        const refreshToken = response.data.refresh_token;
        // Store the refresh token in local storage or another secure place
        localStorage.setItem('refreshToken', refreshToken);
        const user = {
          username: username, // or user ID, depending on your use case
        };  
        navigate('/dashboard', { state: user }); // Set the login status to true
        // You can also store tokens and user data here
      })
      .catch((error) => {
        console.error('Login failed');
        window.alert('Please Enter Correct Username or Password')
      });
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 
 
  return (
    <>

        <section>
      <Navpages />
      <div class="frame">
        <div class="div">
          <div class="div-2">
            <div class="div-wrapper">
              <div class="text-wrapper">Sign In</div>
            </div>
            <form onSubmit={handleLogin}>
              <div class="div-3">
                <div class="input-field">
                  <div class="base-inputfield">
                    <div class="div-4">
                      <label class="label-text">Email ID</label>
                    </div>
                    <div class="div-5">
                      <input
                        class="placeholder-text"
                        type="text"
                        id="username"
                        ref={userRef}
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="div-6">
                  <div class="DMP-input-field">
                    <div class="base-inputfield-2">
                      <div class="div-4">
                        <label class="label-text">Password</label>
                      </div>
                      <div class="div-5"style={{ position: 'relative' }}>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                               {showPassword ? (
                              <FaEyeSlash
                                onClick={togglePasswordVisibility}
                                style={{
                                  position: 'absolute',
                                  right: '8px',
                                  top: '60%',
                                  transform: 'translateY(-50%)',
                                  cursor: 'pointer',
                                }}
                              />
                            ) : (
                              <FaEye
                                onClick={togglePasswordVisibility}
                                style={{
                                  position: 'absolute',
                                  right: '8px',
                                  top: '60%',
                                  transform: 'translateY(-50%)',
                                  cursor: 'pointer',
                                }}
                              />
                            )}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div class="buttons">
                <button class="buttons" onClick={handleLogin}>
                  SignIn
                </button>
              </div>
            </form>
          </div>
          <div class="div-7">
            <img class="line" src="img/line-1.svg" alt="" />
          </div>
          <div class="div-8">
            <div class="div-9">
              <div class="div-10">
                <div class="div-11"></div>
                <div class="div-12">
                  <img class="image" src="assets/img/google.png" alt="" />
                  <div class="text-wrapper-2">Google</div>
                </div>
              </div>
              <div class="div-13">
                <div class="div-14"></div>
                <div class="div-15">
                  <img class="img" src="assets/img/linkedin.png" alt="" />
                  <div class="text-wrapper-3">Linked IN</div>
                </div>
              </div>
              <div class="div-16">
                <div class="div-11"></div>
                <div class="div-17">
                  <img class="image-2" src="assets/img/fb.png" alt="" />
                  <div class="text-wrapper-4">Facebook</div>
                </div>
              </div>
            </div>
            <div class="div-18">
              <p class="p">Don’t you have an account?</p>
              <div class="assistive-text-2">
                <Link to="/register" >Sign up</Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <Footer/>
    </>
  );
};
 
export default Login;