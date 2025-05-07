import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const IASMains = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS</span> <span>Mains</span>
        </h2>
        <p className="cyber-text">
          Get ready for the IAS Mains, the second stage of the UPSC CSE: <span className="neon-accent">📚</span>
        </p>

        <Card title="IAS Mains Overview" cyberpunk glowColor="green">
          <h3 className="cyber-text">Structure</h3>
          <p className="cyber-text">
            The Mains consists of nine descriptive papers:
          </p>
          <ul className="cyber-list">
            <li>Paper A: Indian Language (qualifying, 300 marks).</li>
            <li>Paper B: English (qualifying, 300 marks).</li>
            <li>Paper I: Essay (250 marks).</li>
            <li>Paper II–V: General Studies I–IV (250 marks each).</li>
            <li>Paper VI–VII: Optional Subject (two papers, 250 marks each).</li>
          </ul>

          <h3 className="cyber-text">Key Information</h3>
          <p className="cyber-text">
            - Date: August 22, 2025 (for UPSC CSE 2025, over 5 days).<br />
            - Duration: 3 hours per paper.<br />
            - Total Marks: 1750 (for merit calculation).<br />
            - Purpose: Marks contribute to the final ranking.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IASMains;