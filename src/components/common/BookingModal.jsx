import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const serviceLabels = {
  'basic-maintenance': 'Basic Maintenance',
  'standard-repair': 'Standard Repair',
  'major-overhaul': 'Major Overhaul'
};

const BookingModal = ({ show, onHide, serviceType }) => {
  const serviceName = serviceLabels[serviceType] || 'Truck Service';
  const message = encodeURIComponent(
    `Hello XCAN! I want to book ${serviceName}. Please share the next steps.`
  );

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Service</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-3">
          Continue this booking on WhatsApp so the XCAN team can confirm your truck details and preferred date.
        </p>
        <div className="d-grid">
          <Button
            variant="success"
            href={`https://wa.me/2347034700040?text=${message}`}
            target="_blank"
            rel="noreferrer"
            onClick={onHide}
          >
            <FaWhatsapp className="me-2" />
            Continue on WhatsApp
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BookingModal;
