import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="./logo.png" alt="Logo" />
      </div>

      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/calendar">Event Calendar</Link></li>
          <li><Link to="/events">Event Details</Link></li>
          <li><Link to="/registeration">Registration</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>
    </nav>
  );
};

export default Navbar;
