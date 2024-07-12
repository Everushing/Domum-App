import React from 'react';
import './AboutPage.css'; // Import the CSS file

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Domum</h1>
      <p className="about-text">
        Domum is your go-to platform for real estate transactions in Abidjan, Côte d'Ivoire. Our mission is to simplify the process of finding, viewing, and securing properties, while providing a seamless experience for both property seekers and agents.
      </p>
      <p className="about-text">
        Whether you're looking to buy, rent, or sell a property, Domum offers innovative tools like property viewing coordination, secure payment gateways, and integrated moving services to meet your needs.
      </p>
      <p className="about-text">
        Our team is committed to providing reliable market data and insights, helping you make informed decisions about real estate investments. With Domum, finding your dream home or commercial space has never been easier.
      </p>
    </div>
  );
};

export default AboutPage;
