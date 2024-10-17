import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format!');
      return;
    }

    if (password === '') {
      setErrorMessage('Password cannot be empty!');
      return;
    }

    setErrorMessage('');
    alert('Login successful!');
    setEmail('');
    setPassword('');
    navigate('/dashboard'); 
  };

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); 
  };

  const styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: '50px',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      width: '400px',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '20px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      padding: '12px',
      width: '100%',
      borderRadius: '8px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      fontSize: '16px',
    },
    toggleButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '8px',
      color: '#0066cc',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#0066cc',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '15px',
      width: '100%',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    errorMessage: {
      color: 'red',
      marginBottom: '10px',
    },
    forgotPassword: {
      marginTop: '10px',
      color: '#0066cc',
      cursor: 'pointer',
      textDecoration: 'underline',
      fontSize: '14px',
    },
    signUpText: {
      marginTop: '20px',
      color: '#0066cc',
      cursor: 'pointer',
      fontSize: '16px',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Login</h1>

        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

        <div style={styles.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={togglePasswordVisibility} style={styles.toggleButton}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

        <p style={styles.forgotPassword} onClick={handleForgotPassword}>
          Forgot password?
        </p>

        <p style={styles.signUpText} onClick={handleSignUp}>
          Don't have an account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
