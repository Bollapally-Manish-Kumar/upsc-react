import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const IASPrelims = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS</span> <span>Prelims</span>
        </h2>
        <p className="cyber-text">
          Prepare for the IAS Prelims, the first stage of the UPSC CSE: <span className="neon-accent">📝</span>
        </p>

        <Card title="IAS Prelims Overview" cyberpunk glowColor="yellow">
          <h3 className="cyber-text">Structure</h3>
          <p className="cyber-text">
            The Prelims consists of two papers:
          </p>
          <ul className="cyber-list">
            <li>General Studies Paper I: 200 marks, 100 questions (current affairs, history, geography, polity, economy, environment).</li>
            <li>General Studies Paper II (CSAT): 200 marks, 80 questions (comprehension, logical reasoning, quantitative aptitude). Qualifying paper (33% required).</li>
          </ul>

          <h3 className="cyber-text">Key Information</h3>
          <p className="cyber-text">
            - Date: May 25, 2025 (for UPSC CSE 2025).<br />
            - Duration: 2 hours per paper.<br />
            - Negative Marking: 1/3rd marks deducted for incorrect answers in Paper I.<br />
            - Purpose: Screening stage; marks not counted for final merit.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IASPrelims;