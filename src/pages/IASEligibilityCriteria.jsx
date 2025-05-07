import React from "react";
import Card from "../components/Card";
import "../styles/pages/essay-practice.css"; // Reuse existing styles

const IASEligibilityCriteria = () => {
  return (
    <div className="essay-practice-container">
      <div className="essay-practice-content">
        <h2 className="page-title">
          <span>IAS</span> <span>Eligibility Criteria</span>
        </h2>
        <p className="cyber-text">
          Understand the eligibility requirements to apply for the IAS exam (UPSC CSE 2025). Ensure you meet these criteria before starting your preparation journey: <span className="neon-accent">📜</span>
        </p>

        <Card title="Eligibility Criteria" cyberpunk glowColor="cyan">
          <h3 className="cyber-text">Nationality</h3>
          <ul className="cyber-list">
            <li>For IAS and IPS: Must be a citizen of India.</li>
            <li>For other services: Citizens of India, Nepal, Bhutan, or Tibetan refugees who came to India before January 1, 1962, with the intention of permanently settling, are eligible. Certain Indian-origin migrants from specified countries (e.g., Pakistan, Sri Lanka) are also eligible if they intend to settle permanently in India.</li>
          </ul>

          <h3 className="cyber-text">Age Limit (as of 1st August 2025)</h3>
          <ul className="cyber-list">
            <li>General: 21 to 32 years.</li>
            <li>OBC: Up to 35 years (3 years relaxation).</li>
            <li>SC/ST: Up to 37 years (5 years relaxation).</li>
            <li>PwBD (Persons with Benchmark Disabilities): Up to 42 years (10 years relaxation).</li>
            <li>Additional relaxations may apply for ex-servicemen or candidates with specific conditions (e.g., J&K domicile during 1980–1989).</li>
          </ul>

          <h3 className="cyber-text">Educational Qualification</h3>
          <ul className="cyber-list">
            <li>Must hold a Bachelor’s degree from a recognized university.</li>
            <li>Final-year students can apply provisionally, provided they submit proof of passing the degree before the Mains exam.</li>
            <li>Professional/technical degrees (e.g., MBBS, BE) are also acceptable; MBBS candidates must complete their internship before the interview stage.</li>
          </ul>

          <h3 className="cyber-text">Number of Attempts</h3>
          <ul className="cyber-list">
            <li>General: 6 attempts.</li>
            <li>OBC: 9 attempts.</li>
            <li>SC/ST: Unlimited attempts until the age limit.</li>
            <li>PwBD: 9 attempts (General/OBC), unlimited for SC/ST PwBD until age limit.</li>
            <li>Appearing in Prelims counts as an attempt; withdrawing after applying does not.</li>
          </ul>

          <p className="cyber-text">
            <strong>Note:</strong> Always refer to the official UPSC notification for detailed eligibility conditions and updates.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IASEligibilityCriteria;