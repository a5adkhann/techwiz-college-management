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

  const today = new Date();

  const getDaysLeft = (eventDate) => {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const diffMs = new Date(eventDate).setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
    return Math.ceil(diffMs / oneDayMs);
  };

  return (
    <div className="events-section">
      <h2 data-aos="fade-up" data-aos-duration="2000">
        Our <span>Events</span>
      </h2>

      <div className="events-container-section">
        {events.map((event) => {
          const eventDate = new Date(event.date);
          const daysLeft = getDaysLeft(eventDate);
          const isUpcoming = daysLeft >= 0;

          return (
            <div
              key={event.id}
              className="event-card"
              onClick={() => handleViewDetails(event.id)}
              data-aos="fade-up"
              data-aos-duration="2000"
              style={{ position: "relative" }}
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
                <strong>Date:</strong> {eventDate.toDateString()}
              </p>

              <p className="event-description">{event.description}</p>

              <p className={isUpcoming ? "days-left upcoming" : "days-left past"}>
                {isUpcoming
                  ? daysLeft === 0
                    ? "Today"
                    : daysLeft === 1
                    ? "1 day left"
                    : `${daysLeft} days left`
                  : "Passed"}
              </p>

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
          );
        })}
      </div>
    </div>
  );
}

export default EventsSection;
