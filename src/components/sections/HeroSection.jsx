import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { FaWhatsapp, FaPhone, FaCheckCircle, FaTruck, FaTools } from 'react-icons/fa';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Hero Background Pattern */}
      <div className="hero-bg-pattern"></div>
      
      <Container>
        <Row className="align-items-center hero-row">
          {/* Left Content */}
          <Col lg={6} className="hero-content-wrapper">
            <div className="hero-content">
              {/* Pre-badge */}
              <div className="hero-badge-wrapper mb-4">
                <Badge className="hero-badge">
                  <FaTruck className="me-2" /> NIGERIA'S #1 TRUCK SPECIALISTS
                </Badge>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title slide-up">
                HEAVY DUTY<br />
                <span className="hero-title-accent">TRUCK EXPERTS</span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle slide-up">
                Professional <strong>HOWO & SINOTRUK</strong> specialists. 
                We supply brand new, direct tokunbo, and China refurbished heavy-duty trucks 
                with complete after-sales support across Nigeria.
              </p>

              {/* Trust Indicators */}
              <div className="hero-features slide-up">
                <div className="hero-feature-item">
                  <FaCheckCircle className="hero-feature-icon" />
                  <span>Genuine Parts</span>
                </div>
                <div className="hero-feature-item">
                  <FaCheckCircle className="hero-feature-icon" />
                  <span>1-Year Warranty</span>
                </div>
                <div className="hero-feature-item">
                  <FaCheckCircle className="hero-feature-icon" />
                  <span>Nationwide Delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta slide-up">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="hero-btn-primary me-3"
                  href="https://wa.me/2347034700040?text=Hello%20XCAN!%20I'm%20interested%20in%20your%20trucks%20and%20services."
                  target="_blank"
                >
                  <FaWhatsapp className="me-2" /> Chat on WhatsApp
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  className="hero-btn-secondary"
                  onClick={() => scrollToSection('#trucks')}
                >
                  <FaTruck className="me-2" /> View Trucks
                </Button>
              </div>

              {/* Contact Info */}
              <div className="hero-contact slide-up">
                <a href="tel:+2347034700040" className="hero-phone">
                  <FaPhone className="me-2" /> +234 703 470 0040
                </a>
                <span className="hero-divider">|</span>
                <span className="hero-availability">
                  <FaTools className="me-2" /> 24/7 Emergency Support
                </span>
              </div>
            </div>
          </Col>

          {/* Right Image - Truck */}
          <Col lg={6} className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-bg"></div>
              <div className="hero-image-frame">
                <img 
                  src="/images/1.jpeg" 
                  alt="XCAN Engineering Heavy Duty Truck" 
                  className="hero-image"
                />
              </div>
              {/* Floating Badge */}
              <div className="hero-floating-badge">
                <div className="floating-badge-content">
                  <span className="floating-badge-number">10+</span>
                  <span className="floating-badge-text">Years Experience</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;