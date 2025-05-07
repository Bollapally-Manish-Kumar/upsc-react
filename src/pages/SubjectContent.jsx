import React from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/ncert-library.css";
import Card from "../components/Card";

const SubjectContent = () => {
  const { classNum, subject } = useParams(); // e.g., "6" and "history"

  // Book titles based on the Google Drive folder structure
  const content = {
    history: {
      6: ["Our Pasts - I"],
      7: ["Our Pasts - II"],
      8: ["Our Pasts - III"],
      9: ["India and the Contemporary World - I"],
      10: ["India and the Contemporary World - II"],
      11: ["Themes in World History"],
      12: ["Themes in Indian History - I", "Themes in Indian History - II", "Themes in Indian History - III"]
    },
    polity: {
      6: ["Social and Political Life - I"],
      7: ["Social and Political Life - II"],
      8: ["Social and Political Life - III"],
      9: ["Democratic Politics - I"],
      10: ["Democratic Politics - II"],
      11: ["Indian Constitution at Work", "Political Theory"],
      12: ["Contemporary World Politics", "Politics in India Since Independence"]
    },
    geography: {
      6: ["The Earth Our Habitat"],
      7: ["Our Environment"],
      8: ["Resource and Development"],
      9: ["Contemporary India - I"],
      10: ["Contemporary India - II"],
      11: ["Fundamentals of Physical Geography", "India Physical Environment"],
      12: ["Fundamentals of Human Geography", "India People and Economy"]
    },
    science: {
      6: ["Science"],
      7: ["Science"],
      8: ["Science"],
      9: ["Science"],
      10: ["Science"],
      11: ["Chemistry Part I", "Chemistry Part II", "Physics Part I", "Physics Part II", "Biology"],
      12: ["Chemistry Part I", "Chemistry Part II", "Physics Part I", "Physics Part II", "Biology"]
    }
  };

  const books = content[subject.toLowerCase()]?.[classNum] || [];

  return (
    <div className="ncert-library-container">
      <div className="ncert-library-content">
        <h2 className="page-title">
          Class {classNum} - {subject.charAt(0).toUpperCase() + subject.slice(1)}
        </h2>
        <p className="cyber-text">
          NCERT resources for Class {classNum} {subject}: <span className="neon-accent">📘</span>
        </p>

        <Card title={`Class ${classNum} ${subject} Books`} cyberpunk glowColor="blue">
          <ul className="cyber-list">
            {books.length > 0 ? (
              books.map((book, index) => (
                <li key={index}>
                  <a href="#" className="cyber-link">{book}</a>
                </li>
              ))
            ) : (
              <p className="cyber-text">No resources available for this class and subject.</p>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SubjectContent;