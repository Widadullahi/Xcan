import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar d-none d-md-block">
      <Container>
        <Row>
          <Col md={6}>
            <FaClock /> Mon - Sat: 7:00 AM - 7:00 PM | 24/7 Emergency
          </Col>
          <Col md={6} className="text-md-end">
            <a href="tel:+2347034700040">
              <FaPhone /> +234 703 470 0040
            </a>
            <a href="mailto:edehdaven@gmail.com" className="ms-3">
              <FaEnvelope /> edehdaven@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;