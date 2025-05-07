import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const GS4SyllabusStrategy = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>GS 4</span> <span>Syllabus & Strategy</span>
        </h2>
        <p className="cyber-text">
          Prepare effectively for General Studies Paper IV: <span className="neon-accent">📜</span>
        </p>

        <Card title="GS 4 Syllabus & Strategy" cyberpunk glowColor="purple">
          <h3 className="cyber-text">Syllabus</h3>
          <p className="cyber-text">
            - Ethics, Integrity, Aptitude.<br />
            - Emotional Intelligence.<br />
            - Case Studies on Ethical Issues.
          </p>

          <h3 className="cyber-text">Strategy</h3>
          <ul className="cyber-list">
            <li>Read Lexicon for Ethics by Chronicle for basic concepts.</li>
            <li>Study ARC Reports (e.g., 4th Report on Ethics in Governance).</li>
            <li>Practice case studies to develop analytical skills.</li>
            <li>Reflect on real-life ethical dilemmas for better answers.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default GS4SyllabusStrategy;