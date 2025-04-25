import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/register.css";
import Footer from "../components/Footer";


const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Custom registration logic here
      if (form.email === "test@user.com" && form.password === "password123") {
        setMessage("Registration successful. Please log in.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("Error during registration. Please try again.");
    }
  };

  return (
    <div className="cyberpunk-register">
      {/* Centered Register Form */}
      <div className="register-center">
        <div className="register-form-container">
          <h2 className="form-title">Create Your Account</h2>
          <form className="cyber-form" onSubmit={handleRegister}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="cyber-button">
              Register
            </button>
          </form>
          {message && <p className="message">{message}</p>}
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Register;