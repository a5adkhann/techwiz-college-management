import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="./logo.png" alt="Logo" />
      </div>

      <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink 
              to="/" 
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/calendar" 
              activeClassName="active"
            >
              Event Calendar
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events" 
              activeClassName="active"
            >
              Event Details
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/registeration" 
              activeClassName="active"
            >
              Registeration
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              activeClassName="active"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>
    </nav>
  );
};

export default Navbar;
