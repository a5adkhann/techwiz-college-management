import React, { createContext, useEffect, useState } from "react";
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
      const response = await axios.get("./data/catalog.json");
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
  const categories = ["Cultural", "Technical", "Sports", "Academic", "Departmental"];

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

  useEffect(() => {
    filterEvents();
  }, [searchTerm, filteredYear, filteredCategory, events]);

const handleBookmark = (event) => {
  let saved = JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];

  if (!saved.some((e) => e.id === event.id)) {
    saved.push(event);
    localStorage.setItem("bookmarkedEvents", JSON.stringify(saved));
    alert("Event bookmarked!");
  } else {
    alert("Already bookmarked!");
  }
};


  return (
    <div className="events-container">
      <h2 className="events-title" data-aos="fade-up" data-aos-duration="2000">Campus <span>Events</span> Catalog </h2>

      <div className="filter-controls" data-aos="fade-up" data-aos-duration="2000">
        <div className="filter-bar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
          <div className="year-filter">
            <select
              onChange={(e) => setFilteredYear(e.target.value)}
              value={filteredYear}
              style={{ color: "#000" }}
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
              style={{ color: "#000" }}
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
        <div className="events-container-catalog">
          {filteredEvents.map((event, index) => (
            <div className="event-card" key={index} data-aos="fade-up" data-aos-duration="2000">
              <div className="event-header">
                <div className="event-text">
                <h3>{event.name}</h3>
                <h4 className={`event-badge ${event.category.toLowerCase()}`}>
                  {event.category}
                </h4>
                </div>

                <div className="bookmark">
                  <i className="ri-bookmark-line"  onClick={() => handleBookmark(event)}></i>
                </div>

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
