import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaWhatsapp, FaFileAlt } from 'react-icons/fa';

const TruckCard = ({ truck, onViewDetails }) => {
  const handleWhatsAppInquiry = () => {
    const whatsappNumber = '2347034700040';
    const message = encodeURIComponent(truck.whatsappMessage || `Hello XCAN! I'm interested in the ${truck.title}. Please send price and specifications.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className="truck-card h-100">
      <Card.Img 
        variant="top" 
        src={truck.image} 
        alt={truck.title}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          {truck.condition && <Badge bg="info" className="me-1">{truck.condition}</Badge>}
          {truck.brand && <Badge bg="secondary" className="me-1">{truck.brand}</Badge>}
        </div>
        <Card.Title className="truck-title">{truck.title}</Card.Title>
        <Card.Text className="text-muted flex-grow-1">
          {truck.year} | {truck.warranty}
        </Card.Text>
        
        <div className="d-flex gap-2 mt-auto">
          <Button 
            variant="outline-primary" 
            size="sm"
            onClick={onViewDetails}
          >
            <FaFileAlt className="me-1" /> Specs
          </Button>
          <Button 
            variant="success" 
            size="sm"
            onClick={handleWhatsAppInquiry}
            className="flex-grow-1"
          >
            <FaWhatsapp className="me-1" /> Inquire
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TruckCard;