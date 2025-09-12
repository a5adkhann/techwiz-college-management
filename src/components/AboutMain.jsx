import { Link } from 'react-router-dom';
import '../assets/css/aboutMain.css'

const AboutMain = () => {

  const features = [
  "Seamless Event Planning",
  "Easy Registration & Ticketing",
  "Real-time Updates & Notifications",
  "Customizable Event Pages",
  "Collaborative Team Management",
  "Efficient Volunteer Coordination",
  "Comprehensive Event Analytics",
  "Engaging Attendee Experience",
  "Support for Virtual & In-Person Events"
];


  const handleReadMore = () => {
    console.log('Read More clicked');
    // Add your navigation logic here
  };

  return (
    <>
      <section className="hero-section">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="about-label">About Us</div>
            <h1 className="main-heading">
              EMPOWERING <span>CAMPUS</span> EVENTS
            </h1>
            <p className="description">
              Welcome to the team behind your seamless college event experiences. Our Event Management System is designed to bring students, organizers, and volunteers together on one dynamic platform. From planning and promotion to registration and feedback—we make every event easier, smarter, and more engaging.
            </p>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  {feature}
                </div>
              ))}
            </div>
            <div className='cta-buttons'>
              <Link to="/about">
            <button className="btn-primary">
              Read More
            </button>
            </Link>
            </div>
          </div>
          
          <div className="visual-content">
            <img src="./about-main.png"  />
            
            <div className="glow"></div>
            
          
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMain;