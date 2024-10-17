import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isPasswordStrong = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSignUp = () => {
    if (!emailPattern.test(email)) {
      setErrorMessage('Invalid email format!');
      return;
    }

    if (!isPasswordStrong(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, include uppercase, lowercase, number, and special character!'
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    if (firstName === '' || lastName === '') {
      setErrorMessage('First name and last name cannot be empty!');
      return;
    }

    setErrorMessage('');
    alert('Sign up successful!');
    navigate('/register'); 
  };

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#e0e7ff',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '380px',
    },
    inputContainer: {
      position: 'relative',
      marginBottom: '20px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: '20px',
    },
    input: {
      padding: '10px',
      width: '100%',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    toggleButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '8px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
      width: '100%',
    },
    errorMessage: {
      color: 'red',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Sign Up</h1>

        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
          />
        </div>

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

        <div style={styles.inputContainer}>
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={toggleConfirmPasswordVisibility} style={styles.toggleButton}>
            {confirmPasswordVisible ? 'Hide' : 'Show'}
          </button>
        </div>

        <button onClick={handleSignUp} style={styles.button}>
          Sign Up
        </button>

        <p style={{ marginTop: '15px' }}>
          Already have an account?{' '}
          <span
            onClick={handleLoginRedirect}
            style={{ color: '#0066cc', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
