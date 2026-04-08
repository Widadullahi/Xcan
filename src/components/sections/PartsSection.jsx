import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaWhatsapp, FaShippingFast } from 'react-icons/fa';

const PartsSection = () => {
  const categories = [
    {
      title: 'Complete Trucks',
      image: '/images/12.jpeg',
      description: 'Brand new, direct tokunbo, and China refurbished heavy duty trucks',
      brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'],
      items: ['Dump Trucks', 'Tractor Heads', 'Cargo Trucks', 'Mixers']
    },
    {
      title: 'Engines & Gearboxes',
      image: '/images/3.jpeg',
      description: 'Complete engines and transmission systems for all major brands',
      brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'],
      items: ['Complete Engines', 'Gear Boxes', 'Engine Parts', 'Transmission Parts']
    },
    {
      title: 'Axles & Suspensions',
      image: '/images/2.jpeg',
      description: 'Complete axles, springs, and suspension systems',
      brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'],
      items: ['Front Axles', 'Rear Axles', 'Air Suspensions', 'Leaf Springs']
    },
    {
      title: 'Spare Parts',
      image: '/images/5.jpeg',
      description: 'Genuine spare parts for engines, gearboxes, and all truck systems',
      brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'],
      items: ['Engine Parts', 'Electrical Parts', 'Air System Parts', 'Brake Components']
    }
  ];

  const handleWhatsAppInquiry = (category) => {
    const message = encodeURIComponent('Hello XCAN! I am interested in ' + category + '. Please send available options and prices.');
    window.open('https://wa.me/2347034700040?text=' + message, '_blank');
  };

  return (
    <section className="parts-section section-padding" id="parts">
      <Container>
        <div className="section-title">
          <h2>TRUCKS & SPARE PARTS</h2>
          <p className="section-subtitle">
            Complete solutions for heavy duty trucks - from complete vehicles to individual parts
          </p>
        </div>

        <Row className="mb-5">
          <Col>
            <div className="delivery-notice text-center p-4 bg-light rounded">
              <FaShippingFast size={30} className="text-primary mb-3" />
              <h5>Nationwide Delivery</h5>
              <p className="mb-0">
                Waybill and supplies to your location after payment is confirmed. 
                We handle all logistics for your convenience.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {categories.map((category, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 parts-card">
                <Card.Img 
                  variant="top" 
                  src={category.image} 
                  alt={category.title}
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {category.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {category.brands.map((brand, i) => (
                      <Badge key={i} bg="light" text="dark" className="me-1 mb-1">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-start mb-3">
                    <small className="text-muted">Available:</small>
                    <ul className="list-unstyled mb-0">
                      {category.items.map((item, i) => (
                        <li key={i} className="mb-1">
                          <small>• {item}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    variant="outline-success"
                    size="sm"
                    onClick={() => handleWhatsAppInquiry(category.title)}
                    className="w-100"
                  >
                    <FaWhatsapp className="me-1" /> Inquire
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default PartsSection;