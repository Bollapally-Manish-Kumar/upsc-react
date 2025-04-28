import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/pages/login.css';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Custom login logic here
      if (userId === "bmk@gmail.com" && password === "password123") {
        // Redirect to dashboard after successful login
        navigate('/dashboard');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="form-title">UPSC Aspirant Login</h2>

        <p className="login-instructions">
          Welcome back! Please login to access your personalized study materials, resources, and progress tracking.
        </p>

        {/* Show error message */}
        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>User ID</label>
            <input 
              type="text" 
              placeholder="Enter your User ID" 
              required 
              value={userId} 
              onChange={(e) => setUserId(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
