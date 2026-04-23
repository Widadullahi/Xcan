import React from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
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
          <Nav className="navbar-nav mx-lg-auto">
            <Nav.Link href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item onClick={() => scrollToSection('#services')}>All Services</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#services')}>Basic Maintenance</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#services')}>Standard Repair</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#services')}>Major Overhaul</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#schedule')}>Schedule Service</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#trucks" onClick={(e) => { e.preventDefault(); scrollToSection('#trucks'); }}>Trucks</Nav.Link>
            <Nav.Link href="#parts" onClick={(e) => { e.preventDefault(); scrollToSection('#parts'); }}>Parts</Nav.Link>
            <NavDropdown title="Gallery" id="gallery-dropdown">
              <NavDropdown.Item onClick={() => scrollToSection('#gallery')}>All Gallery</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#videos')}>Videos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#gallery')}>Photos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => scrollToSection('#testimonials')}>Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</Nav.Link>
          </Nav>
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