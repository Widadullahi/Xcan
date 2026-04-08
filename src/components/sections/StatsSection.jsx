import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTruck, FaTools, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    { number: '10+', label: 'Years Truck Lifespan', icon: FaTruck },
    { number: '100%', label: 'Genuine Parts', icon: FaTools },
    { number: '24/7', label: 'Emergency Support', icon: FaHeadset },
    { number: '1 Year', label: 'Full Warranty', icon: FaShieldAlt },
  ];

  return (
    <section className="stats-section section-padding">
      <Container>
        <div className="text-center mb-4">
          <h3 className="text-white fw-bold">Heavy Duty Trucks System Health Engineer</h3>
          <p className="text-white-50">Professional diagnostics and maintenance for optimal truck performance</p>
        </div>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col key={index} xs={6} md={3} className="stat-item">
              <div className="stat-icon mb-3">
                <stat.icon size={32} />
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
