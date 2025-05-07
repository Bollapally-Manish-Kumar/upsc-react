import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const GS1SyllabusStrategy = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>GS 1</span> <span>Syllabus & Strategy</span>
        </h2>
        <p className="cyber-text">
          Prepare effectively for General Studies Paper I: <span className="neon-accent">📜</span>
        </p>

        <Card title="GS 1 Syllabus & Strategy" cyberpunk glowColor="pink">
          <h3 className="cyber-text">Syllabus</h3>
          <p className="cyber-text">
            - Indian Heritage and Culture.<br />
            - History (Modern India, World History).<br />
            - Geography (Physical, Human, Indian, World).<br />
            - Indian Society (Diversity, Issues).
          </p>

          <h3 className="cyber-text">Strategy</h3>
          <ul className="cyber-list">
            <li>Read NCERTs (Classes 6–12) for History and Geography.</li>
            <li>Study Spectrum’s Modern India for history.</li>
            <li>Use Atlas for map-based questions.</li>
            <li>Focus on current affairs related to culture and society.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GS1SyllabusStrategy;