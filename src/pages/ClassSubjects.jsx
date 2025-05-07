import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/pages/ncert-library.css";
import Card from "../components/Card";

const ClassSubjects = () => {
  const { classNum } = useParams(); // e.g., "6" from "/ncert-library/class-6"
  const subjects = ["History", "Polity", "Geography", "Science"];

  return (
    <div className="ncert-library-container">
      <div className="ncert-library-content">
        <h2 className="page-title">Class {classNum} Subjects</h2>
        <p className="cyber-text">
          Select a subject to explore NCERT resources for Class {classNum}: <span className="neon-accent">📖</span>
        </p>

        <Card title={`Class ${classNum} NCERT Subjects`} cyberpunk glowColor="green">
          <div className="ncert-class-grid">
            {subjects.map((subject) => (
              <Link
                key={subject}
                to={`/ncert-library/class-${classNum}/${subject.toLowerCase()}`}
                className="cyber-button"
              >
                {subject}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClassSubjects;