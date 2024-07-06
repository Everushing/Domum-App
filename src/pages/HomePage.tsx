// src/pages/HomePage.tsx

import React from 'react';
import SearchBar from '../components/SearchBar';


const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Domum</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        Find your dream home in Abidjan with ease. Search through thousands of listings and connect with trusted agents.
      </p>
      <SearchBar />
    
    </div>
  );
};

export default HomePage;