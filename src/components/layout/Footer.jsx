import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaClock, FaAmbulance, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} className="mb-4">
            <h5 className="footer-heading">XCAN ENGINEERING</h5>
            <p className="mb-4">
              Nigeria's leading HOWO and Sinotruk truck specialists. 
              Professional heavy-duty truck solutions, genuine spare parts, 
              and expert maintenance services.
            </p>
          </Col>
          
          <Col lg={4} className="mb-4">
            <h5 className="footer-heading">Contact Info</h5>
            <div className="contact-info">
              <FaPhone /> +234 703 470 0040
            </div>
            <div className="contact-info">
              <FaEnvelope /> edehdaven@gmail.com
            </div>
            <div className="contact-info">
              <FaClock /> Mon-Sat: 7AM-7PM
            </div>
            <div className="contact-info">
              <FaAmbulance /> 24/7 Emergency
            </div>
            <div className="contact-info">
              <FaMapMarkerAlt /> On-site Service Available
            </div>
          </Col>
          
          <Col lg={4} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#trucks">Truck Sales</a></li>
              <li><a href="#parts">Spare Parts</a></li>
              <li><a href="#services">Maintenance Service</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; {currentYear} XCAN Engineering. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">HOWO & Sinotruk Truck Specialists</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;