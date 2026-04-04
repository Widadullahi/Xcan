import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaTruck, FaCog, FaTools, FaShippingFast } from 'react-icons/fa';

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: '/images/7.jpeg',
      title: 'HOWO 45 Tons Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 2,
      image: '/images/13.jpeg',
      title: 'SINOTRUK 30 Tons Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 3,
      image: '/images/ceo.png',
      title: 'Chukwuebuka David Edeh - Lead Engineer',
      category: 'Team',
      icon: <FaTools />
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400',
      title: 'Engine Assembly',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=400',
      title: 'Transmission System',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
      title: 'Delivery Service',
      category: 'Service',
      icon: <FaShippingFast />
    }
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section section-padding" id="gallery">
      <Container>
        <div className="section-title">
          <h2>OUR GALLERY</h2>
          <p className="section-subtitle">
            See our trucks, parts, and services in action
          </p>
        </div>

        <Row>
          {galleryItems.map((item) => (
            <Col md={4} lg={3} key={item.id} className="mb-4">
              <Card 
                className="gallery-card h-100"
                style={{ cursor: 'pointer' }}
                onClick={() => handleImageClick(item)}
              >
                <div className="gallery-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="gallery-overlay">
                    {item.icon}
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="fs-6 mb-1">{item.title}</Card.Title>
                  <Card.Text className="text-muted small mb-0">
                    {item.category}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="text-muted mb-3">
              Want to see more trucks and parts? Contact us for a complete catalog.
            </p>
            <Button 
              variant="outline-primary"
              href="https://wa.me/2347034700040?text=Hello%20XCAN!%20Please%20send%20me%20your%20complete%20truck%20and%20parts%20catalog."
              target="_blank"
            >
              Request Full Catalog
            </Button>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="img-fluid"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />
                <p className="mt-3 text-muted">{selectedImage.category}</p>
              </>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default GallerySection;