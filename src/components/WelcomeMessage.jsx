import React from 'react';
import { Calendar, Users, Bell } from 'lucide-react';
import '../assets/css/welcomemessage.css';
import { Link } from 'react-router-dom';

const WelcomeMessage = ({ collegeName = "Campus" }) => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-content">
          {/* Main Welcome Message */}
          <div className="welcome-header">
            <h1 className="welcome-title">
              Welcome to{' '}
              <span className="college-name">
                {collegeName}
              </span>{' '}
              Connect
            </h1>
            <p className="welcome-subtitle">
              Stay Updated, Stay Involved!
            </p>
            <p className="welcome-description">
              Your one-stop destination for all campus events, activities, and opportunities
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <Link to="/calendar">
              <button className="btn-primary">
                Explore Events
              </button>
            </Link>
          </div>

          {/* User Types Badge */}
          <div className="user-badge-container">
            <div className="user-badge">
              <span className="user-types">
                Welcome
                🎓 Students
                👨‍🏫 Staff
                👥 Guests
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;