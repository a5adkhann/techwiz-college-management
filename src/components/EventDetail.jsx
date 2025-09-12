// src/components/EventDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/eventdetail.css"; 

function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get("../data/events.json") 
      .then((res) => {
        console.log(res.data);
        const foundEvent = res.data.find((item) => item.id === parseInt(id));
        setEvent(foundEvent);
      })
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  if (!event) {
    return (
      <div className="event-detail-loading">
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="event-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Events
      </button>

      <div className="event-detail-card">
        {/* Left side image */}
        <div className="event-detail-image">
          <img src={event.image} alt={event.title} />
        </div>

        {/* Right side content */}
        <div className="event-detail-content">
          <h1 className="event-detail-title">{event.title}</h1>
          <p className="event-detail-date">
            <i className="ri-calendar-line"></i>{" "}
            {new Date(event.date).toDateString()}
          </p>
          <p className="event-detail-description">{event.description}</p>

           <div className='cta-buttons' style={{display: "flex", justifyContent: "left"}}>
            <button className="btn-primary">
              Register
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
