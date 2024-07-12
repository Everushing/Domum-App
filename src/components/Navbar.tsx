import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css'; // Import the CSS file

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="navbar-links">
          <a href="/" className="navbar-link">
            {t('Home')}
          </a>
          <a href="/propertydetails" className="navbar-link">
            {t('Properties')}
          </a>
          <a href="/about" className="navbar-link">
            {t('About')}
          </a>
          <a href="/contact" className="navbar-link">
            {t('Contact')}
          </a>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
