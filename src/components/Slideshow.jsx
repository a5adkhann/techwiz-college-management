import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../assets/css/slider.css";

const slideImages = [
  {
    url: "./slide1.jpg",
    title: "CELEBRATE SUCCESS WITH",
    heading: "GRADUATION EVENTS",
    text: "Organize memorable convocations, award ceremonies, and academic celebrations with ease.",
    button: "EXPLORE",
  },
  {
    url: "./slide2.jpg",
    title: "BRING ENERGY TO",
    heading: "COLLEGE SPORTS",
    text: "Plan tournaments, track participation, and cheer for your teams — all in one platform.",
    button: "JOIN NOW",
  },
  {
    url: "./slide3.jpg",
    title: "SHOWCASE TALENT AT",
    heading: "CULTURAL FESTS",
    text: "From music nights to art exhibitions, manage registrations and schedules effortlessly.",
    button: "GET STARTED",
  },
];

const Slideshow = () => {
  return (
    <div className="slider-container">
      <Fade duration={3000} transitionDuration={800} infinite arrows={true}>
        {slideImages.map((slide, index) => (
          <div
            className="each-slide"
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
          >
            <div className="caption-overlay">
              <h3 className="slide-title">{slide.title}</h3>
              <h1 className="slide-heading">{slide.heading}</h1>
              <p className="slide-text">{slide.text}</p>
              <button className="slide-btn">{slide.button}</button>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
