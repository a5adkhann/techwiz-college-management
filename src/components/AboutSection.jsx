import React from 'react';
import '../assets/css/about.css'; // Make sure this file exists

const AboutSection = () => {
    return (
        <>
            <div
                className="about-banner"
                style={{
                    width: "100%",
                    backgroundImage: "url('./about-banner.jpg')", // Ensure the path is correct
                    height: "30vh", // You can tweak this for your desired height
                    backgroundSize: "cover", // This will make sure the image covers the entire div
                    backgroundPosition: "center", // Centers the background image
                    backgroundRepeat: "no-repeat", // Prevents repeating the background image
                }}
            >
                <h1>About Us</h1>
            </div>

            <div className="about-section">
                <div className="about-block">
                    <h3 className="about-heading">About Our College</h3>
                    <p className="about-text">
                        XYZ College of Engineering, located in [City, Country], is a premier institution affiliated with ABC University. Known for its academic excellence, modern campus facilities, and vibrant student community, the college is recognized as a hub for innovation and creativity. Over the years, it has built a strong tradition of nurturing talent through academics, cultural activities, and technical excellence.
                    </p>
                </div>

                <div className="about-block">
                    <div className="banner" data-aos="fade-left">
                        <img src="./campushighlights.jpg" alt="" />
                    </div>
                    <div className="content" data-aos="fade-right">
                        <h3 className="about-heading">Campus Highlights</h3>
                        <p className="about-text">
                            Our campus is designed to inspire learning and collaboration, featuring advanced laboratories, smart classrooms, a state-of-the-art auditorium, and sports facilities. With a strong focus on holistic education, XYZ College has earned recognition for its active student clubs, entrepreneurial initiatives, and strong alumni network.
                        </p>
                    </div>
                </div>

                <div className="about-block">
                    <div className='content' data-aos="fade-left" data-aos-duration="2000">
                        <h3 className="about-heading">Hackathon (2023–24)</h3>
                        <p className="about-text">
                            The Hackathon was an intensive coding marathon where students collaborated to build innovative solutions within a limited time. Participants formed teams to brainstorm ideas, design prototypes, and present working projects that addressed real-world challenges. From web and mobile applications to AI-driven tools, the event showcased creativity, teamwork, and problem-solving at its best.
                        </p>
                    </div>

                    <div className="banner" data-aos="fade-right" data-aos-duration="2000">
                        <img src="./galleryImages/gallery3.jpg" alt="" />
                    </div>

                </div>

                <div className="about-block">

                    <div className="banner" data-aos="fade-left" data-aos-duration="2000">
                        <img src="./culturalnight.jpg" alt="" />
                    </div>

                    <div className='content' data-aos="fade-right" data-aos-duration="2000">
                        <h3 className="about-heading">Cultural Night 2022 <br />
                            Year: 2022–23 | Category: Cultural</h3>
                        <p className="about-text">
                            Cultural Night 2022 was a celebration of diversity, talent, and heritage. From traditional dances to contemporary performances, the event brought students together to showcase the rich tapestry of cultures and creativity that define campus life.
                        </p>
                    </div>
                </div>

                <div className="about-block">
                    <div className="content" data-aos="fade-left" data-aos-duration="2000">
                        <h3 className="about-heading">GreenStep 2023 <br />

                            Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            GreenStep 2023 promoted wellness through movement. This sports-themed event focused on sustainability and health, encouraging participants to take a “green step” towards fitness while enjoying team-building and outdoor activities.
                        </p>
                    </div>
                    <div className="banner" data-aos="fade-right" data-aos-duration="2000">
                        <img src="./greenstep.jpg" alt="" />
                    </div>
                </div>

                <div className="about-block">
                    <div className="banner" data-aos="fade-left" data-aos-duration="2000" >
                        <img src="./galleryImages/gallery4.jpg" alt="" />
                    </div>

                    <div className="content" data-aos="fade-right" data-aos-duration="2000">
                        <h3 className="about-heading">Coderush 2023 <br />Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            Coderush 2023 was a high-intensity programming challenge where coders raced against time to crack algorithms and build solutions. With its competitive spirit, it fostered innovation, logical thinking, and technical collaboration.
                        </p>
                    </div>
                </div>

                <div className="about-block">
                    <div className="content" data-aos="fade-left" data-aos-duration="2000" >
                        <h3 className="about-heading">
                            Tech Innovators 2024 <br />
                            Year: 2023–24 | Category: Technology & Innovation
                        </h3>
                        <p className="about-text">
                            Tech Innovators 2024 was a platform for students to showcase their skills in technology and innovation. The event featured workshops on coding, AI, and robotics, along with a hackathon where teams competed to create groundbreaking tech solutions. The event aimed to fuel the creativity of aspiring tech entrepreneurs and engineers.
                        </p>
                    </div>

                    <div className="banner" data-aos="fade-right" data-aos-duration="2000">
                        <img src="./techinnovators.jpg" alt="Tech Innovators 2024" />
                    </div>
                </div>


                <div className="about-block">
                    <div className="banner" data-aos="fade-left" data-aos-duration="2000" >
                        <img src="./galleryImages/gallery6.jpg" alt="" />
                    </div>
                    <div className="content" data-aos="fade-right" data-aos-duration="2000">
                        <h3 className="about-heading">Roborumble 2023 <br /> Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            Roborumble 2023 featured intense battles between student-built robots. Teams competed in both strategy and engineering skill, pushing the limits of automation, design, and teamwork in an electrifying environment.
                        </p>
                    </div>

                </div>

                <div className="about-block">
                    <div className="content" data-aos="fade-left" data-aos-duration="2000" >
                        <h3 className="about-heading">
                            The Gridiron Clash 2024 <br />
                            Year: 2023–24 | Category: Sports
                        </h3>
                        <p className="about-text">
                            The Gridiron Clash 2024 was a thrilling football tournament that brought together teams from across the region for an epic showdown. With intense matches, spectacular goals, and fierce rivalries, this event celebrated the spirit of sportsmanship and teamwork. Players showcased their athleticism and passion for the game, leaving the crowd on the edge of their seats.
                        </p>
                    </div>

                    <div className="banner" data-aos="fade-right" data-aos-duration="2000">
                        <img src="./footballcollege.jpg" alt="The Gridiron Clash 2024" />
                    </div>
                </div>

                <div className="about-block">

                    <div className="banner" data-aos="fade-left" data-aos-duration="2000" >
                        <img src="./sportfiesta.jpg" alt="" />
                    </div>

                    <div className="content" data-aos="fade-right" data-aos-duration="2000">
                        <h3 className="about-heading">Sportfiesta 2025 <br /> Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            A grand celebration of sportsmanship and competitive spirit, Sportfiesta 2025 brought together athletes from all disciplines. With thrilling matches and vibrant cheering, it became a memorable highlight of the academic year.
                        </p>
                    </div>
                </div>

                <div className="about-block">
                    <div className="content" data-aos="fade-left" data-aos-duration="2000" >
                        <h3 className="about-heading">Pulse Night 2024 <br /> Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            Pulse Night 2024 was a high-energy music and dance extravaganza. Featuring live performances, DJ sets, and vibrant lights, the event captured the heartbeat of youth and became an unforgettable party night for students..
                        </p>
                    </div>

                    <div className="banner" data-aos="fade-right" data-aos-duration="2000">
                        <img src="./galleryImages/gallery9.jpg" alt="" />
                    </div>
                </div>

                <div className="about-block">
                    <div className="banner" data-aos="fade-left" data-aos-duration="2000" >
                        <img src="./galleryImages/gallery10.jpg" alt="" />
                    </div>

                    <div className="content" data-aos="fade-right" data-aos-duration="2000">
                        <h3 className="about-heading">Stagestorm 2023 <br /> Year: 2023–24 | Category: Sports</h3>
                        <p className="about-text">
                            Stagestorm 2023 brought drama, comedy, and creativity center stage. This theatrical event was a platform for aspiring performers, actors, and directors to showcase their talent in front of an enthusiastic audience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;