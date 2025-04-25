import React from "react";
import Card from "../components/Card";
import QuoteSlider from "../components/QuoteSlider";
import "../styles/pages/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <QuoteSlider />
      </div>

      <div className="dashboard-grid">
        <Card 
          title="Welcome Back!" 
          cyberpunk
          glowColor="pink"
        >
          <p className="cyber-text">Stay focused and persistent. Your UPSC journey is one step closer to success! <span className="neon-accent">🌟</span></p>
        </Card>

        <Card 
          title="Study Progress" 
          cyberpunk
          glowColor="green"
        >
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <p className="progress-text">65% of syllabus completed</p>
          </div>
        </Card>

        <Card 
          title="Next Mock Test" 
          buttonText="Enroll Now" 
          buttonLink="#"
          cyberpunk
          glowColor="yellow"
        >
          <div className="cyber-data">
            <p>📅 <span className="data-highlight">28 March 2025</span></p>
            <p>📖 <span className="data-highlight">Topic: Indian Economy</span></p>
          </div>
        </Card>

        <Card 
          title="Saved Notes" 
          buttonText="View Notes" 
          buttonLink="#"
          cyberpunk
          glowColor="purple"
        >
          <p className="cyber-text">Last updated: <span className="neon-accent">2 days ago</span></p>
        </Card>

        <Card 
          title="NCERT eBooks" 
          buttonText="Explore" 
          buttonLink="#"
          cyberpunk
          glowColor="blue"
        >
          <p className="cyber-text">Access all essential NCERT books categorized for UPSC preparation.</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;