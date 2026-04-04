import React, { useState } from 'react';
import { Container, Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';
import { FaTruck, FaBars, FaCalendarAlt } from 'react-icons/fa';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#trucks', label: 'Trucks' },
    { href: '#parts', label: 'Parts' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false);
    }
  };

  return (
    <>
      <BootstrapNavbar expand="lg" className="navbar sticky-top" expanded={expanded}>
        <Container>
          <BootstrapNavbar.Brand href="#home" className="navbar-brand">
            <div className="d-flex align-items-center">
              <div className="bg-primary rounded-circle p-2 me-2">
                <FaTruck className="text-white" />
              </div>
              <div>
                <div className="fw-bold">XCAN ENGINEERING</div>
                <div className="text-gray fs-6 d-none d-md-block">HOWO & Sinotruk Truck Specialists</div>
              </div>
            </div>
          </BootstrapNavbar.Brand>
          
          <BootstrapNavbar.Toggle 
            aria-controls="navbarNav" 
            onClick={() => setExpanded(!expanded)}
            className="navbar-toggler"
          >
            <FaBars />
          </BootstrapNavbar.Toggle>
          
          <BootstrapNavbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
              <Nav.Link
                href="#schedule"
                className="nav-link d-lg-none"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#schedule');
                }}
              >
                <FaCalendarAlt /> Schedule
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default NavbarComponent;