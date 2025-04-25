import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an authentication check (e.g., after login)
    const checkAuthentication = () => {
      // In a real scenario, you would check if the user is authenticated (e.g., with a session or token)
      // For now, we're assuming the user is authenticated (this can be replaced with actual authentication logic later)
      setIsAuthenticated(true); // Dummy state for now, set this based on your login check logic
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while checking auth status
  }

  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default PrivateRoute;
