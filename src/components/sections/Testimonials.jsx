import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alhaji Ibrahim Musa',
      company: 'Musa Transport Ltd',
      text: 'XCAN Engineering provided us with 5 HOWO trucks in perfect condition. Mr. Edeh\'s expertise in air systems helped us choose the right trucks for our hauling needs. Delivery was smooth and professional.',
      rating: 5
    },
    {
      id: 2,
      name: 'Chief Olumide Adebayo',
      company: 'Adebayo Construction',
      text: 'We\'ve been buying spare parts from XCAN for 3 years. Genuine parts, fair prices, and honest advice. They never try to sell you what you don\'t need. Highly recommended for any heavy duty truck owner.',
      rating: 5
    },
    {
      id: 3,
      name: 'Engr. Tunde Bakare',
      company: 'Lagos State Transport',
      text: 'The major overhaul service they did on our SINOTRUK fleet was exceptional. Professional work, completed on time, and the trucks are running like new. Worth every naira.',
      rating: 5
    },
    {
      id: 4,
      name: 'Mallam Sani Abdullahi',
      company: 'Northern Logistics',
      text: 'Bought a refurbished HOWO dump truck and it has been working perfectly for 8 months. The warranty and after-sales support gave me confidence. XCAN treats customers with honesty.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <Container>
        <div className="section-title">
          <h2>CLIENT TESTIMONIALS</h2>
          <p className="section-subtitle">
            What our customers say about our trucks, parts, and services
          </p>
        </div>

        <Row>
          {testimonials.map((testimonial) => (
            <Col md={6} lg={3} key={testimonial.id} className="mb-4">
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <FaQuoteLeft size={24} className="text-primary opacity-50" />
                  </div>
                  <Card.Text className="flex-grow-1 mb-4">
                    "{testimonial.text}"
                  </Card.Text>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning d-inline me-1" />
                    ))}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.company}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <div className="trust-badge p-4 bg-light rounded d-inline-block">
              <h5 className="mb-2">Trusted by 100+ Transport Companies</h5>
              <p className="text-muted mb-0">
                Our commitment to honesty and integrity has earned us the trust of 
                transport businesses across Nigeria.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;