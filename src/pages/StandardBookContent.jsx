import React from "react";
import { useParams } from "react-router-dom";
import "../styles/pages/ncert-library.css";
import Card from "../components/Card";

const StandardBookContent = () => {
  const { topic } = useParams(); // e.g., "polity-and-governance"

  // Sample content for each standard book/topic (replace with actual resources)
  const content = {
    "polity-and-governance": ["Indian Polity by M. Laxmikanth", "Governance in India by M. Karthikeyan"],
    "economy": ["Indian Economy by Ramesh Singh", "Economic Survey (Latest)"],
    "geography": ["Certificate Physical and Human Geography by G.C. Leong", "Oxford School Atlas"],
    "history": ["India’s Struggle for Independence by Bipan Chandra", "A Brief History of Modern India by Spectrum"],
    "art-and-culture": ["Indian Art and Culture by Nitin Singhania"],
    "science-and-technology": ["Science and Technology in India by TMH"],
    "environment": ["Environment by Shankar IAS"],
    "disaster-management": ["Disaster Management by IGNOU Notes"],
    "agriculture": ["Agriculture at a Glance by R.K. Sharma"],
    "international-relations": ["International Relations by Pavneet Singh"],
    "internal-security": ["Internal Security by Ashok Kumar"],
    "indian-society": ["Indian Society by NCERT (Class 12)"],
    "social-issues": ["Social Problems in India by Ram Ahuja"],
    "social-justice": ["Social Justice by NCERT Sociology"]
  };

  const books = content[topic] || [];

  const topicDisplay = topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="ncert-library-container">
      <div className="ncert-library-content">
        <h2 className="page-title">{topicDisplay}</h2>
        <p className="cyber-text">
          Recommended books for {topicDisplay}: <span className="neon-accent">📚</span>
        </p>

        <Card title={`${topicDisplay} Resources`} cyberpunk glowColor="purple">
          <ul className="cyber-list">
            {books.length > 0 ? (
              books.map((book, index) => (
                <li key={index}>
                  <a href="#" className="cyber-link">{book}</a>
                </li>
              ))
            ) : (
              <p className="cyber-text">No resources available for this topic.</p>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default StandardBookContent;