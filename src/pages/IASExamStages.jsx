import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const IASExamStages = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS Exam</span> <span>Stages</span>
        </h2>
        <p className="cyber-text">
          Understand the stages of the IAS exam (UPSC CSE) to plan your preparation effectively: <span className="neon-accent">📅</span>
        </p>

        <Card title="IAS Exam Stages" cyberpunk glowColor="blue">
          <h3 className="cyber-text">1. Preliminary Exam (Prelims)</h3>
          <p className="cyber-text">
            The first stage consists of two objective-type papers: General Studies I and General Studies II (CSAT). It is a screening stage, and marks are not counted for the final merit.
          </p>

          <h3 className="cyber-text">2. Main Exam (Mains)</h3>
          <p className="cyber-text">
            The second stage includes nine descriptive papers, including Essay, General Studies I–IV, and two optional subject papers. Marks obtained in Mains contribute to the final ranking.
          </p>

          <h3 className="cyber-text">3. Interview (Personality Test)</h3>
          <p className="cyber-text">
            The final stage is a personality test to assess the candidate’s suitability for a career in civil services. It evaluates communication skills, leadership, and overall personality.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IASExamStages;