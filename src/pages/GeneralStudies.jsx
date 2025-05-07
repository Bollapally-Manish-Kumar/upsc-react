import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const GeneralStudies = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>General</span> <span>Studies</span>
        </h2>
        <p className="cyber-text">
          Overview of General Studies papers for UPSC Mains: <span className="neon-accent">📘</span>
        </p>

        <Card title="General Studies Overview" cyberpunk glowColor="yellow">
          <p className="cyber-text">
            General Studies (GS) papers are a core component of UPSC Mains, covering a wide range of topics:
          </p>
          <ul className="cyber-list">
            <li>GS I: Indian Heritage, History, Geography, Society.</li>
            <li>GS II: Governance, Constitution, Polity, International Relations.</li>
            <li>GS III: Economy, Environment, Science & Tech, Security.</li>
            <li>GS IV: Ethics, Integrity, Aptitude.</li>
          </ul>
          <p className="cyber-text">
            Each paper is worth 250 marks, totaling 1000 marks for GS in Mains.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default GeneralStudies;