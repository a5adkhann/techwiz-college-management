import React, { useEffect, useState } from "react";
import "../assets/css/bookmark.css";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../data/bookmark.json")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("bookmarks");
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);


  const toggleBookmark = (id) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter(b => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    sessionStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <div className="bookmark-container">
      <h1>Bookmark List</h1>

      <ul className="content-list">
        {data.map(item => (
          <li
            key={item.id}
            className={`content-item ${
              bookmarks.includes(item.id) ? "bookmarked" : ""
            }`}
          >
            {item.text}
            <button onClick={() => toggleBookmark(item.id)}>
              {bookmarks.includes(item.id) ? "Remove Bookmark" : "Bookmark"}
            </button>
          </li>
        ))}
      </ul>

      {bookmarks.length > 0 && (
        <>
          <h2>Bookmarked Items</h2>
          <ul className="bookmarked-list">
            {data
              .filter(item => bookmarks.includes(item.id))
              .map(item => (
                <li key={item.id}>{item.text}</li>
                
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BookmarkList;