import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/ncert-library.css";
import Card from "../components/Card";

const NCERTLibrary = () => {
  const classes = ["6th", "7th", "8th", "9th", "10th", "11th", "12th"];
  const standardBooks = [
    "Polity and Governance",
    "Economy",
    "Geography",
    "History",
    "Art and Culture",
    "Science and Technology",
    "Environment",
    "Disaster Management",
    "Agriculture",
    "International Relations",
    "Internal Security",
    "Indian Society",
    "Social Issues",
    "Social Justice"
  ];

  return (
    <div className="ncert-library-container">
      <div className="ncert-library-content">
        <h2 className="page-title">NCERT Library</h2>
        <p className="cyber-text">
          Explore NCERT textbooks and standard books for UPSC preparation: <span className="neon-accent">📚</span>
        </p>

        <Card title="Class-wise NCERT Books" cyberpunk glowColor="pink">
          <div className="ncert-class-grid">
            {classes.map((className) => (
              <Link
                key={className}
                to={`/ncert-library/class-${className.toLowerCase().replace("th", "")}`}
                className="cyber-button"
              >
                Class {className}
              </Link>
            ))}
          </div>
        </Card>

        <Card title="Standard Books for UPSC" cyberpunk glowColor="blue">
          <div className="standard-books-grid">
            {standardBooks.map((book) => (
              <Link
                key={book}
                to={`/standard-books/${book.toLowerCase().replace(/ /g, "-")}`}
                className="cyber-button"
              >
                {book}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NCERTLibrary;