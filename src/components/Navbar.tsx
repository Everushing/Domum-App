// src/components/Navbar.tsx
// src/components/Navbar.tsx

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-yellow-400">
      <nav className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/propertydetails" className="hover:text-gray-300">
              Properties
            </a>
            <a href="/about" className="hover:text-gray-300">
              About
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
