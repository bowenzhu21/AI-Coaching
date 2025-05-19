import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="contact-list">
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Toronto, ON</span>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:bowenzhu66@gmail.com">bowenzhu66@gmail.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+16472152868">(647) 215-2868</a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a href="https://github.com/bowenzhu21/" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/bowenzhu21/" target="_blank" rel="noopener noreferrer">bowenzhu21</a>
          </li>
        </ul>
        <p className="footer-copyright">© 2025 Bowen Zhu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;