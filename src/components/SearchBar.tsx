import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [bedrooms, setBedrooms] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();

    if (searchTerm.trim() !== '') {
      queryParams.append('q', searchTerm.trim());
    }

    if (location.trim() !== '') {
      queryParams.append('location', location.trim());
    }

    if (bedrooms.trim() !== '') {
      queryParams.append('bedrooms', bedrooms.trim());
    }

    if (minPrice.trim() !== '') {
      queryParams.append('min_price', minPrice.trim());
    }

    if (maxPrice.trim() !== '') {
      queryParams.append('max_price', maxPrice.trim());
    }

    const queryString = queryParams.toString();
    window.location.href = `/search?${queryString}`;
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search properties..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="Bedrooms"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="search-input"
      />

      <input
        type="text"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="search-input"
      />

      <button
        type="submit"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

