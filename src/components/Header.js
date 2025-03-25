import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = ({ contactRef }) => {
  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the Contact section
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faVideo} className="camera-icon" />
        <span className="brand-name">Irekits Media</span>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><a href="#contact" onClick={handleContactClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
