import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ScheduleSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    trucks: '1',
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
      `Hello XCAN! I'd like to schedule a service appointment.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.serviceType}\n` +
      `Preferred Date: ${formData.preferredDate}\n` +
      `Preferred Time: ${formData.preferredTime}\n` +
      `Location: ${formData.location}\n` +
      `Number of Trucks: ${formData.trucks}\n` +
      `Details: ${formData.message}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        location: '',
        trucks: '1',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="schedule-section section-padding" id="schedule" style={{
      background: 'rgba(0, 86, 179, 0.05)',
      backdropFilter: 'blur(10px)'
    }}>
      <Container>
        <div className="section-title">
          <h2>SCHEDULE SERVICE</h2>
          <p className="section-subtitle">
            Book an appointment for maintenance or repair services
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    Opening WhatsApp to send your schedule request...
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaMapMarkerAlt className="me-2" />Your Name</Form.Label>
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
                        <Form.Label><FaClock className="me-2" />Phone Number</Form.Label>
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

                  <Form.Group className="mb-3">
                    <Form.Label>Service Type</Form.Label>
                    <Form.Select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select service type</option>
                      <option value="Basic Maintenance">Basic Maintenance (₦50,000)</option>
                      <option value="Standard Repair">Standard Repair (₦300,000)</option>
                      <option value="Major Overhaul">Major Overhaul (₦2,000,000)</option>
                      <option value="Inspection Only">Inspection Only</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaCalendarAlt className="me-2" />Preferred Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaClock className="me-2" />Preferred Time</Form.Label>
                        <Form.Select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select time</option>
                          <option value="7:00 AM - 9:00 AM">7:00 AM - 9:00 AM</option>
                          <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                          <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Service Location</Form.Label>
                    <Form.Select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select location</option>
                      <option value="XCAN Workshop">At XCAN Workshop</option>
                      <option value="My Location">At My Location (On-site)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Number of Trucks</Form.Label>
                    <Form.Select
                      name="trucks"
                      value={formData.trucks}
                      onChange={handleChange}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} Truck{num > 1 ? 's' : ''}</option>
                      ))}
                      <option value="10+">More than 10 Trucks</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Additional Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your truck(s) and any specific issues..."
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button 
                      variant="primary" 
                      type="submit"
                      size="lg"
                      className="px-5"
                    >
                      <FaWhatsapp className="me-2" /> Schedule via WhatsApp
                    </Button>
                  </div>
                </Form>

                <div className="mt-4 p-3 bg-light rounded">
                  <small className="text-muted">
                    <strong>Operating Hours:</strong> Monday - Saturday: 7:00 AM - 7:00 PM | 
                    24/7 Emergency Support Available
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ScheduleSection;