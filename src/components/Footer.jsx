import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="page-wrapping">
                <footer>
                    <div class="container">
                        <div class="col-1">
                            <a href="./index.html">
                                <img
                                    src="./logo.png"
                                    style={{ width: '5vw', filter: 'invert(1)' }}
                                    alt="Logo"
                                />          </a>
                            <p>
                                CampusConnect is a student-built events platform that brings campus life together — listing academic, cultural, professional, and social events with easy RSVP and calendar integration. We partner with student groups and faculty to make organizing and attending events simple, inclusive, and sustainable. Join us to discover opportunities, share ideas, and make every campus moment count.
                            </p>
                        </div>
                        <div class="col-2">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="./index.html">Home</a></li>
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="./about.html">About</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <h3>Our location</h3>
                            <div class="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0170064238805!2d67.0718231756939!3d24.86326874514449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2sus!4v1752320415046!5m2!1sen!2sus"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Aptech Learning Location"
                                />

                            </div>
                        </div>
                        <div class="col-4">
                            <h3>Newsletter</h3>
                            <form class="footer-form">
                                <i class="ri-mail-line" id="mailbox"></i>
                                <input type="email" placeholder="Enter your email" required />
                                <button><i class="ri-arrow-right-line"></i></button>
                            </form>
                            <div class="social-icons">
                                <a href="https://www.facebook.com/" target="_blank"><i class="ri-facebook-circle-fill"></i></a>
                                <a href="https://x.com/" target="_blank"><i class="ri-twitter-x-line"></i></a>
                                <a href="https://www.instagram.com/" target="_blank"><i class="ri-instagram-line"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank"><i class="ri-linkedin-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="copyright">
                        <p>Â© 2025-2025 - All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer