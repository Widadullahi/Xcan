import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaClock, FaAmbulance, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ color: 'white' }}>
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <div className="footer-logo-wrapper mb-3">
              <img 
                src="/images/logo.png" 
                alt="XCAN Engineering Logo" 
                className="footer-logo"
                style={{ height: '60px', width: 'auto' }}
              />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)' }} className="mb-4">
              Nigeria's leading HOWO and Sinotruk truck specialists. 
              Professional heavy-duty truck solutions, genuine spare parts, 
              and expert maintenance services.
            </p>
          </Col>
          
          <Col lg={4} className="mb-4">
            <h5 className="footer-heading" style={{ color: 'white' }}>Contact Info</h5>
            <div className="contact-info" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <FaPhone style={{ color: 'white' }} /> +234 703 470 0040
            </div>
            <div className="contact-info" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <FaEnvelope style={{ color: 'white' }} /> edehdaven@gmail.com
            </div>
            <div className="contact-info" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <FaClock style={{ color: 'white' }} /> Mon-Sat: 7AM-7PM
            </div>
            <div className="contact-info" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <FaAmbulance style={{ color: 'white' }} /> 24/7 Emergency
            </div>
            <div className="contact-info" style={{ color: 'rgba(255,255,255,0.8)' }}>
              <FaMapMarkerAlt style={{ color: 'white' }} /> On-site Service Available
            </div>
          </Col>
          
          <Col lg={4} className="mb-4">
            <h5 className="footer-heading" style={{ color: 'white' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#trucks" style={{ color: 'rgba(255,255,255,0.8)' }}>Truck Sales</a></li>
              <li><a href="#parts" style={{ color: 'rgba(255,255,255,0.8)' }}>Spare Parts</a></li>
              <li><a href="#services" style={{ color: 'rgba(255,255,255,0.8)' }}>Maintenance Service</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.3)' }} />
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>&copy; {currentYear} XCAN Engineering. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>HOWO & Sinotruk Truck Specialists</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;