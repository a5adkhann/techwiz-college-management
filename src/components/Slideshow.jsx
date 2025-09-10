import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../assets/css/slider.css'; // ✅ You'll create this CSS file

const slideImages = [
  {
    url: '/slide1.jpg', // Use public folder path without ../public
    caption: 'Where Passion\nMeets Performance'
  },
  {
    url: '/slide2.jpg',
    caption: 'From Casual Meetups\nTo Major Moments'
  },
  {
    url: '/slide3.jpg',
    caption: 'Learn Today,\nLead Tomorrow'
  },
];

const Slideshow = () => {
  return (
    <div className="slider-container">
      <Fade duration={3000} transitionDuration={800} infinite arrows={true}>
        {slideImages.map((slide, index) => (
          <div className="each-slide" key={index} style={{ backgroundImage: `url(${slide.url})` }}>
            <div className="caption-overlay">
              {slide.caption.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
