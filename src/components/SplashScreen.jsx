import React from 'react';
import '../styles/components/splash-screen.css';
import logo from '../assets/images/mainLogo.png';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Sarthana Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;