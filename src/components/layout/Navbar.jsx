import React, { useState } from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavbarComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  return (
    <>
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
          
          {/* Desktop Navigation */}
          <div className="navbar-nav-wrapper d-none d-lg-flex">
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="navbar-toggler d-lg-none border-0 bg-transparent"
            onClick={() => setShowMobileMenu(true)}
            aria-label="Toggle navigation"
          >
            <FaBars size={20} color="var(--text-secondary)" />
          </button>

          {/* WhatsApp Button - Desktop */}
          <a 
            href="https://wa.me/2347034700040" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-whatsapp-btn d-none d-lg-flex align-items-center"
          >
            <FaWhatsapp className="me-2" size={16} />
            <span className="nav-btn-text">WhatsApp</span>
          </a>
        </Container>
      </BootstrapNavbar>

      {/* Mobile Menu Offcanvas */}
      <Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)} placement="end">
        <Offcanvas.Header className="border-bottom">
          <Offcanvas.Title className="d-flex align-items-center">
            <img 
              src="/images/logo.png" 
              alt="XCAN Engineering Logo" 
              style={{ height: '30px', width: 'auto', marginRight: '10px' }}
            />
            <div>
              <div className="fw-bold fs-6">XCAN ENGINEERING</div>
              <div className="text-muted small">HOWO & Sinotruk Truck Specialists</div>
            </div>
          </Offcanvas.Title>
          <button 
            className="btn btn-link p-0 text-dark"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes size={20} />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Nav className="flex-column p-3">
            <Nav.Link 
              className="mobile-nav-link py-3 border-bottom" 
              onClick={() => scrollToSection('#home')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              className="mobile-nav-link py-3 border-bottom" 
              onClick={() => scrollToSection('#about')}
            >
              About
            </Nav.Link>
            
            {/* Services Section */}
            <div className="mobile-nav-section">
              <div className="mobile-nav-header py-3 fw-bold text-primary">Services</div>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#services')}>All Services</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#services')}>Basic Maintenance</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#services')}>Standard Repair</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#services')}>Major Overhaul</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#schedule')}>Schedule Service</Nav.Link>
            </div>
            
            <Nav.Link 
              className="mobile-nav-link py-3 border-bottom" 
              onClick={() => scrollToSection('#trucks')}
            >
              Trucks
            </Nav.Link>
            <Nav.Link 
              className="mobile-nav-link py-3 border-bottom" 
              onClick={() => scrollToSection('#parts')}
            >
              Parts
            </Nav.Link>
            
            {/* Gallery Section */}
            <div className="mobile-nav-section">
              <div className="mobile-nav-header py-3 fw-bold text-primary">Gallery</div>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#gallery')}>All Gallery</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#videos')}>Videos</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#gallery')}>Photos</Nav.Link>
              <Nav.Link className="mobile-nav-sublink py-2 ps-4" onClick={() => scrollToSection('#testimonials')}>Testimonials</Nav.Link>
            </div>
            
            <Nav.Link 
              className="mobile-nav-link py-3 border-bottom" 
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </Nav.Link>
            
            {/* WhatsApp Button - Mobile */}
            <div className="p-3">
              <a 
                href="https://wa.me/2347034700040" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success w-100 d-flex align-items-center justify-content-center"
              >
                <FaWhatsapp className="me-2" size={16} />
                WhatsApp Us
              </a>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;