import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [confirmUsername, setConfirmUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !username || !confirmUsername) {
      setErrorMessage('Please fill in all the details.');
      return;
    }
    if (username !== confirmUsername) {
      setErrorMessage('Usernames do not match!');
      return;
    }
    setErrorMessage('');
    alert('Registration successful!');
    navigate('/login');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      padding: '20px',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
      transition: 'border 0.3s ease',
    },
    inputFocus: {
      border: '1px solid #007bff',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
      marginTop: '15px',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    errorMessage: {
      color: 'red',
      marginBottom: '15px',
    },
    heading: {
      fontSize: '2em',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    confirmationMessage: {
      marginTop: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Complete Registration</h1>
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Confirm Username"
          value={confirmUsername}
          onChange={(e) => setConfirmUsername(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleRegister}
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Complete Registration
        </button>
        <p style={styles.confirmationMessage}>Already have an account? <a href="/login" style={{ color: '#007bff', textDecoration: 'underline' }}>Log in here</a></p>
      </div>
    </div>
  );
};

export default Register;
