import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const BestOptionalSubject = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Best Optional</span> <span>Subject for IAS Exam</span>
        </h2>
        <p className="cyber-text">
          Choose the best optional subject for the IAS exam based on your strengths: <span className="neon-accent">📚</span>
        </p>

        <Card title="Best Optional Subjects" cyberpunk glowColor="orange">
          <p className="cyber-text">
            The optional subject in UPSC Mains (500 marks) can significantly impact your score. Popular choices include:
          </p>
          <ul className="cyber-list">
            <li>Public Administration: Concise syllabus, overlaps with GS II.</li>
            <li>Sociology: Easy to understand, overlaps with GS I.</li>
            <li>Geography: Scientific approach, overlaps with GS I and III.</li>
            <li>History: Vast but interesting, overlaps with GS I.</li>
            <li>Anthropology: Short syllabus, scoring for science background candidates.</li>
          </ul>
          <p className="cyber-text">
            <strong>Tip:</strong> Choose a subject you’re comfortable with, has available study material, and aligns with your interests.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default BestOptionalSubject;