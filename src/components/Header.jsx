import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/header.css";

const Header = ({ isDashboard = false }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Add logout logic here (e.g., clear tokens, session, etc.)
    navigate("/"); // Redirect to Home page
  };

  return (
    <header className="header" data-aos="fade-down">
      {/* Make the logo clickable and navigate to home */}
      <h1 className="logo">
        <Link to="/dashboard" className="cyber-link">Sarthana</Link>
      </h1>
      <nav>
        {isDashboard ? (
          <ul className="nav-links">
            <li><Link to="/current-affairs" className="cyber-link"><span className="icon">📜</span> Current Affairs</Link></li>
            <li><Link to="/essay-practice" className="cyber-link"><span className="icon">📝</span> Essay Practice</Link></li>
            <li><Link to="/topic-summaries" className="cyber-link"><span className="icon">🧠</span> Notes</Link></li>
            <li><Link to="/ncert-library" className="cyber-link"><span className="icon">📚</span> NCERT Library</Link></li>
            <li>
              <button onClick={handleLogout} className="cyber-link logout-button">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <Link to="/login" className="cyber-link">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
