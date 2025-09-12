import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/eventcatalog.css";

function EventCatalog() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredYear, setFilteredYear] = useState("all");
  const [filteredCategory, setFilteredCategory] = useState("all");

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

  const years = [2023, 2024, 2025];
  const categories = ["Cultural", "Technical", "Sports","Academic","Departmental"];

  const filterEvents = () => {
    const filtered = events.filter((event) => {
      const matchesYear =
        filteredYear === "all" ||
        new Date(event.date).getFullYear().toString() === filteredYear;

      const matchesCategory =
        filteredCategory === "all" || event.category === filteredCategory;

      const matchesSearch =
        searchTerm.trim() === "" ||
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesYear && matchesCategory && matchesSearch;
    });

    setFilteredEvents(filtered);
  };

  // Re-filter whenever any filter changes
  useEffect(() => {
    filterEvents();
  }, [searchTerm, filteredYear, filteredCategory, events]);

  return (
    <div className="events-container">
      <h2 className="events-title">Campus Events Catalog</h2>

      <div className="filter-controls">
        <div className="filter-bar">
          <div className="year-filter">
            <select
              onChange={(e) => setFilteredYear(e.target.value)}
              value={filteredYear}
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="category-filter">
            <select
              onChange={(e) => setFilteredCategory(e.target.value)}
              value={filteredCategory}
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="search-wrapper">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <p className="loading-text">Loading events...</p>
      ) : filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-header">
                <h3>{event.name}</h3>
                <span className={`event-badge ${event.category.toLowerCase()}`}>
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