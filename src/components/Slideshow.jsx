import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "../assets/css/slider.css";

const Slideshow = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch('/data/slides.json');
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching slide data:', error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="slider-container">
      <Fade duration={3000} transitionDuration={800} infinite arrows={true}>
        {slides.map((slide, index) => (
          <div
            className="each-slide"
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="caption-overlay">
              <h3 className="slide-title">{slide.title}</h3>
              <h1 className="slide-heading">{slide.heading}</h1>
              <p className="slide-text">{slide.text}</p>
              <Link to="/registeration">
                <button className="slide-btn">{slide.button}</button>
              </Link>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
