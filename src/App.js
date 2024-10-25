// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';
import { Container, Navbar, Nav, Card, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import LoginSignupPage from './components/LoginSignupPage';
import Products from './components/Products';
import CartPage from './components/CartPage';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './components/NavbarStyles.css'; // Import custom CSS styles
import CustomNavbar from './components/CustomNavbar';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // Optional: for continuous sliding
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // Optional: for continuous sliding
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // Optional: for continuous sliding
  }
};
 






function App() {
  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <Router>
      <div>
      <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
