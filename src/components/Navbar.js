// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/software" onClick={() => setIsOpen(false)}>Software</Link></li>
          <li><Link to="/biotech" onClick={() => setIsOpen(false)}>Biotech</Link></li>
          <li><Link to="/fitness" onClick={() => setIsOpen(false)}>Fitness</Link></li>
          <li><Link to="/nutrition" onClick={() => setIsOpen(false)}>Nutrition</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
