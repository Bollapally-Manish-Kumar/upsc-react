import React from "react";
import "../styles/pages/essay-practice.css";
import Card from "../components/Card";

const EssayPractice = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">Essay Practice</h2>
        <p className="cyber-text">
          Sharpen your essay writing skills with curated UPSC topics. 
          Practice, submit, and get feedback: <span className="neon-accent">✍️</span>
        </p>
        <div className="essay-practice-grid">
          <Card title="Topic of the Day" cyberpunk glowColor="yellow">
            <p className="cyber-text">Role of Technology in Governance</p>
            <button className="cyber-button">Start Writing</button>
          </Card>
          <Card title="Past Topics" cyberpunk glowColor="purple">
            <ul className="cyber-list">
              <li><a href="#" className="cyber-link">Ethics in Public Service</a></li>
              <li><a href="#" className="cyber-link">Urbanization Challenges</a></li>
              <li><a href="#" className="cyber-link">Globalization Impact</a></li>
            </ul>
          </Card>
          <Card title="Submit Essay" cyberpunk glowColor="green">
            <p className="cyber-text">Upload your essay for review:</p>
            <button className="cyber-button">Upload Now</button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EssayPractice;