import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StatsSection = () => {
  const stats = [
    { number: '10+', label: 'Years Truck Lifespan' },
    { number: '100%', label: 'Genuine Parts' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '1 Year', label: 'Full Warranty' },
  ];

  return (
    <section className="stats-section section-padding">
      <Container>
        <Row className="text-center">
          {stats.map((stat, index) => (
            <Col key={index} xs={6} md={3} className="stat-item">
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