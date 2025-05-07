import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css"; // Reuse existing styles

const PreviousYearsPapers = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Previous Years'</span> <span>IAS Question Papers</span>
        </h2>
        <p className="cyber-text">
          Practice with past IAS question papers to understand the exam pattern, difficulty level, and improve your preparation: <span className="neon-accent">📝</span>
        </p>

        <Card 
          title="Access Past Papers" 
          buttonText="Visit UPSC Archive" 
          buttonLink="https://www.upsc.gov.in/examinations/previous-question-papers"
          cyberpunk
          glowColor="pink"
        >
          <p className="cyber-text">
            The official UPSC website provides question papers for Prelims and Mains from previous years. Select the year and subject to download PDFs.
          </p>
        </Card>

        <Card title="Available Papers (Sample Categories)" cyberpunk glowColor="pink">
          <h3 className="cyber-text">Prelims Papers</h3>
          <ul className="cyber-list">
            <li>General Studies Paper I (2015–2024)</li>
            <li>General Studies Paper II (CSAT) (2015–2024)</li>
          </ul>

          <h3 className="cyber-text">Mains Papers</h3>
          <ul className="cyber-list">
            <li>Essay Paper (2015–2024)</li>
            <li>General Studies Papers I–IV (2015–2024)</li>
            <li>Optional Subjects (e.g., Public Administration, Sociology, History) (2015–2024)</li>
          </ul>

          <p className="cyber-text">
            <strong>Note:</strong> Visit the UPSC archive for the complete list of papers and optional subjects.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PreviousYearsPapers;