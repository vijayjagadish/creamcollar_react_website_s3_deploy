import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const Logout = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    // Retrieve the refresh token and client secret from local storage
    const refreshToken = localStorage.getItem('refreshToken');
    const clientSecret = 'Av2q7rGG5ndSTBljEx5AEP7LSC66WcNw'; // Replace with your actual client secret
   
    if (refreshToken) {
      // Send a request to the Keycloak logout endpoint with the refresh token and client secret
      fetch('https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // Include the refresh_token and client_secret parameters
        body: `client_id=creamcollar_client&client_secret=${clientSecret}&refresh_token=${refreshToken}`,
      })
        .then((response) => {
          if (response.ok) {
            // Successfully logged out
            // Clear user data, tokens, and refresh token from local storage
            localStorage.removeItem('refreshToken');
            navigate('/login');
          } else {
            // Handle logout failure
            console.error('Logout failed');
          }
        })
        .catch((error) => {
          console.error('Error during logout:', error);
        });
    } else {
      // The refresh token is not found in local storage
      console.error('Refresh Token not found');
      navigate('/login');
    }
  };
 
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
 
export default Logout;
 