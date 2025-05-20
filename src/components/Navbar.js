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
          <li><Link to="/bowen" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/bowen/engineering" onClick={() => setIsOpen(false)}>Engineering</Link></li>
          <li><Link to="/bowen/fitness" onClick={() => setIsOpen(false)}>Fitness</Link></li>
          <li><Link to="/bowen/nutrition" onClick={() => setIsOpen(false)}>Nutrition</Link></li>
          <li><Link to="/bowen/skincare" onClick={() => setIsOpen(false)}>Skincare</Link></li>
          <li><Link to="/bowen/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;