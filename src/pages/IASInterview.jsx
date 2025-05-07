import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const IASInterview = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS</span> <span>Interview</span>
        </h2>
        <p className="cyber-text">
          Prepare for the IAS Interview, the final stage of the UPSC CSE: <span className="neon-accent">🎤</span>
        </p>

        <Card title="IAS Interview Overview" cyberpunk glowColor="purple">
          <h3 className="cyber-text">Purpose</h3>
          <p className="cyber-text">
            The interview assesses the candidate’s personality, communication skills, leadership qualities, and suitability for a career in civil services.
          </p>

          <h3 className="cyber-text">Key Information</h3>
          <p className="cyber-text">
            - Total Marks: 275.<br />
            - Duration: 20–30 minutes.<br />
            - Panel: Conducted by a board of UPSC members.<br />
            - Focus Areas: Current affairs, personal background, optional subject, and situational questions.<br />
            - Tips: Be confident, honest, and well-versed in your DAF (Detailed Application Form).
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IASInterview;