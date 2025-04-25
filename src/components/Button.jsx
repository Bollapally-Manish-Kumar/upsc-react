const Button = ({ children, onClick, type = 'button' }) => {
    return (
      <button 
        type={type}
        onClick={onClick}
        className="cyberpunk-btn"
      >
        <span className="cyberpunk-btn-text">{children}</span>
        <span className="cyberpunk-btn-glitch"></span>
        <span className="cyberpunk-btn-tag">R25</span>
      </button>
    );
  };
  
  export default Button;