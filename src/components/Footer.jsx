import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Exam Stages</h4>
          <Link to="/ias-exam-stages" className="footer-link">IAS Exam Stages</Link>
          <Link to="/ias-prelims" className="footer-link">IAS Prelims</Link>
          <Link to="/ias-mains" className="footer-link">IAS Mains</Link>
          <Link to="/ias-interview" className="footer-link">IAS Interview</Link>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Exam Details</h4>
          <Link to="/upsc-exam-pattern" className="footer-link">UPSC Exam Pattern</Link>
          <Link to="/ias-exam-information" className="footer-link">IAS Exam Information</Link>
          <Link to="/upsc-calendar-2023" className="footer-link">UPSC Calendar 2023</Link>
          <Link to="/ias-eligibility" className="footer-link">IAS Eligibility Criteria</Link>
          <Link to="/best-optional-subject" className="footer-link">Best Optional Subject for IAS Exam</Link>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Study Resources</h4>
          <Link to="/previous-papers" className="footer-link">Previous Years' IAS Question Papers</Link>
          <Link to="/topic-summaries" className="footer-link">Free IAS Study Material</Link>
          <Link to="/upsc-notes-pdf" className="footer-link">UPSC Notes PDF</Link>
          <Link to="/ncert-library" className="footer-link">NCERT Notes for UPSC</Link>
          <Link to="/ncert-library" className="footer-link">List of NCERT Books for IAS Exam</Link>
          <Link to="/difference-between-articles" className="footer-link">100 'Difference Between' Articles</Link>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">General Studies</h4>
          <Link to="/general-studies" className="footer-link">General Studies</Link>
          <Link to="/gs1-syllabus-strategy" className="footer-link">GS 1 - Syllabus & Strategy</Link>
          <Link to="/gs2-syllabus-strategy" className="footer-link">GS 2 - Syllabus & Strategy</Link>
          <Link to="/gs3-syllabus-strategy" className="footer-link">GS 3 - Syllabus & Strategy</Link>
          <Link to="/gs4-syllabus-strategy" className="footer-link">GS 4 - Syllabus & Strategy</Link>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Company Links</h4>
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/contact-us" className="footer-link">Contact Us</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link">Terms & Conditions</Link>
        </div>

        <p className="footer-text">© 2025 Sarthana. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;