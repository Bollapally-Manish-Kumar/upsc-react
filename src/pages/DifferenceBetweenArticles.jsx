import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const DifferenceBetweenArticles = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>100 'Difference Between'</span> <span>Articles for Prelims</span>
        </h2>
        <p className="cyber-text">
          Useful articles to revise key concepts for UPSC Prelims: <span className="neon-accent">🔍</span>
        </p>

        <Card title="100 'Difference Between' Articles for Prelims Revision" cyberpunk glowColor="red">
          <p className="cyber-text">
            These articles help clarify concepts often tested in Prelims:
          </p>
          <ul className="cyber-list">
            <li>Difference Between Fundamental Rights and Directive Principles.</li>
            <li>Difference Between Lok Sabha and Rajya Sabha.</li>
            <li>Difference Between El Niño and La Niña.</li>
            <li>Difference Between GDP and GNP.</li>
            <li>Difference Between Tropical and Temperate Cyclones.</li>
          </ul>
          <p className="cyber-text">
            <strong>Note:</strong> Full list of 100 articles will be available soon in the Study Resources section.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default DifferenceBetweenArticles;