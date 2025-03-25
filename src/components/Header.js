import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = ({ contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu when clicking Contact
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faVideo} className="camera-icon" />
        <span className="brand-name">Irekits Media</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>

      {/* Navigation Links */}
      <nav className={`navigation ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
