// src/pages/AboutPage.tsx (or src/components/AboutPage.tsx)

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Domum</h1>
      <p className="text-gray-700 leading-relaxed">
        Domum is your go-to platform for real estate transactions in Abidjan, Côte d'Ivoire. Our mission is to simplify the process of finding, viewing, and securing properties, while providing a seamless experience for both property seekers and agents.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Whether you're looking to buy, rent, or sell a property, Domum offers innovative tools like property viewing coordination, secure payment gateways, and integrated moving services to meet your needs.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Our team is committed to providing reliable market data and insights, helping you make informed decisions about real estate investments. With Domum, finding your dream home or commercial space has never been easier.
      </p>
    </div>
  );
};

export default AboutPage;