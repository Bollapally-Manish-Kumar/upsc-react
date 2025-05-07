import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const UPSCNotesPDF = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>UPSC Notes</span> <span>PDF</span>
        </h2>
        <p className="cyber-text">
          Download UPSC notes in PDF format for efficient revision: <span className="neon-accent">📄</span>
        </p>

        <Card title="UPSC Notes PDF" cyberpunk glowColor="purple">
          <p className="cyber-text">
            Sarthana offers concise notes in PDF format for UPSC preparation:
          </p>
          <ul className="cyber-list">
            <li>GS I: Indian Heritage, History, Geography.</li>
            <li>GS II: Polity, Governance, International Relations.</li>
            <li>GS III: Economy, Environment, Science & Tech.</li>
            <li>GS IV: Ethics, Integrity, Aptitude.</li>
            <li>Current Affairs Notes (Monthly PDFs).</li>
          </ul>
          <p className="cyber-text">
            <strong>Note:</strong> PDFs will be available soon in the Study Resources section.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default UPSCNotesPDF;