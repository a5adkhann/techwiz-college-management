import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/gallery.css';

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [filteredYear, setFilteredYear] = useState('all');

  const fetchGallery = async () => {
    try {
      const response = await axios.get('./data/gallery.json');
      setGallery(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const years = [2023, 2024, 2025];

  const getFilteredGallery = (year) => {
    const filtered = gallery.filter((item) => parseInt(item.year) === year);
    return filtered;
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Photo Gallery</h2>


      <div className="year-filter">
        <label htmlFor="yearSelect"><i class="ri-filter-2-fill"></i></label>
        <select
          id="yearSelect"
          onChange={(e) => setFilteredYear(e.target.value)}
          value={filteredYear}
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="gallery-container">
        {(filteredYear === 'all' ? years : [parseInt(filteredYear)]).map((year) => {
          const images = getFilteredGallery(year);
          console.log(images);
          return (
            <div key={year} className="year-section">
              <div className="gallery-grid">
                {images.map((img, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={img.imageUrl} alt={`Gallery ${year} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;