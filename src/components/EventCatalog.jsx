import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/eventcatalog.css";

function EventCatalog() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("/data/catalog.json");
      setEvents(response.data);
      setFilteredEvents(response.data); 
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(
        (event) =>
          event.name.toLowerCase().includes(value) ||
          event.category.toLowerCase().includes(value) ||
          event.venue.toLowerCase().includes(value) ||
          event.description.toLowerCase().includes(value)
      );
      setFilteredEvents(filtered);
    }
  };


  const handleShowAll = () => {
    setSearchTerm("");
    setFilteredEvents(events);
  };

  return (
    <div className="events-container">
      <h2 className="events-title">Campus Events Catalog</h2>

      {/* Search + All Button */}
      <div className="filter-bar">
        <div className="search-wrapper">
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      {loading ? (
        <p className="loading-text">Loading events...</p>
      ) : filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((event, e) => (
            <div className="event-card" key={e}>
              <div className="event-header">
                <h3>{event.name}</h3>
                <span
                  className={`event-badge ${event.category.toLowerCase()}`}
                >
                  {event.category}
                </span>
              </div>
              <p className="event-date">
                <i className="ri-calendar-line"></i>{" "}
                {new Date(event.date).toLocaleDateString()} | {event.time}
              </p>
              <p className="event-venue">
                <i className="ri-map-pin-line"></i> {event.venue}
              </p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-events">No events found</p>
      )}
    </div>
  );
}

export default EventCatalog;