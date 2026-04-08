import React from 'react';
import { Container, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const NavbarComponent = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BootstrapNavbar className="navbar navbar-nailbond sticky-top">
      <Container>
        <BootstrapNavbar.Brand 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          <div className="d-flex align-items-center">
            <img 
              src="/images/logo.png" 
              alt="XCAN Engineering Logo" 
              className="navbar-logo"
              style={{ height: '40px', width: 'auto', marginRight: '12px' }}
            />
            <div>
              <div className="fw-bold">XCAN ENGINEERING</div>
              <div className="text-gray fs-6 d-none d-md-block">HOWO & Sinotruk Truck Specialists</div>
            </div>
          </div>
        </BootstrapNavbar.Brand>
        
        <div className="navbar-nav-wrapper">
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}>Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trucks" onClick={(e) => { e.preventDefault(); scrollToSection('#trucks'); }}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('#gallery'); }}>Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a>
            </li>
          </ul>
          <a 
            href="https://wa.me/2347034700040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-whatsapp-btn d-flex align-items-center"
          >
            <FaWhatsapp className="me-2" size={16} />
            <span className="nav-btn-text">WhatsApp</span>
          </a>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavbarComponent;