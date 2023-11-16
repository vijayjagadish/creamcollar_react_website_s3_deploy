import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import Navpages from './Navpages';
import Footer from './Footer';
 
 
const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
 
  const handleResetPassword = async () => {
    if (!email) {
      window.alert('Please enter your email.'); // Set error message for empty email
      return;
    }
    const adminAccessToken = await getAdminAccessToken();
 
    if (adminAccessToken) {
      const userId = await getUserIdByEmail(adminAccessToken, email);
 
      if (userId) {
        const resetLinkSent = await sendPasswordResetLink(adminAccessToken, userId);
        if (resetLinkSent) {
          window.alert(`Password reset link sent to ${email}. Check your inbox.`);
          navigate('/login')
        } else {
          window.alert('Failed to send the password reset link.')
        }
      } else {
        window.alert('Email not found in Creamcollar. Please check the email you provided.')
       
      }
    } else {
      window.alert('Failed to obtain admin access token.')
    }
  };
 
  const getAdminAccessToken = async () => {
    const requiredData = {
      grant_type: 'client_credentials',
      client_id: 'creamcollar_client',
      client_secret: 'XSijvfCIKpFt7vvRiieVA2ey5DC60U0t',
    };
 
    try {
      const clientCredentialsResponse = await axios.post(
        'https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/token',
        qs.stringify(requiredData),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
 
      if (clientCredentialsResponse.status === 200) {
        return clientCredentialsResponse.data.access_token;
      }
    } catch (error) {
      console.error('Failed to obtain admin access token:', error);
    }
    return null;
  };
 
  const getUserIdByEmail = async (adminAccessToken, userEmail) => {
    try {
      const keycloakResponse = await axios.get(
        `https://test1.cream-collar.com:8443/admin/realms/creamcollar/users?email=${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${adminAccessToken}`,
          },
        }
      );
 
      if (keycloakResponse.status === 200) {
        const users = keycloakResponse.data;
        if (users.length > 0) {
          return users[0].id;
        }
      }
    } catch (error) {
      console.error('Failed to get user ID by email in Keycloak:', error);
    }
    return null;
  };
 
  const sendPasswordResetLink = async (adminAccessToken, userId) => {
    try {
      // Send a request to Keycloak to send a password reset email
      const response = await axios.put(
        `https://test1.cream-collar.com:8443/admin/realms/creamcollar/users/${userId}/execute-actions-email`,
        ['UPDATE_PASSWORD'], // Use the appropriate action here
        {
          headers: {
            Authorization: `Bearer ${adminAccessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
 
      return response.status === 204;
    } catch (error) {
      console.error('Failed to send the password reset link:', error);
      return false;
    }
  };
 
  return (
    <div className="wrapper">
      <Navpages />
      <div className="content">
      <div className="text-center">
      <div className="mt-5 mb-2" style={{color: "#f273777"}}>
        <h2>Reset Password</h2>
      </div>
      <p className='m-4'>Enter your Registered Email</p>
      <div className="input-field">
        <div className="base-inputfield">
          <div className="div-2 mt-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
      <div className="mt-3">
        <p>{message}</p>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
    
    
  );
};
 
export default ResetPassword;