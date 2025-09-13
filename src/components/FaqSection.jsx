import React, { useState } from 'react';
import '../assets/css/faq.css';

const faqs = [
  {
    question: "What Is College Event Management System?",
    answer: "A College Event Management System is a software solution that helps colleges plan, organize, and manage various events such as seminars, workshops, cultural programs, and sports meets efficiently."
  },
  {
    question: "How Can The System Help In Managing Event Registrations?",
    answer: "The system simplifies event registrations by allowing students and staff to register online, track attendance, and manage participant lists seamlessly."
  },
  {
    question: "Does The System Support Scheduling And Notifications?",
    answer: "Yes, it enables event organizers to schedule events, send automated notifications, reminders, and updates to participants and stakeholders."
  },
  {
    question: "Can The System Help In Budget And Resource Management?",
    answer: "The system helps track budgets, allocate resources such as venues, equipment, and staff, ensuring events are managed within the allocated budget."
  },
  {
    question: "Is There An Option For Feedback And Post-Event Analysis?",
    answer: "Yes, the system provides tools for collecting feedback from attendees and generating reports for analyzing the success and areas of improvement for future events."
  }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = index => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq">
    <div className="faq-container">
      <h1 className="faq-title" data-aos="fade-up" data-aos-duration="2000">Frequently <span>Asked Questions</span></h1>
     
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-border"></div>
              <strong>{faq.question}</strong>
              <div className="faq-toggle-icon">
                {openIndex === index ? '−' : '+'}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;