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
      <h2 className="gallery-title">Event Gallery</h2>

      <div className="filter-controls">
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

  <div className="search-filter">
    <div className="search-input-wrapper">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
</div>


      <div className="gallery-container">
        <div className="gallery-grid">
          {getFilteredGallery().map((img, index) => (
            <div className="gallery-item" key={index}>
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