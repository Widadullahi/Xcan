import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col, Alert, Badge } from 'react-bootstrap';
import { FaCalendarCheck, FaEnvelope, FaInfoCircle, FaCheck } from 'react-icons/fa';

const BookingModal = ({ show, onHide, serviceType, price }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: serviceType,
    pricePerTruck: price,
    numberOfTrucks: 1,
    truckDetails: '',
    preferredDate: '',
    serviceLocation: '',
    name: '',
    phone: '',
    email: '',
    company: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (show) {
      setStep(1);
      setBookingData(prev => ({
        ...prev,
        serviceType: serviceType,
        pricePerTruck: price
      }));
    }
  }, [show, serviceType, price]);

  const services = {
    'basic-maintenance': {
      name: 'Basic Maintenance',
      description: 'Routine maintenance and inspection',
      price: 50000
    },
    'standard-repair': {
      name: 'Standard Repair',
      description: 'Complete repair services',
      price: 300000
    },
    'major-overhaul': {
      name: 'Major Overhaul',
      description: 'Truck complete repair & overhaul',
      price: 2000000
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateStep1 = () => {
    return bookingData.serviceType && bookingData.pricePerTruck;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!bookingData.truckDetails.trim()) newErrors.truckDetails = 'Required';
    if (!bookingData.numberOfTrucks) newErrors.numberOfTrucks = 'Required';
    if (!bookingData.preferredDate) newErrors.preferredDate = 'Required';
    if (!bookingData.serviceLocation) newErrors.serviceLocation = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!bookingData.name.trim()) newErrors.name = 'Required';
    if (!bookingData.phone.trim()) newErrors.phone = 'Required';
    if (!bookingData.email.trim()) newErrors.email = 'Required';
    if (!bookingData.address.trim()) newErrors.address = 'Required';
    
    // Phone validation
    const phoneRegex = /^[0-9]{10,15}$/;
    if (bookingData.phone && !phoneRegex.test(bookingData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (bookingData.email && !emailRegex.test(bookingData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTotal = () => {
    const subtotal = bookingData.pricePerTruck * bookingData.numberOfTrucks;
    let discount = 0;
    
    // Apply 5% discount for 10 or more trucks
    if (bookingData.numberOfTrucks >= 10) {
      discount = subtotal * 0.05;
    }
    
    const total = subtotal - discount;
    
    return { subtotal, discount, total };
  };

  const formatCurrency = (amount) => {
    return `₦${amount.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const generateEmailBody = () => {
    const { subtotal, discount, total } = calculateTotal();
    const serviceName = services[bookingData.serviceType]?.name || bookingData.serviceType;
    
    const emailBody = `XCAN Truck Services
New Booking Request

Customer Details
--------------------------------
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}
${bookingData.company ? `Company: ${bookingData.company}` : ''}

Service Details
--------------------------------
Service Type: ${serviceName}
Location: ${bookingData.serviceLocation === 'customer-location' ? 'At Customer Location' : 'At XCAN Workshop'}
Preferred Date: ${formatDate(bookingData.preferredDate)}
Number of Trucks: ${bookingData.numberOfTrucks}
${bookingData.truckDetails ? `Truck Details: ${bookingData.truckDetails}` : ''}

Pricing Summary (Labor Charges Only)
--------------------------------
₦${bookingData.pricePerTruck.toLocaleString()} × ${bookingData.numberOfTrucks} Trucks
${discount > 0 ? `Discount (5%): -₦${discount.toLocaleString()}` : ''}
TOTAL: ₦${total.toLocaleString()}

Important Notes
--------------------------------
• Labor charges only
• Parts billed separately
• We can supply parts if required (separate invoice)

Address: ${bookingData.address}

[Confirm Booking]
[Call Customer: ${bookingData.phone}]`;
    
    return emailBody;
  };

  const handleSubmit = () => {
    if (validateStep3()) {
      const emailBody = generateEmailBody();
      const subject = `Service Booking Request - ${services[bookingData.serviceType]?.name} - XCAN Engineering`;
      
      const emailUrl = `mailto:edehdaven@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(emailUrl, '_blank');
      
      // Reset form and close modal
      onHide();
      setStep(1);
      setBookingData({
        serviceType: '',
        pricePerTruck: 0,
        numberOfTrucks: 1,
        truckDetails: '',
        preferredDate: '',
        serviceLocation: '',
        name: '',
        phone: '',
        email: '',
        company: '',
        address: ''
      });
    }
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
        {step > 1 ? <FaCheck /> : '1'}
      </div>
      <div className="step-line"></div>
      <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
        {step > 2 ? <FaCheck /> : '2'}
      </div>
      <div className="step-line"></div>
      <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
    </div>
  );

  const renderStep1 = () => (
    <div className="booking-step active">
      <h5 className="text-center mb-4">Select Service Type</h5>
      <Row>
        <Col md={12}>
          {Object.entries(services).map(([key, service]) => (
            <div className="card mb-3" key={key}>
              <div className="card-body">
                <h5>{service.name} - {formatCurrency(service.price)} per truck</h5>
                <p className="text-muted">{service.description}</p>
                <Button
                  variant="outline-primary"
                  className="w-100"
                  onClick={() => {
                    setBookingData(prev => ({
                      ...prev,
                      serviceType: key,
                      pricePerTruck: service.price
                    }));
                    setStep(2);
                  }}
                >
                  Select This Service
                </Button>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );

  const renderStep2 = () => {
    const serviceInfo = services[bookingData.serviceType];
    
    return (
      <div className="booking-step active">
        <h5 className="text-center mb-4">Service Details</h5>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Selected Service</Form.Label>
            <Form.Control
              type="text"
              value={serviceInfo ? `${serviceInfo.name} - ${formatCurrency(serviceInfo.price)} per truck` : ''}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Truck Details *</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="truckDetails"
              value={bookingData.truckDetails}
              onChange={handleInputChange}
              placeholder="Describe your trucks (e.g., HOWO 45 Tons, Sinotruk 30 Tons, models, year, etc.)"
              isInvalid={!!errors.truckDetails}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.truckDetails}
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Number of Trucks *</Form.Label>
                <Form.Select
                  name="numberOfTrucks"
                  value={bookingData.numberOfTrucks}
                  onChange={handleInputChange}
                  isInvalid={!!errors.numberOfTrucks}
                  required
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} Truck{num > 1 ? 's' : ''}</option>
                  ))}
                  <option value="10+">More than 10 Trucks</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.numberOfTrucks}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Preferred Date *</Form.Label>
                <Form.Control
                  type="date"
                  name="preferredDate"
                  value={bookingData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  isInvalid={!!errors.preferredDate}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.preferredDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Service Location *</Form.Label>
            <Form.Select
              name="serviceLocation"
              value={bookingData.serviceLocation}
              onChange={handleInputChange}
              isInvalid={!!errors.serviceLocation}
              required
            >
              <option value="">Select location</option>
              <option value="customer-location">At My Company Location</option>
              <option value="our-workshop">At XCAN Workshop</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.serviceLocation}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="text-center mt-4">
            <Button variant="secondary" className="me-2" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button variant="primary" onClick={() => validateStep2() && setStep(3)}>
              Continue
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  const renderStep3 = () => {
    const serviceInfo = services[bookingData.serviceType];
    const { subtotal, discount, total } = calculateTotal();
    
    return (
      <div className="booking-step active">
        <h5 className="text-center mb-4">Contact Information</h5>
        
        <div className="booking-summary mb-4">
          <h6>Service Summary</h6>
          <div className="summary-item">
            <span className="summary-label">Service Type:</span>
            <span className="summary-value">
              {serviceInfo?.name || bookingData.serviceType}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Price per Truck:</span>
            <span className="summary-value">{formatCurrency(bookingData.pricePerTruck)}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Number of Trucks:</span>
            <span className="summary-value">{bookingData.numberOfTrucks}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Service Location:</span>
            <span className="summary-value">
              {bookingData.serviceLocation === 'customer-location' ? 'At Your Location' : 'At XCAN Workshop'}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Preferred Date:</span>
            <span className="summary-value">{formatDate(bookingData.preferredDate)}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Subtotal:</span>
            <span className="summary-value">{formatCurrency(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="summary-item">
              <span className="summary-label">Discount (10+ trucks):</span>
              <span className="summary-value">-{formatCurrency(discount)} (5%)</span>
            </div>
          )}
          <div className="summary-item total-price">
            <span className="summary-label">Total Labor Charges:</span>
            <span className="summary-value">{formatCurrency(total)}</span>
          </div>
          <Alert variant="info" className="mt-3">
            <FaInfoCircle /> <small>Note: This is labor charges only. Parts will be billed separately unless arranged otherwise.</small>
          </Alert>
        </div>
        
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  isInvalid={!!errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  isInvalid={!!errors.phone}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={bookingData.company}
              onChange={handleInputChange}
              placeholder="Optional"
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Company Address *</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="address"
              value={bookingData.address}
              onChange={handleInputChange}
              placeholder="Enter your company address"
              isInvalid={!!errors.address}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
          </Form.Group>
          
          <div className="text-center mt-4">
            <Button variant="secondary" className="me-2" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              <FaEnvelope /> Send Booking via Email
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Maintenance Service</Modal.Title>
      </Modal.Header>
      <Modal.Body className="booking-modal-content">
        {renderStepIndicator()}
        
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;