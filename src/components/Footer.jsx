import React from 'react'

const Footer = () => {
    return (
        <>
                <footer>
                    <div class="container">
                        <div class="col-1">
                            <a href="./index.html">
                                <img
                                    src="./logo.png"
                                    style={{ width: '5vw'}}
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
        </>
    )
}

export default Footer