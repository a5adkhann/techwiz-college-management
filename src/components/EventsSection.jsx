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
    <div
      className="events-section"
      style={{
        padding: "40px 20px",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "'Anton', sans-serif",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: "2.8rem",
          color: "#3399cc",
        }}
      >
        Our <span style={{ color: "#1e75a8" }}>Events</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(22%, 1fr))",
          gap: "40px",
          justifyItems: "center",
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="cards"
            style={{
              padding: "20px 25px",
              borderRadius: "20px",
              width: "380px",
              backgroundColor: "#0a0a0a",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleViewDetails(event.id)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(51, 153, 204, 0.8), 0 0 20px #3399cc inset")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 15px rgba(0, 153, 204, 0.4), 0 0 10px #1e75a8 inset")
            }
          >
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              />
            )}

            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              {event.title.toUpperCase()}
            </h3>

            <p
              style={{
                fontSize: "0.85rem",
                marginBottom: "10px",
                fontWeight: "600",
              }}
            >
              <strong>Date:</strong> {new Date(event.date).toDateString()}
            </p>

            {/* Event Description */}
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: "1.3",
                marginBottom: "15px",
                fontWeight: "400",
                color: "#ccc",
              }}
            >
              {event.description}
            </p>

            
            {/* Event Status */}
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: "1.3",
                marginBottom: "15px",
                fontWeight: "400",
                color: "#ccc",
              }}
            >
              {event.status}
            </p>

            {/* Button */}
            <button
              style={{
                background: "transparent",
                border: "1px solid #fff",
                padding: "10px 20px",
                borderRadius: "10px",
                color: "white",
                fontSize: "10px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails(event.id);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#27A5DE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              VIEW MORE DETAILS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsSection;