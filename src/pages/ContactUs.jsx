import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css";

const ContactUs = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>Contact</span> <span>Us</span>
        </h2>
        <p className="cyber-text">
          Get in touch with the Sarthana team for support or inquiries: <span className="neon-accent">📧</span>
        </p>

        <Card title="Contact Information" cyberpunk glowColor="purple">
          <p className="cyber-text">
            We’re here to assist you on your UPSC preparation journey. Reach out to us with any questions, feedback, or suggestions.
          </p>
          <ul className="cyber-list">
            <li>Email: support@sarthana.com</li>
            <li>Phone: +91-123-456-7890</li>
            <li>Address: Sarthana Education Hub, 123 Cyber Street, New Delhi, India</li>
          </ul>
          <p className="cyber-text">
            <strong>Note:</strong> We typically respond within 24–48 hours. For urgent queries, please call us directly.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;