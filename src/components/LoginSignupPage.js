// src/pages/LoginSignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';
import './LoginSignupPage.css';

const LoginSignupPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user); // Replace with API call to your server
      navigate('/');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError('Google sign-in failed.');
    }
  };

  const handleEmailPasswordSignIn = () => {
    // Placeholder for API call to your server
    console.log('Email:', email, 'Password:', password);
    // Navigate to home page after successful login
    navigate('/');
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Placeholder for API call to your server for signup
    console.log('Name:', name, 'Email:', email, 'Password:', password);
    // Navigate to home page after successful signup
    navigate('/');
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <div className="logo">Your Logo</div>
        {isSignup && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {isSignup && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        )}
        {error && <div className="error">{error}</div>}
        {!isSignup ? (
          <>
            <button onClick={handleEmailPasswordSignIn}>Login</button>
            <p>New user? <span onClick={() => setIsSignup(true)}>Sign up</span></p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>Register</button>
            <p>Already have an account? <span onClick={() => setIsSignup(false)}>Login</span></p>
          </>
        )}
        <div className="divider">
          <span>OR</span>
        </div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default LoginSignupPage;
