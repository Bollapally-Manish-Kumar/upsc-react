import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const UPSCCalendar2023 = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>UPSC</span> <span>Calendar 2023</span>
        </h2>
        <p className="cyber-text">
          Key dates for the UPSC CSE 2023 cycle: <span className="neon-accent">📅</span>
        </p>

        <Card title="UPSC Calendar 2023" cyberpunk glowColor="pink">
          <ul className="cyber-list">
            <li>Notification Release: February 1, 2023.</li>
            <li>Prelims Application Deadline: February 21, 2023.</li>
            <li>Prelims Exam: May 28, 2023.</li>
            <li>Mains Exam: September 15, 2023 (over 5 days).</li>
            <li>Interview: March–April 2024.</li>
            <li>Final Result: May 2024.</li>
          </ul>
          <p className="cyber-text">
            <strong>Note:</strong> Dates are based on the 2023 cycle. Check the official UPSC website for the latest calendar (e.g., UPSC CSE 2025).
          </p>
        </Card>
      </div>
    </div>
  );
};

export default UPSCCalendar2023;