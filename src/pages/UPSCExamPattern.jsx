import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const UPSCExamPattern = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>UPSC Exam</span> <span>Pattern</span>
        </h2>
        <p className="cyber-text">
          Understand the UPSC exam pattern to strategize your preparation: <span className="neon-accent">📊</span>
        </p>

        <Card title="UPSC Exam Pattern" cyberpunk glowColor="cyan">
          <h3 className="cyber-text">Preliminary Exam</h3>
          <p className="cyber-text">
            - Two papers: GS I (200 marks), GS II (CSAT, 200 marks).<br />
            - Objective type, 2 hours each.<br />
            - Negative marking: 1/3rd marks deducted for incorrect answers in GS I.<br />
            - Qualifying stage; marks not counted for final merit.
          </p>

          <h3 className="cyber-text">Main Exam</h3>
          <p className="cyber-text">
            - Nine papers: Two qualifying (Indian Language, English, 300 marks each), Essay (250 marks), GS I–IV (250 marks each), Optional I–II (250 marks each).<br />
            - Descriptive type, 3 hours each.<br />
            - Total: 1750 marks for merit.
          </p>

          <h3 className="cyber-text">Interview</h3>
          <p className="cyber-text">
            - Personality test: 275 marks.<br />
            - Final merit: Mains + Interview (2025 marks total).
          </p>
        </Card>
      </div>
    </div>
  );
};

export default UPSCExamPattern;