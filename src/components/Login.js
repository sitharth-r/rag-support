import React, { useState } from 'react';

/**
 * A mock API service to simulate login.
 * In a real application, this would use fetch() or a library like Axios to call the backend.
 */
const authService = {
  login: async (username, password) => {
    // In a real application, this would be a network request to your backend API, e.g., POST /api/login.
    // The backend must be configured to validate credentials and, upon success,
    // set a session cookie with the HttpOnly, Secure, and SameSite=Strict flags.
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      // The API should return an appropriate error status code (e.g., 401 Unauthorized).
      throw new Error('Login failed. Please check your credentials.');
    }

    // The client does not need to handle the token directly. We just need to know
    // if the login was successful. The browser will automatically handle the
    // HttpOnly cookie for all subsequent requests to the same domain.
    const data = await response.json();
    return data; // e.g., { success: true, user: { name: '...' } }
  },
};

/**
 * Login component that demonstrates secure authentication practices.
 * It no longer stores authentication tokens in localStorage, mitigating XSS risks.
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      // The API call is made. Upon success, the server sets a secure HttpOnly cookie.
      // The client-side code is no longer responsible for storing the token,
      // which resolves the vulnerability.
      const result = await authService.login(username, password);
      if (result.success) {
        setIsLoggedIn(true);
        // The application can now proceed. Subsequent API calls made by the browser
        // will automatically include the secure authentication cookie.
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      console.error('Login Error:', err);
    }
  };

  if (isLoggedIn) {
    return Welcome, {username}! You have been securely logged in.;
  }

  return (
    
      Secure Login
      
        Username:
         setUsername(e.target.value)}
          autoComplete="username"
          required
          style={{ width: '100%', padding: '8px' }}
        />
      
      
        Password:
         setPassword(e.target.value)}
          autoComplete="current-password"
          required
          style={{ width: '100%', padding: '8px' }}
        />
      
      {error && {error}}
      Log In
    
  );
};

export default Login;
