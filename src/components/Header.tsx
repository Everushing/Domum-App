// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="logo">Domum App</h1>
        {/* <nav>
          <ul className="d-flex list-unstyled m-0">
            <li className="mx-3"><a href="/" className="text-light">Home</a></li>
            <li className="mx-3"><a href="/properties" className="text-light">Properties</a></li>
            <li className="mx-3"><a href="/about" className="text-light">About</a></li>
            <li className="mx-3"><a href="/contact" className="text-light">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
