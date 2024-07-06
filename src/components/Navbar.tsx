// src/components/Navbar.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
    
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">
            {t('Home')}
          </a>
          <a href="/propertydetails" className="hover:text-gray-300">
            {t('Properties')}
          </a>
          <a href="/about" className="hover:text-gray-300">
            {t('About')}
          </a>
          <a href="/contact" className="hover:text-gray-300">
            {t('Contact')}
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
