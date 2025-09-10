import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/eventcatalog.css";

function EventCatalog() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("/data/catalog.json");
      setEvents(response.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="events-container">
      <h2 className="events-title"> Campus Events Catalog</h2>

      {loading ? (
        <p className="loading-text">Loading events...</p>
      ) : events.length > 0 ? (
        <div className="events-grid">
          {events.map((event, e) => (
            <div className="event-card" key={e}>
              <div className="event-header">
                <h3>{event.name}</h3>
                <span className={`event-badge ${event.category.toLowerCase()}`}>
                  {event.category}
                </span>
              </div>
              <p className="event-date">
                {new Date(event.date).toLocaleDateString()} | {event.time}
              </p>
              <p className="event-venue"><i class="ri-map-pin-line"></i> {event.venue}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events">No events available</p>
      )}
    </div>
  );
}

export default EventCatalog;