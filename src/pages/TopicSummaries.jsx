import React from "react";
import "../styles/pages/topic-summaries.css";
import Card from "../components/Card";

const TopicSummaries = () => {
  return (
    <div className="topic-summaries-container">
      <div className="topic-summaries-content">
        <h2 className="page-title">Topic Summaries</h2>
        <p className="cyber-text">
          Concise summaries of UPSC topics for quick revision. 
          Dive into categories below: <span className="neon-accent">📖</span>
        </p>
        <div className="topic-summaries-grid">
          <Card title="Polity" cyberpunk glowColor="blue">
            <ul className="cyber-list">
              <li>Constitution - Key Amendments</li>
              <li>Federal Structure</li>
            </ul>
          </Card>
          <Card title="Geography" cyberpunk glowColor="green">
            <ul className="cyber-list">
              <li>Climate Zones</li>
              <li>Indian Rivers</li>
            </ul>
          </Card>
          <Card title="History" cyberpunk glowColor="pink">
            <ul className="cyber-list">
              <li>Freedom Struggle - 1857</li>
              <li>Post-Independence Era</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopicSummaries;