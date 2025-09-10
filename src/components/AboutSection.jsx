import React from 'react';
import '../assets/css/about.css'; // Make sure this file exists

const AboutSection = () => {
  return (
    <div className="about-section">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
      <div className="about-block">
        <h3 className="about-heading">About Our College</h3>
        <p className="about-text">
          XYZ College of Engineering, located in [City, Country], is a premier institution affiliated with ABC University. Known for its academic excellence, modern campus facilities, and vibrant student community, the college is recognized as a hub for innovation and creativity. Over the years, it has built a strong tradition of nurturing talent through academics, cultural activities, and technical excellence.
        </p>
      </div>

      <div className="about-block">
        <h3 className="about-heading">Campus Highlights</h3>
        <p className="about-text">
          Our campus is designed to inspire learning and collaboration, featuring advanced laboratories, smart classrooms, a state-of-the-art auditorium, and sports facilities. With a strong focus on holistic education, XYZ College has earned recognition for its active student clubs, entrepreneurial initiatives, and strong alumni network.
        </p>
      </div>

      <div className="about-block">
        <h3 className="about-heading">Annual Technical Events</h3>
        <p className="about-text">
          We host some of the most anticipated technical events of the year, encouraging students to showcase innovation and problem-solving skills:
        </p>
        <ul className="about-list">
          <li><strong>TechFest:</strong> A platform for budding engineers to display groundbreaking projects and research.</li>
          <li><strong>Hackathon:</strong> A 24-hour coding marathon challenging participants to create solutions for real-world problems.</li>
          <li><strong>Robotics Championship:</strong> An arena where creativity meets technology, featuring competitive robotics challenges.</li>
        </ul>
      </div>

      <div className="about-block">
        <h3 className="about-heading">Cultural Celebrations</h3>
        <ul className="about-list">
          <li><strong>Annual Day:</strong> A grand celebration of achievements and performances.</li>
          <li><strong>Music & Dance Nights:</strong> A platform for students to express their artistry and connect with peers.</li>
          <li><strong>Talent Competitions:</strong> Encouraging students to explore and showcase their unique skills.</li>
        </ul>
      </div>

      <div className="about-block">
        <h3 className="about-heading">Sports & Community Activities</h3>
        <ul className="about-list">
          <li><strong>Inter-College Sports Meet:</strong> A competitive platform for sports enthusiasts.</li>
          <li><strong>Blood Donation Drives:</strong> Encouraging students to contribute to society through community service.</li>
          <li><strong>Alumni Meet:</strong> Strengthening bonds with graduates who have made their mark in various fields.</li>
        </ul>
      </div>

      <div className="about-block">
        <h3 className="about-heading">Event Calendar at a Glance</h3>
        <p className="about-text">
          Our events are thoughtfully scheduled across the academic year to ensure maximum participation and engagement. Technical fests and hackathons usually take place in February-March, cultural programs are held in April-May, while sports events and alumni gatherings occur throughout the year.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
