import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const IASExamInformation = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS Exam</span> <span>Information</span>
        </h2>
        <p className="cyber-text">
          Key information about the IAS exam to guide your preparation: <span className="neon-accent">ℹ️</span>
        </p>

        <Card title="IAS Exam Information" cyberpunk glowColor="red">
          <p className="cyber-text">
            The IAS exam, conducted by UPSC, is part of the Civil Services Examination (CSE) to recruit candidates for various services like IAS, IPS, IFS, etc.
          </p>
          <ul className="cyber-list">
            <li>Conducted annually in three stages: Prelims, Mains, and Interview.</li>
            <li>Prelims 2025: May 25, 2025.</li>
            <li>Mains 2025: August 22, 2025 (over 5 days).</li>
            <li>Interview: Typically held between March and April of the following year.</li>
            <li>Posts: Approximately 800–1000 vacancies annually (varies).</li>
            <li>Application: Online via upsconline.nic.in.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default IASExamInformation;