import React from 'react';
import { Calendar, Users, Bell } from 'lucide-react';
import '../assets/css/welcomemessage.css';

const WelcomeMessage = ({ collegeName = "Campus Connect" }) => {
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
              Event
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
            <button className="btn-primary">
              Explore Events
            </button>
          </div>

          {/* User Types Badge */}
          <div className="user-badge-container">
            <div className="user-badge">
              <span className="user-types">
                🎓 Students • 👨‍🏫 Staff • 👥 Guests Welcome
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;