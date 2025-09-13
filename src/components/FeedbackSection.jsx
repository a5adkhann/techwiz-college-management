import { useNavigate } from "react-router-dom";
import "../assets/css/feedback.css";

const FeedbackSection = () => {

  const navigate = useNavigate();
  const handleFeedback = (e) => {
    e.preventDefault();
    navigate("/home");
    alert("Thanks for the feedback")
  }

  return (
    <div className="feedback">
    <div className="feedback-form-container">
      <h1 className="form-title">Feedback</h1>
      <form onSubmit={handleFeedback}>
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
        />

        
        <label>Select Event</label>
        <select required>
            <option>TechFest</option>
            <option>Cultural Day</option>
            <option>Football Championship</option>
        </select>

        <label>Give Rating</label>
        <div className="star-rating">
        <i className="ri-star-line filled"></i>
        <i className="ri-star-line filled"></i>
        <i className="ri-star-line filled"></i>
        <i class="ri-star-half-line"></i>
        <i className="ri-star-line"></i>
        </div>

        <textarea className="form-input" placeholder="Comments" required></textarea>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackSection;
