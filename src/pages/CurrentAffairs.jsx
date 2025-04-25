import React from "react";
import Card from "../components/Card";
import "../styles/pages/current-affairs.css";

const CurrentAffairs = () => {
  return (
    <div className="current-affairs-container">
      <div className="current-affairs-content">
        <h2 className="page-title">Current Affairs</h2>
        <p className="cyber-text">
          Stay ahead with the latest news and events tailored for UPSC 2025. 
          Explore daily updates, monthly archives, and key highlights below: <span className="neon-accent">🔍</span>
        </p>
        <div className="current-affairs-grid">
          <Card title="Daily Updates" cyberpunk glowColor="green">
            <ul className="cyber-list">
              <li>April 24, 2025 - New National Education Policy Draft</li>
              <li>April 23, 2025 - G20 Summit Outcomes</li>
              <li>April 22, 2025 - Climate Action Plan 2025</li>
            </ul>
            <button className="cyber-button">View All</button>
          </Card>
          <Card title="Monthly Archives" cyberpunk glowColor="blue">
            <p className="cyber-text">Access past months' summaries:</p>
            <ul className="cyber-list">
              <li><a href="#" className="cyber-link">March 2025</a></li>
              <li><a href="#" className="cyber-link">February 2025</a></li>
            </ul>
          </Card>
          <Card title="Key Highlights" cyberpunk glowColor="pink">
            <p className="cyber-text">Top 3 topics this week:</p>
            <ul className="cyber-list">
              <li>Economy - Inflation Trends</li>
              <li>Environment - Renewable Energy Push</li>
              <li>Polity - New Legislation</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairs;