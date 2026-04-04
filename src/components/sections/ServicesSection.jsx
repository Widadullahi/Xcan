import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaTools, FaWrench, FaOilCan, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';

const ServicesSection = ({ onBookService }) => {
  const services = [
    {
      id: 'basic-maintenance',
      title: 'Basic Maintenance',
      description: 'Routine maintenance and inspection services',
      price: 50000,
      features: [
        'Engine oil change',
        'Filter replacement',
        'Brake inspection',
        'Air system check',
        'Fluid level check',
        'General inspection'
      ],
      icon: <FaOilCan size={30} />
    },
    {
      id: 'standard-repair',
      title: 'Standard Repair',
      description: 'Comprehensive repair services for all truck systems',
      price: 300000,
      features: [
        'Engine diagnostics',
        'Transmission repair',
        'Brake system repair',
        'Electrical system repair',
        'Air system repair',
        'Suspension repair'
      ],
      icon: <FaWrench size={30} />
    },
    {
      id: 'major-overhaul',
      title: 'Major Overhaul',
      description: 'Complete truck rebuild and restoration',
      price: 2000000,
      features: [
        'Complete engine overhaul',
        'Transmission rebuild',
        'Chassis inspection',
        'Full system restoration',
        'Performance testing',
        '1-year warranty'
      ],
      icon: <FaTools size={30} />
    }
  ];

  const specialties = [
    'Air System Engineering',
    'Engine Diagnostics',
    'Transmission Systems',
    'Brake Systems',
    'Electrical Systems',
    'Suspension Systems'
  ];

  const handleBookClick = (serviceId, price) => {
    if (onBookService) {
      onBookService(serviceId, price);
    }
  };

  return (
    <section className="services-section section-padding" id="services">
      <Container>
        <div className="section-title">
          <h2>OUR SERVICES</h2>
          <p className="section-subtitle">
            Professional maintenance and repair services for all heavy duty trucks
          </p>
        </div>

        <Row className="mb-5">
          <Col lg={8} className="mx-auto">
            <Card className="border-0 bg-light">
              <Card.Body className="text-center p-4">
                <h4 className="mb-3">Expert Engineering Support</h4>
                <p className="mb-3">
                  As an automobile heavy duty trucks air system engineer, I provide specialized 
                  expertise in diagnosing and repairing complex truck systems. Our services cover 
                  all major truck brands including HOWO, SINOTRUK, DAF, IVECO, Volvo, and MAN Diesel.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {specialties.map((spec, index) => (
                    <Badge key={index} bg="primary" className="px-3 py-2">
                      <FaCheckCircle className="me-1" /> {spec}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {services.map((service) => (
            <Col md={4} key={service.id} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="service-icon mb-3">
                    {service.icon}
                  </div>
                  <Card.Title className="h4">{service.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {service.description}
                  </Card.Text>
                  <h3 className="text-primary mb-4">
                    ₦{service.price.toLocaleString()}
                    <small className="text-muted fs-6"> per truck</small>
                  </h3>
                  
                  <ul className="list-unstyled text-start mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <FaCheckCircle className="text-success me-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-100"
                    onClick={() => handleBookClick(service.id, service.price)}
                  >
                    <FaWhatsapp className="me-2" /> Book Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col>
            <div className="service-notice text-center p-3 bg-primary bg-opacity-10 rounded">
              <p className="mb-0">
                <strong>Important:</strong> All service prices are for labor charges only. 
                Parts are billed separately. Customers can supply their own parts or we can 
                provide genuine parts at additional cost.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="lead mb-3">
              Need on-site service or have a custom requirement?
            </p>
            <Button 
              variant="outline-primary" 
              size="lg"
              href="https://wa.me/2347034700040?text=Hello%20XCAN!%20I%20need%20on-site%20service%20or%20have%20a%20custom%20requirement."
              target="_blank"
            >
              <FaWhatsapp className="me-2" /> Discuss Custom Needs
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;