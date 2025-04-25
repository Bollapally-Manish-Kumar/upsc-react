import React from "react";
import "../styles/pages/ncert-library.css";
import Card from "../components/Card";

const NCERTLibrary = () => {
  return (
    <div className="ncert-library-container">
      <div className="ncert-library-content">
        <h2 className="page-title">NCERT Library</h2>
        <p className="cyber-text">
          Explore NCERT textbooks organized by subject for UPSC prep. 
          Download or read online: <span className="neon-accent">📚</span>
        </p>
        <div className="ncert-library-grid">
          <Card title="History" cyberpunk glowColor="pink">
            <ul className="cyber-list">
              <li><a href="#" className="cyber-link">Class 6 - Ancient India</a></li>
              <li><a href="#" className="cyber-link">Class 12 - Modern India</a></li>
            </ul>
          </Card>
          <Card title="Geography" cyberpunk glowColor="green">
            <ul className="cyber-list">
              <li><a href="#" className="cyber-link">Class 7 - Physical Geography</a></li>
              <li><a href="#" className="cyber-link">Class 10 - Resource Management</a></li>
            </ul>
          </Card>
          <Card title="Polity" cyberpunk glowColor="blue">
            <ul className="cyber-list">
              <li><a href="#" className="cyber-link">Class 9 - Democratic Politics</a></li>
              <li><a href="#" className="cyber-link">Class 11 - Constitution</a></li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NCERTLibrary;