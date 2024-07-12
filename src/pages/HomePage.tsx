import React from 'react';
import SearchBar from '../components/SearchBar';
import './HomePage.css'; // Import the CSS file

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <div className="header">
        {/* <div className="logo">Domum Realty</div> */}
        <div className="menu-icon"></div>
      </div>
      <div className="hero-image">
        <div className="overlay-text">
          <h1 className="overlay-title">Your way to HOME</h1>
          <p className="overlay-description">
            Find your dream home in Abidjan with ease. Search through thousands of listings and connect with trusted agents.
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
