import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col-1">
            <Link to="/">
              <img src="./logo.png" style={{ width: '80px' }} alt="Logo" />
            </Link>
            <p>
              CampusConnect is a student-driven platform that showcases academic,
              cultural, and social events. Discover opportunities, RSVP easily,
              and stay updated on campus life.
            </p>
          </div>

          <div className="col-2">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/calendar">Event Calendar</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/registeration">Registration</Link></li>
            </ul>
          </div>

          <div className="col-3">
            <h3>Contact Info</h3>
            <p>📍 Main Shahra-e-Faisal, near Lal Kothi (house), Karachi, 75400</p>
            <p>📞 +92 300 1234567</p>
            <p>✉️ info@campusconnect.edu</p>
          </div>

          <div className="col-4">
            <h3>Newsletter</h3>
            <form className="footer-form">
              <i className="ri-mail-line" id="mailbox"></i>
              <input type="email" placeholder="Enter your email" required />
              <button><i className="ri-arrow-right-line"></i></button>
            </form>
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank"><i className="ri-facebook-circle-fill"></i></a>
              <a href="https://x.com/" target="_blank"><i className="ri-twitter-x-line"></i></a>
              <a href="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line"></i></a>
              <a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>
        </div>

        <hr />
        <div className="copyright">
          <p>© 2025 CampusConnect - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
