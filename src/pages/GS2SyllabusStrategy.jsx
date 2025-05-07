import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const GS2SyllabusStrategy = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>GS 2</span> <span>Syllabus & Strategy</span>
        </h2>
        <p className="cyber-text">
          Prepare effectively for General Studies Paper II: <span className="neon-accent">📜</span>
        </p>

        <Card title="GS 2 Syllabus & Strategy" cyberpunk glowColor="blue">
          <h3 className="cyber-text">Syllabus</h3>
          <p className="cyber-text">
            - Governance, Constitution, Polity.<br />
            - Social Justice, Welfare Schemes.<br />
            - International Relations.
          </p>

          <h3 className="cyber-text">Strategy</h3>
          <ul className="cyber-list">
            <li>Read NCERTs (Classes 9–12) for Polity.</li>
            <li>Study Laxmikanth’s Indian Polity for in-depth knowledge.</li>
            <li>Follow newspapers for governance and IR updates.</li>
            <li>Analyze government schemes from official websites.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GS2SyllabusStrategy;