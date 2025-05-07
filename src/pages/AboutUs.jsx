import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const AboutUs = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>About</span> <span>Us</span>
        </h2>
        <p className="cyber-text">
          Learn more about Sarthana and our mission to empower UPSC aspirants: <span className="neon-accent">🌟</span>
        </p>

        <Card title="Our Mission" cyberpunk glowColor="yellow">
          <p className="cyber-text">
            Sarthana is dedicated to helping UPSC aspirants achieve their dreams of becoming civil servants. We provide a comprehensive platform with resources like mock tests, essay practice, current affairs, and past papers, all designed to make your preparation efficient and effective.
          </p>
          <p className="cyber-text">
            Our goal is to create a supportive community where aspirants can access high-quality study materials, track their progress, and stay motivated throughout their UPSC journey.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs; 