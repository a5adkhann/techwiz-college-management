import "../assets/css/feedback.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // Make sure this import is present

const FeedbackSection = () => {

  return (
    <div className="feedback-form-container">
      <h1 className="form-title">Feedback</h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
        />

        <label>Select User</label>
        <select>
            <option>Student</option>
            <option>Faculty</option>
        </select>

        
        <label>Select Event</label>
        <select>
            <option>TechFest</option>
            <option>Cultural Day</option>
        </select>

        <label>Give Rating</label>
        <div className="star-rating">
        <i className="ri-star-line filled"></i>
        <i className="ri-star-line filled"></i>
        <i className="ri-star-line filled"></i>
        <i class="ri-star-half-line"></i>
        <i className="ri-star-line"></i>
        </div>

        <textarea className="form-input" placeholder="Comments"></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackSection;
