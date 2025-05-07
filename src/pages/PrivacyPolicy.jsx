import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const PrivacyPolicy = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Privacy</span> <span>Policy</span>
        </h2>
        <p className="cyber-text">
          Learn how Sarthana handles your data and protects your privacy: <span className="neon-accent">🔒</span>
        </p>

        <Card title="Privacy Policy" cyberpunk glowColor="green">
          <h3 className="cyber-text">Data Collection</h3>
          <p className="cyber-text">
            We collect personal information such as your name, email, and study progress to provide a personalized experience. This data is used solely to enhance your preparation and is not shared with third parties without your consent.
          </p>

          <h3 className="cyber-text">Data Usage</h3>
          <p className="cyber-text">
            Your data is used to track your progress, recommend resources, and improve our platform. We may also send you updates, newsletters, or notifications related to your UPSC preparation.
          </p>

          <h3 className="cyber-text">Data Security</h3>
          <p className="cyber-text">
            We implement industry-standard security measures to protect your data from unauthorized access, including encryption and secure servers.
          </p>

          <h3 className="cyber-text">Your Rights</h3>
          <p className="cyber-text">
            You have the right to access, update, or delete your personal information at any time. Contact us at support@sarthana.com to exercise these rights.
          </p>

          <p className="cyber-text">
            <strong>Note:</strong> This policy is subject to change. Check this page regularly for updates.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;