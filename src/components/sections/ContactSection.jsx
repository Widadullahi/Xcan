import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = '2347034700040';
    const message = encodeURIComponent(
      `Hello XCAN! I have an inquiry.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `${formData.company ? `Company: ${formData.company}\n` : ''}` +
      `Service: ${formData.service}\n` +
      `Message: ${formData.message}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+234 703 470 0040',
      href: 'tel:+2347034700040'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'edehdaven@gmail.com',
      href: 'mailto:edehdaven@gmail.com'
    },
    {
      icon: <FaClock />,
      title: 'Hours',
      value: 'Mon - Sat: 7AM - 7PM',
      href: null
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Service',
      value: 'On-site Service Available',
      href: null
    }
  ];

  return (
    <section className="contact-section section-padding" id="contact">
      <Container>
        <div className="section-title">
          <h2>CONTACT US</h2>
          <p className="section-subtitle">
            Get in touch for truck purchases, parts, or service inquiries
          </p>
        </div>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="p-4">
                <h4 className="mb-4">Contact Information</h4>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item d-flex align-items-start mb-4">
                    <div className="contact-icon me-3 text-primary">
                      {React.cloneElement(info.icon, { size: 20 })}
                    </div>
                    <div>
                      <h6 className="mb-1">{info.title}</h6>
                      {info.href ? (
                        <a href={info.href} className="text-decoration-none">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <hr className="my-4" />

                <div className="emergency-contact p-3 bg-danger bg-opacity-10 rounded">
                  <h6 className="text-danger mb-2">
                    <FaPhone className="me-2" /> 24/7 Emergency Support
                  </h6>
                  <p className="mb-0 small">
                    Available for emergency repairs and breakdown assistance.
                    Call or WhatsApp us anytime.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4">Send Us a Message</h4>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Opening WhatsApp to send your message...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company (optional)"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Service Interested In</Form.Label>
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="Truck Purchase">Buy a Truck</option>
                      <option value="Engine/Gearbox">Engine or Gearbox</option>
                      <option value="Axles/Suspension">Axles or Suspension</option>
                      <option value="Spare Parts">Spare Parts</option>
                      <option value="Maintenance Service">Maintenance Service</option>
                      <option value="Repair Service">Repair Service</option>
                      <option value="Major Overhaul">Major Overhaul</option>
                      <option value="Other">Other Inquiry</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Your Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      required
                    />
                  </Form.Group>

                  <div className="d-flex gap-3">
                    <Button 
                      variant="primary" 
                      type="submit"
                      size="lg"
                    >
                      <FaWhatsapp className="me-2" /> Send via WhatsApp
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      type="button"
                      size="lg"
                      href="mailto:edehdaven@gmail.com"
                    >
                      <FaPaperPlane className="me-2" /> Send Email
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default ContactSection;