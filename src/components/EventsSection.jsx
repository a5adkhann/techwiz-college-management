import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/eventsection.css";

const events = [
  {
    id: 1,
    title: "TechFest 2025",
    date: "2025-07-20",
    description:
      "A day filled with innovation, workshops, and exciting tech showcases.",
    image: "../public/event1.jpg",
    detailPage: "techfest.html",
  },
  {
    id: 2,
    title: "Cultural Week",
    date: "2025-08-05",
    description:
      "A vibrant celebration of arts, music, dance, and diverse traditions.",
    image: "../public/event2.jpg",
    detailPage: "culturalweek.html",
  },
  {
    id: 3,
    title: "AI Workshop",
    date: "2025-09-15",
    description:
      "Hands-on sessions exploring artificial intelligence, machine learning, and real-world applications.",
    image: "/../public/event3.jpg",
    detailPage: "aiworkshop.html",
  },
  {
    id: 4,
    title: "Football Championship",
    date: "2025-10-10",
    description:
      "An action-packed sports festival featuring competitions, fun activities, and team spirit.",
    image: "../public/event4.jpg",
    detailPage: "sportsgala.html",
  },
  {
    id: 5,
    title: "Science Exhibition",
    date: "2025-11-05",
    description:
      "Students showcase innovative projects and experiments that inspire curiosity and discovery.",
    image: "../public/event5.jpg",
    detailPage: "scienceexhibition.html",
  },
  {
    id: 6,
    title: "Alumni Meet",
    date: "2025-12-20",
    description:
      "A reunion event where alumni connect, share experiences, and celebrate achievements together.",
    image: "../public/event6.jpg",
    detailPage: "alumnimeet.html",
  },
];

function EventsSection() {
  const navigate = useNavigate();

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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
              maxWidth: "280px",
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
            <button
              style={{
                backgroundColor: "#e67e22",
                color: "#000",
                border: "none",
                borderRadius: "6px",
                padding: "8px 14px",
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "'Anton', sans-serif",
                letterSpacing: "1px",
                transition: "background-color 0.3s ease",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleViewDetails(event.id);
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d35400")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#e67e22")
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