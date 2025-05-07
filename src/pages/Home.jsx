import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div className="cyberpunk-home">
      {/* Hero Section */}
      <section className="cyber-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Your Gateway to</span>
            <span className="title-line glitched" data-text="Excellence in Learning">Excellence in Learning</span>
          </h1>
          <p className="hero-subtitle">Premier platform tailored for UPSC explorers</p>
          <Link to="/login">
            <button className="cyber-button hero-button">Get Started</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="cyber-about">
        <div className="about-container">
          <h2 className="section-title">About Sarthana</h2>
          <p className="about-text">
            Sarthana is your one-stop destination for UPSC preparation. Designed with a futuristic vision,
            we provide curated study material, strategic guidance, interactive learning tools, and mock tests
            to help aspirants excel. Whether you're a beginner or a seasoned aspirant,
            Sarthana blends technology with pedagogy to make your UPSC journey efficient, insightful, and goal-driven.
          </p>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="cyber-services">
        <div className="services-container">
          <h2 className="section-title">What We Provide</h2>
          <div className="services-list">
            <div className="service-item">
              <h3>Curated Study Material</h3>
              <p>Access comprehensive study material tailored to the UPSC syllabus, updated regularly.</p>
            </div>
            <div className="service-item">
              <h3>Interactive Learning</h3>
              <p>Engage with interactive lessons and practice quizzes to reinforce your learning.</p>
            </div>
            <div className="service-item">
              <h3>Mock Tests & Analysis</h3>
              <p>Evaluate your progress with mock tests and detailed performance analysis.</p>
            </div>
            <div className="service-item">
              <h3>Guidance With AI</h3>
              <p>Get expert advice and strategies for tackling the UPSC exams efficiently.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;