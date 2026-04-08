import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
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
    <section className="services-section" id="services" style={{
      position: 'relative',
      padding: '40px 0',
      margin: '0',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0, 86, 179, 0.7), rgba(0, 51, 102, 0.8)), url(/images/3.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title" style={{ marginBottom: '30px' }}>
          <h2 style={{ color: 'white' }}>OUR SERVICES</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            Professional maintenance and repair services for all heavy duty trucks
          </p>
        </div>

        <div className="mb-4 text-center">
          <h4 className="mb-3" style={{ color: 'white' }}>Expert Engineering Support</h4>
          <p className="mb-3 mx-auto" style={{
            maxWidth: '600px',
            color: 'rgba(255,255,255,0.9)'
          }}>
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
        </div>

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

      </div>
    </section>
  );
};

export default ServicesSection;
