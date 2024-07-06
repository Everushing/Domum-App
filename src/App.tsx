// src/App.tsx

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import NotFoundPage from './pages/NotFoundPage';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage'; 
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/propertydetails/:id" element={<PropertyDetails />} />
            <Route path="/contact" element={<Contact />} /> {/* Route to Contact page */}
            <Route path="/about" element={<AboutPage />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

