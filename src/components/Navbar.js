// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Showcase', path: '/showcase' },
    { label: 'Fitness', path: '/fitness' },
    { label: 'Nutrition', path: '/nutrition' },
  ];

  const isActive = (path) => {
    if (path === '/showcase' && location.pathname === '/software') {
      return true;
    }
    return location.pathname === path;
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          Bowen Zhu
        </Link>
        <div className="navbar__spacer" />
        <button
          className={`navbar__hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link className={`navbar__link ${isActive(link.path) ? 'is-active' : ''}`} to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="navbar__contact">
            <Link className="navbar__cta" to="/contact">
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
