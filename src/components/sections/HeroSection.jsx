import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaCalendarAlt, FaTools } from 'react-icons/fa';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <Container>
        <h1 className="slide-up">
          PROFESSIONAL <span className="highlight">HOWO & SINOTRUK</span> TRUCK SPECIALISTS
        </h1>
        
        <p className="slide-up">
          Nigeria's leading experts in HOWO and Sinotruk heavy duty trucks, genuine spare parts, 
          and expert maintenance services. Engineering excellence ensuring your fleet operates 
          efficiently for over a decade.
        </p>
        
        <div className="mt-4 d-flex flex-column flex-md-row justify-content-center gap-3">
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => scrollToSection('#trucks')}
          >
            View Trucks
          </Button>
          
          <Button 
            variant="outline-primary" 
            size="lg"
            onClick={() => scrollToSection('#schedule')}
          >
            <FaCalendarAlt /> Schedule Consultation
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection('#services')}
          >
            <FaTools /> Service Booking
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;