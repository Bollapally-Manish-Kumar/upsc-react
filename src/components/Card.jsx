import React from 'react';
import '../styles/components/card.css';

const Card = ({ 
  title, 
  children, 
  animation, 
  buttonText, 
  buttonLink, 
  cyberpunk = false, 
  glowColor = 'blue' 
}) => {
  const glowClass = cyberpunk ? `cyber-glow-${glowColor}` : '';
  
  return (
    <div 
      className={`card ${glowClass}`} 
      data-aos={animation}
    >
      {title && <h2>{title}</h2>}
      <div className="card-body">
        {children}
      </div>
      {buttonText && (
        <a href={buttonLink} className="cyber-button">
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Card; // This was missing