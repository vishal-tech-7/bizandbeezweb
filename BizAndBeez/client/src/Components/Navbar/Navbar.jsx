import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menubar from '../../assets/menu-bar.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigate = useNavigate();

  const scrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const yOffset = -100; // Offset for sticky navbar height
        const yPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <section id="Navbar">
      <nav className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} alt="Biz&Beez logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('AboutUs');
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ContactUs');
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="menubar-container">
          <img onClick={toggleVisibility} className="menubarImg" src={menubar} alt="menu" />
        </div>
      </nav>
      {isVisible && (
        <div className="mobile-nav">
          <ul className="mob-nav-links">
            <li>
              <Link className="mob-link" to="/" onClick={toggleVisibility}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="mob-link"
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  toggleVisibility();
                  scrollToSection('AboutUs');
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="mob-link"
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  toggleVisibility();
                  scrollToSection('services');
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="mob-link"
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  toggleVisibility();
                  scrollToSection('ContactUs');
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
