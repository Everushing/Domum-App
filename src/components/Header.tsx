import React from 'react';
import './Header.css'; // Import the CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Domum Realty</div>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

