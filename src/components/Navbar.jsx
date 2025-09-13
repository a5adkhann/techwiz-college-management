import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/bookmark.css";

const Navbar = ({ handleStorage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarkedEvents")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBookmark = (item) => {
    let updated = [...bookmarks];
    const exists = updated.some((b) => b.id === item.id);
    if (exists) {
      updated = updated.filter((b) => b.id !== item.id);
    } else {
      updated.push(item);
    }
    setBookmarks(updated);
    localStorage.setItem("bookmarkedEvents", JSON.stringify(updated));
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/home">
            <img src="./logo.png" alt="Logo" />
          </NavLink>
        </div>

        <div className={`nav-items ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/home" end activeClassName="active" onClick={() => setMenuOpen(false)}>
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
                Registration
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

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>

        <div style={{ display: "flex", gap: "25px" }}>
          <button
            style={{ cursor: "pointer", paddingBlock: "8px", fontSize: "16px" }}
            className="btn-primary"
            onClick={() => handleStorage()}
          >
            Switch User
          </button>
          <button
            className="bookmark-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ fontSize: "16px", position: "relative" }}
          >
            <i className="ri-bookmark-line"></i>
            {bookmarks.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                }}
              >
                {bookmarks.length}
              </span>
            )}
          </button>

        </div>
      </nav>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <h3>Bookmarked Items ({bookmarks.length})</h3>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="sidebar-content">
          {bookmarks.length === 0 ? (
            <p className="empty">No bookmarks yet</p>
          ) : (
            bookmarks.map((item) => (
              <div key={item.id} className="bookmarked-item active">
                <span>{item.name}</span>
                <button onClick={() => toggleBookmark(item)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
