import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const TermsOfService = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Terms of</span> <span>Service</span>
        </h2>
        <p className="cyber-text">
          Review the terms for using Sarthana’s services: <span className="neon-accent">📜</span>
        </p>

        <Card title="Terms of Service" cyberpunk glowColor="blue">
          <h3 className="cyber-text">Acceptance of Terms</h3>
          <p className="cyber-text">
            By using Sarthana, you agree to comply with these terms of service. If you do not agree, please refrain from using our platform.
          </p>

          <h3 className="cyber-text">User Responsibilities</h3>
          <p className="cyber-text">
            You are responsible for maintaining the confidentiality of your account and ensuring that your use of Sarthana complies with applicable laws.
          </p>

          <h3 className="cyber-text">Content Usage</h3>
          <p className="cyber-text">
            All content provided on Sarthana (e.g., mock tests, summaries, past papers) is for personal, non-commercial use only. You may not reproduce, distribute, or modify our content without permission.
          </p>

          <h3 className="cyber-text">Limitation of Liability</h3>
          <p className="cyber-text">
            Sarthana is not liable for any damages arising from your use of the platform, including inaccuracies in study materials or technical issues.
          </p>

          <p className="cyber-text">
            <strong>Note:</strong> These terms may be updated periodically. Continued use of Sarthana constitutes acceptance of the updated terms.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;