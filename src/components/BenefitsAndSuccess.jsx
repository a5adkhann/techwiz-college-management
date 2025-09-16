import React from 'react';
import './BenefitsAndSuccess.jsx';
import '../assets/css/BenefitsAndSuccess.css'

const BenefitsAndSuccess = () => {
    return (
        <div className="benefits-success-wrapper">
            <section className="benefits-section">
                <h2 data-aos="fade-up" data-aos-duration="2000">Benefits Of College Event <span>Management Software</span></h2>
                <p data-aos="fade-up" data-aos-duration="2000">
                    To efficiently organize and manage college events, the administration and faculty must utilize a comprehensive Event Management System that offers the following key benefits.
                </p>
                <div className="benefits-cards">
                    <div className="benefit-card" data-aos="fade-up" data-aos-duration="2000">
                        <h3>Seamless Event Communication</h3>
                        <ul>
                            <li>Bridge communication between event organizers, students, and staff</li>
                            <li>Automated notifications and reminders for event updates</li>
                            <li>Real-time alerts on schedule changes and announcements</li>
                            <li>Easy coordination through in-app messaging and emails</li>
                        </ul>
                    </div>
                    <div className="benefit-card" data-aos="fade-up" data-aos-duration="2000">
                        <h3>Manage Multiple Events & Societies</h3>
                        <ul>
                            <li>Centralized platform to manage events across various departments</li>
                            <li>Streamline event planning and coordination for all student societies</li>
                            <li>Maintain autonomy for individual clubs while ensuring unified oversight</li>
                            <li>Facilitate collaboration between societies and administration</li>
                        </ul>
                    </div>
                    <div className="benefit-card" data-aos="fade-up" data-aos-duration="2000">
                        <h3>Automated Reports & Event Analytics</h3>
                        <ul>
                            <li>Automatic generation and delivery of daily event reports to organizers</li>
                            <li>Interactive analytics dashboard to track event participation and feedback</li>
                            <li>Monitor event success and resource utilization in real-time</li>
                            <li>Access key performance indicators to improve future events</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="success-stories-section">
                <h2 data-aos="fade-up" data-aos-duration="2000">Success <span>Stories</span></h2>
                <div className="testimonials">
                    <div className="testimonial-card" data-aos="fade-up" data-aos-duration="2000">
                        <div className="testimonial-header blue">
                            <h4>Mr. C. Zothakhuma</h4>
                            <p>Registrar, Mizoram University</p>
                        </div>
                        <div className="testimonial-body">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>
                                The MasterSoft team implemented the best ERP solution in Mizoram University which helps us to streamline our objectives and meet automation. They are the industry's best education ERP provider.
                            </p>
                        </div>
                    </div>

                    <div className="testimonial-card" data-aos="fade-up" data-aos-duration="2000">
                        <div className="testimonial-header blue">
                            <h4>Dr. Swapnil Madhamshettiwar</h4>
                            <p>Vice Principal, SP College, Chandrapur</p>
                        </div>
                        <div className="testimonial-body">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p>
                                Thanks to the MasterSoft team, we carried out the complete examination process online with their cloud-based technology. Students were able to give exams from their home & results were announced in a matter of few seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BenefitsAndSuccess;
