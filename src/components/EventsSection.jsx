import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/eventsection.css";

function EventsSection() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("./data/events.json")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <>
    <div className="events-section">
  <h2 data-aos="fade-up" data-aos-duration="2000">
    Our <span>Events</span>
  </h2>

  <div className="events-grid">
    {events.map((event) => (
      <div
        key={event.id}
        className="event-card"
        onClick={() => handleViewDetails(event.id)}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="event-image"
          />
        )}

        <h3 className="event-title">{event.title}</h3>

        <p className="event-date">
          <strong>Date:</strong> {new Date(event.date).toDateString()}
        </p>

        <p className="event-description">{event.description}</p>
        <p className="event-status">{event.status}</p>

        <button
          className="view-button"
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails(event.id);
          }}
        >
          VIEW MORE DETAILS
        </button>
      </div>
    ))}
  </div>
</div>
    </>

  );
}

export default EventsSection;