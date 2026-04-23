import React from 'react';
import { Row, Col, Card, Button, Badge, Container } from 'react-bootstrap';
import { FaTools, FaWrench, FaOilCan, FaCheckCircle, FaWhatsapp, FaTools as FaRepair } from 'react-icons/fa';

const ServicesSection = ({ onBookService }) => {
  const services = [
    {
      id: 'standard-repair',
      title: 'Standard Repair Service',
      description: 'Comprehensive repair services for truck systems (CONTRACT JOB)',
      price: 1500000,
      features: [
        'Engine diagnostics & repair',
        'Transmission repair',
        'Brake system repair',
        'Electrical system repair',
        'Air system repair',
        'Suspension repair'
      ],
      icon: <FaWrench size={30} />,
      badge: 'Contract'
    },
    {
      id: 'major-overhaul',
      title: 'Major Overhaul',
      description: 'Complete truck rebuild and restoration (CONTRACT JOB)',
      price: 3000000,
      features: [
        'Complete engine overhaul',
        'Transmission rebuild',
        'Chassis inspection',
        'Full system restoration',
        'Performance testing',
        '1-year warranty'
      ],
      icon: <FaTools size={30} />,
      badge: 'Contract'
    }
  ];

  const singleRepairServices = [
    { id: 'air-system', title: 'Air System Repair', icon: '💨' },
    { id: 'transmission', title: 'Transmission & Gear Box Repair', icon: '⚙️' },
    { id: 'engine', title: 'Engine Repair', icon: '🔧' },
    { id: 'suspension', title: 'Suspension Repair', icon: '🚙' },
    { id: 'tyres', title: 'Tyres Changing', icon: '🛞' },
    { id: 'electrical', title: 'Electrical & Rewire Repair', icon: '⚡' },
    { id: 'body-repair', title: 'Body Repair Services', icon: '🔨' },
    { id: 'brake', title: 'Brake Master', icon: '🛑' },
    { id: 'body-construction', title: 'Body Construction', icon: '🏗️' },
    { id: 'convert', title: 'Convert Service', icon: '🔄' }
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
      <Container style={{ position: 'relative', zIndex: 1 }}>
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

        {/* Contract Services Section */}
        <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Contract Services</h3>
        <Row className="mb-5">
          {services.map((service) => (
            <Col md={6} key={service.id} className="mb-4">
              <Card className="service-card h-100">
                <Card.Body className="text-center p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="service-icon">{service.icon}</div>
                    <Badge bg="danger">{service.badge}</Badge>
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

        {/* Single Repair Services Section */}
        <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Single Repair Services</h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '30px' }}>
          Individual repair services for specific truck issues. Contact us for pricing based on your needs.
        </p>
        <Row className="mb-5">
          {singleRepairServices.map((repair) => (
            <Col md={4} lg={3} key={repair.id} className="mb-3">
              <Card className="service-card h-100 text-center">
                <Card.Body className="p-3">
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{repair.icon}</div>
                  <Card.Title className="h6 mb-3">{repair.title}</Card.Title>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="w-100"
                    onClick={() => {
                      const whatsappNumber = '2347034700040';
                      const message = encodeURIComponent(`Hello XCAN! I'm interested in ${repair.title} service. Can you provide a quote?`);
                      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                    }}
                  >
                    <FaWhatsapp className="me-1" size={14} /> Inquire
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Other Service Categories */}
        <h3 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Other Services</h3>
        <Row className="mb-4">
          {[
            { title: 'Truck Assembling', desc: 'Professional truck assembly services' },
            { title: 'Truck Rebuilding', desc: 'Complete truck rebuild and restoration' },
            { title: 'Repair Service', desc: 'General repair services for all truck types' }
          ].map((item, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="service-card h-100">
                <Card.Body className="text-center p-4">
                  <Card.Title className="h5 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">{item.desc}</Card.Text>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      const whatsappNumber = '2347034700040';
                      const message = encodeURIComponent(`Hello XCAN! I'm interested in ${item.title}. Can you provide more details and pricing?`);
                      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                    }}
                  >
                    <FaWhatsapp className="me-1" size={14} /> Contact Us
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pricing Disclaimer */}
        <div className="p-4 rounded" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '2px solid rgba(255, 193, 7, 0.5)' }}>
          <h5 style={{ color: 'white', marginBottom: '15px' }}>⚠️ Important Pricing Information</h5>
          <p style={{ color: 'rgba(255,255,255,0.95)', marginBottom: '0', lineHeight: '1.8' }}>
            <strong>All quoted service prices are for SERVICE CHARGES ONLY.</strong><br/>
            Spare parts, materials, and supplies are NOT included in the prices and will be charged separately based on actual costs.<br/>
            We will provide itemized quotes for all parts before proceeding with any work.
          </p>
        </div>

      </Container>
    </section>
  );
};

export default ServicesSection;
