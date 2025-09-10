import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/gallery.css';

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);

  const fetchGallery = async () => {
    try {
      const response = await axios.get('./data/gallery.json');
      console.log(response);
      setGallery(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((g, index) => (
          <div className="gallery-item" key={index}>
            <img src={g.imageUrl} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;