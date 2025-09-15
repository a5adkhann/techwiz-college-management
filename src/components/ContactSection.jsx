import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, User, Building2 } from 'lucide-react';
import '../assets/css/contact.css'; 

const ContactSection = () => {
  const [contacts, setContacts] = useState([]);

  const sampleContacts = {
  faculty: [
    {
      id: 1,
      name: "Dr. Ahmed Khan",
      designation: "Dean of Student Affairs",
      department: "Administration",
      phone: "+92 300 1234567",
      email: "a.khan@college.edu.pk",
      type: "faculty"
    },
    {
      id: 2,
      name: "Prof. Sara Ali",
      designation: "Event Coordinator",
      department: "Computer Science",
      phone: "+92 300 2345678",
      email: "s.ali@college.edu.pk",
      type: "faculty"
    },
    {
      id: 3,
      name: "Dr. Fatima Iqbal",
      designation: "Cultural Activities Head",
      department: "Arts & Humanities",
      phone: "+92 300 3456789",
      email: "f.iqbal@college.edu.pk",
      type: "faculty"
    }
  ],
  students: [
    {
      id: 4,
      name: "Ali Hassan",
      designation: "Student Council President",
      department: "Business Administration",
      phone: "+92 300 4567890",
      email: "a.hassan@student.college.edu.pk",
      type: "student"
    },
    {
      id: 5,
      name: "Mariam Khan",
      designation: "Events Committee Chair",
      department: "Engineering",
      phone: "+92 300 5678901",
      email: "m.khan@student.college.edu.pk",
      type: "student"
    },
    {
      id: 6,
      name: "Bilal Ahmed",
      designation: "Technical Coordinator",
      department: "Information Technology",
      phone: "+92 300 6789012",
      email: "b.ahmed@student.college.edu.pk",
      type: "student"
    }
  ]
};

  useEffect(() => {
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
      <div className="contact-container" data-aos="fade-up" data-aos-duration="2000">
        <div className="contact-header">
          <h1 data-aos="fade-up" data-aos-duration="2000">Contact <span> US </span></h1>
          <p data-aos="fade-up" data-aos-duration="2000">
            Get in touch with our faculty coordinators and student representatives for any event-related queries.
            We're here to help make your college events successful!
          </p>
        </div>

        <div className="contact-group" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="group-title">
            <Building2 className="icon blue" />
            Faculty Coordinators
          </h2>
          <div className="contact-grid" data-aos="fade-up" data-aos-duration="2000">
            {contacts.faculty?.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="contact-group" data-aos="fade-up" data-aos-duration="2000">
          <h2 className="group-title">
            <User className="icon green" />
            Student Coordinators
          </h2>
          <div className="contact-grid" data-aos="fade-up" data-aos-duration="2000">
            {contacts.students?.map(contact => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        <div className="location-section">
          <div className="location-header" data-aos="fade-up" data-aos-duration="2000">
            <h2>
              <MapPin className="icon red" />
              Campus Location
            </h2>
            <p>
              Visit our campus for events, meetings, or any assistance. We're located in the heart of the city.
            </p>
          </div>

          <div className="map-container" data-aos="fade-up" data-aos-duration="2000">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.017006423899!2d67.07182317604698!3d24.863268745143863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2s!4v1757660293976!5m2!1sen!2s" width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"></iframe>
          </div>

          <div className="location-details" data-aos="fade-up" data-aos-duration="2000">
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
