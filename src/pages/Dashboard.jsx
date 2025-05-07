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

        <Card 
          title="Official UPSC Website" 
          buttonText="Visit Now" 
          buttonLink="https://www.upsc.gov.in"
          cyberpunk
          glowColor="orange"
        >
          <p className="cyber-text">Access official UPSC resources, notifications, and updates directly.</p>
        </Card>

        <Card 
          title="UPSC Exam Requirements Awareness" 
          buttonText="Learn More" 
          buttonLink="https://www.upsc.gov.in/examinations/exam-instructions"
          cyberpunk
          glowColor="red"
        >
          <p className="cyber-text">
            Understand the essential requirements for the UPSC exam, including documents like Aadhaar Card, to ensure a smooth exam experience.
          </p>
        </Card>

        <Card 
          title="IAS Eligibility Criteria" 
          buttonText="Check Eligibility" 
          buttonLink="/ias-eligibility"
          cyberpunk
          glowColor="cyan"
        >
          <p className="cyber-text">
            Confirm your eligibility for the IAS exam, including age, education, and attempt limits.
          </p>
        </Card>

        <Card 
          title="Previous Years' IAS Question Papers" 
          buttonText="Explore Papers" 
          buttonLink="/previous-papers"
          cyberpunk
          glowColor="pink"
        >
          <p className="cyber-text">
            Practice with past IAS question papers to enhance your preparation.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;