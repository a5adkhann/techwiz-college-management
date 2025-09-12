import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/bookmark.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [data, setData] = useState([]);

  // Fetch data from JSON
  useEffect(() => {
    fetch("/data/bookmark.json") // ✅ public/data/bookmark.json
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);

  // Load saved bookmarks from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  // Toggle bookmark add/remove
  const toggleBookmark = (id) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    sessionStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  {/* Bookmark Icon */ }
  <button
    className="bookmark-toggle"
    onClick={() => setSidebarOpen(!sidebarOpen)} // 👈 toggle
  >
    <i className="ri-bookmark-line"></i>
    {data.length > 0 && (
      <span className="bookmark-badge">
        {bookmarks.length}/{data.length}
      </span>
    )}
  </button>


  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="./logo.png" alt="Logo" />
        </div>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end activeClassName="active" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendar" activeClassName="active" onClick={() => setMenuOpen(false)}>
                Event Calendar
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" activeClassName="active" onClick={() => setMenuOpen(false)}>
                Event Details
              </NavLink>
            </li>
            <li>
              <NavLink to="/registeration" activeClassName="active" onClick={() => setMenuOpen(false)}>
                Registeration
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="active" onClick={() => setMenuOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>
                Contact Us
              </NavLink>
            </li>
          </ul>

        </div>

        {/* Mobile Toggle */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

        {/* Bookmark Icon */}
        <button
          className="bookmark-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <i className="ri-bookmark-line"></i>
          {bookmarks.length > 0 && (
            <span className="bookmark-badge">{bookmarks.length}</span>
          )}
        </button>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <h2>All Items ({data.length})</h2>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="sidebar-content">
          {data.length === 0 ? (
            <p className="empty">Loading data...</p>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className={`bookmarked-item ${bookmarks.includes(item.id) ? "active" : ""
                  }`}
              >
                <span>{item.text}</span>
                <button onClick={() => toggleBookmark(item.id)}>
                  {bookmarks.includes(item.id) ? "Remove" : "Bookmark"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;