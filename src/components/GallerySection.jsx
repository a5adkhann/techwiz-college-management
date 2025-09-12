import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../assets/css/gallery.css';

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);
  const [filteredYear, setFilteredYear] = useState('all');
  const [filteredCategory, setFilteredCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
  const categories = ['Cultural', 'Technical', 'Sports'];

  const getFilteredGallery = () => {
    return gallery.filter((item) => {
      const matchesYear = filteredYear === 'all' || parseInt(item.year) === parseInt(filteredYear);
      const matchesCategory = filteredCategory === 'all' || item.category === filteredCategory;
      const matchesSearch =
        searchTerm.trim() === '' ||
        (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesYear && matchesCategory && matchesSearch;
    });
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title" data-aos="fade-up" data-aos-duration="2000">Event Gallery</h2>

      <div className="filter-controls" data-aos="fade-up" data-aos-duration="2000">
        <div className="filter-bar">
          <div className="year-filter">
            <select
              id="yearSelect"
              onChange={(e) => setFilteredYear(e.target.value)}
              value={filteredYear}
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="category-filter">
            <select
              id="categorySelect"
              onChange={(e) => setFilteredCategory(e.target.value)}
              value={filteredCategory}
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="filter-bar">
          <div className="search-wrapper">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}

              className="search-input"
            />
          </div>
        </div>
      </div>


      <div className="gallery-container" >
        <div className="gallery-grid">
          {getFilteredGallery().map((img, index) => (
            <div className="gallery-item" key={index} data-aos="fade-up" data-aos-duration="2000">
              <img
                src={img.imageUrl}
                alt={img.title || `Gallery ${img.year} - ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;