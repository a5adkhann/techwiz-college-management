import { Link } from 'react-router-dom';
import '../assets/css/welcomemessage.css';

const WelcomeMessage = ({ userName, userRole, collegeName = "CampusConnect" }) => {
  return (
    <section className="welcome-section">
      <div className="welcome-container" data-aos="fade-up" data-aos-duration="2000">
        <div className="welcome-content">
          <div className="welcome-header">
            <h1 className="welcome-title">
              Welcome to <span className="college-name">{collegeName},</span>  {userName}!
            </h1>
            <h3>{userRole}</h3>
            <p className="welcome-subtitle">Stay Updated, Stay Involved!</p>
            <p className="welcome-description">
              Your one-stop destination for all campus events, activities, and opportunities
            </p>
          </div>

          <div className="cta-buttons">
            <Link to="/events">
            <button className="btn-primary">Explore Events</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WelcomeMessage;
