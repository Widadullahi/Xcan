import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaCheckCircle, FaTruck, FaCog, FaTools } from 'react-icons/fa';

const CorporateSection = () => {
  const founderInfo = {
    name: 'Chukwuebuka David Edeh',
    title: 'Automobile Heavy Duty Trucks Air System Engineer',
    email: 'edehdaven@gmail.com',
    phone: '+234 703 470 0040',
    image: '/images/ceo.png'
  };

  const values = [
    { icon: <FaCheckCircle />, title: 'Honesty', desc: 'Transparent dealings in every transaction' },
    { icon: <FaTruck />, title: 'Integrity', desc: 'Quality products as described' },
    { icon: <FaCog />, title: 'Expertise', desc: 'Professional engineering support' },
    { icon: <FaTools />, title: 'Reliability', desc: 'After-sales service and support' }
  ];

  return (
    <section className="corporate-section section-padding" id="about">
      <Container>
        <div className="section-title">
          <h2>ABOUT XCAN ENGINEERING</h2>
          <p className="section-subtitle">
            Your trusted partner for heavy duty trucks and genuine spare parts
          </p>
        </div>

        <Row className="align-items-center mb-5">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <div className="ceo-image-container">
              <img 
                src={founderInfo.image} 
                alt={founderInfo.name}
                className="ceo-image img-fluid rounded-circle"
                style={{ maxWidth: '280px', border: '4px solid var(--primary)' }}
              />
            </div>
          </Col>
          <Col lg={8}>
            <h3 className="mb-3">{founderInfo.name}</h3>
            <p className="lead text-primary mb-3">{founderInfo.title}</p>
            <p className="mb-3">
              Welcome to XCAN Engineering. We are Nigeria's leading specialists in heavy duty trucks, 
              offering brand new, direct tokunbo, and China refurbished trucks from top manufacturers 
              including HOWO, SINOTRUK, DAF, IVECO, Volvo, and MAN Diesel.
            </p>
            <p className="mb-4">
              Our commitment is to treat every customer with honesty and integrity. We provide 
              complete truck solutions - from complete vehicles to engines, gearboxes, axles, 
              suspensions, springs, and all genuine spare parts. After payment, we handle waybill 
              and delivery directly to your location.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                variant="primary" 
                href="https://wa.me/2347034700040?text=Hello%20Mr.%20Edeh!%20I%20want%20to%20discuss%20a%20truck%20purchase."
                target="_blank"
              >
                <FaWhatsapp className="me-2" /> Discuss Your Needs
              </Button>
              <Button 
                variant="outline-primary"
                href={`mailto:${founderInfo.email}?subject=Truck Inquiry`}
              >
                <FaEnvelope className="me-2" /> {founderInfo.email}
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h4 className="text-center mb-4">Our Core Values</h4>
          </Col>
        </Row>
        <Row className="text-center">
          {values.map((value, index) => (
            <Col md={3} key={index} className="mb-4">
              <Card className="value-card h-100 border-0">
                <Card.Body>
                  <div className="value-icon mb-3">
                    {React.cloneElement(value.icon, { size: 40 })}
                  </div>
                  <h5 className="mb-2">{value.title}</h5>
                  <p className="text-muted mb-0">{value.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CorporateSection;