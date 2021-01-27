import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Link to="/" className="social-logo">
          JumpStart
        </Link>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/team">Abhijeet Pradhan</Link>
            <Link to="/team">Craig Haber</Link>
            <Link to="/team">Shonan Hendre</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
