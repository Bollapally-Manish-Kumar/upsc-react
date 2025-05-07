import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const GS3SyllabusStrategy = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>GS 3</span> <span>Syllabus & Strategy</span>
        </h2>
        <p className="cyber-text">
          Prepare effectively for General Studies Paper III: <span className="neon-accent">📜</span>
        </p>

        <Card title="GS 3 Syllabus & Strategy" cyberpunk glowColor="green">
          <h3 className="cyber-text">Syllabus</h3>
          <p className="cyber-text">
            - Economy, Agriculture.<br />
            - Science & Technology, Environment.<br />
            - Disaster Management, Security Issues.
          </p>

          <h3 className="cyber-text">Strategy</h3>
          <ul className="cyber-list">
            <li>Read NCERTs (Classes 9–12) for Economy.</li>
            <li>Follow Economic Survey and Budget for economic updates.</li>
            <li>Study Shankar IAS Environment book for environment topics.</li>
            <li>Read IDSA website for security issues.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GS3SyllabusStrategy;