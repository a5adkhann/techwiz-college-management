import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, User, Building2 } from 'lucide-react';
import '../assets/css/contact.css'; // ✅ Make sure to create this CSS file

const ContactSection = () => {
  const [contacts, setContacts] = useState([]);

  const sampleContacts = {
    faculty: [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        designation: "Dean of Student Affairs",
        department: "Administration",
        phone: "+1 (555) 123-4567",
        email: "s.johnson@college.edu",
        type: "faculty"
      },
      {
        id: 2,
        name: "Prof. Michael Chen",
        designation: "Event Coordinator",
        department: "Computer Science",
        phone: "+1 (555) 234-5678",
        email: "m.chen@college.edu",
        type: "faculty"
      },
      {
        id: 3,
        name: "Dr. Emily Rodriguez",
        designation: "Cultural Activities Head",
        department: "Arts & Humanities",
        phone: "+1 (555) 345-6789",
        email: "e.rodriguez@college.edu",
        type: "faculty"
      }
    ],
    students: [
      {
        id: 4,
        name: "Alex Thompson",
        designation: "Student Council President",
        department: "Business Administration",
        phone: "+1 (555) 456-7890",
        email: "a.thompson@student.college.edu",
        type: "student"
      },
      {
        id: 5,
        name: "Priya Patel",
        designation: "Events Committee Chair",
        department: "Engineering",
        phone: "+1 (555) 567-8901",
        email: "p.patel@student.college.edu",
        type: "student"
      },
      {
        id: 6,
        name: "James Wilson",
        designation: "Technical Coordinator",
        department: "Information Technology",
        phone: "+1 (555) 678-9012",
        email: "j.wilson@student.college.edu",
        type: "student"
      }
    ]
  };

  useEffect(() => {
    // Directly set contacts, no loading state needed
    setContacts(sampleContacts);
  }, []);

  const ContactCard = ({ contact }) => (
    <div className="contact-card">
      <div className="card-header">
        <div className={`avatar ${contact.type === 'faculty' ? 'avatar-faculty' : 'avatar-student'}`}>
          <User size={24} />
        </div>
        <div className="card-info">
          <h3 className="contact-name">{contact.name}</h3>
          <p className="contact-title">{contact.designation}</p>
          <div className="contact-dept">
            <Building2 size={16} className="icon" />
            <span>{contact.department}</span>
          </div>
          <div className="contact-links">
            <div className="contact-link">
              <Phone size={16} className="icon" />
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
            <div className="contact-link">
              <Mail size={16} className="icon" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact <span> US </span></h1>
          <p>
            Get in touch with our faculty coordinators and student representatives for any event-related queries.
            We're here to help make your college events successful!
          </p>
        </div>

        <div className="contact-group">
          <h2 className="group-title">
            <Building2 className="icon blue" />
            Faculty Coordinators
          </h2>
          <div className="contact-grid">
            {contacts.faculty?.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="contact-group">
          <h2 className="group-title">
            <User className="icon green" />
            Student Coordinators
          </h2>
          <div className="contact-grid">
            {contacts.students?.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="location-section">
          <div className="location-header">
            <h2>
              <MapPin className="icon red" />
              Campus Location
            </h2>
            <p>
              Visit our campus for events, meetings, or any assistance. We're located in the heart of the city.
            </p>
          </div>

          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.017006423899!2d67.07182317604698!3d24.863268745143863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2s!4v1757660293976!5m2!1sen!2s" width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"></iframe>
          </div>

          <div className="location-details">
            <div>
              <h3>Address</h3>
              <p>
                30-A, Progressive Center, Suite # 202-203, Main Shahra-e-Faisal, <br /> near Lal Kothi (house), Karachi, 75400
              </p>
            </div>
            <div>
              <h3>Open Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
