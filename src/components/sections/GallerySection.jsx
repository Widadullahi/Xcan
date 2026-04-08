import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTruck, FaCog, FaTools, FaShippingFast, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance gallery every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const galleryItems = [
    {
      id: 1,
      image: '/images/1.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 2,
      image: '/images/2.jpeg',
      title: 'Truck Suspension System',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 3,
      image: '/images/3.jpeg',
      title: 'Engine & Gearbox',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 4,
      image: '/images/4.jpeg',
      title: 'Truck Service',
      category: 'Services',
      icon: <FaTools />
    },
    {
      id: 5,
      image: '/images/5.jpeg',
      title: 'Spare Parts',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 6,
      image: '/images/6.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 7,
      image: '/images/7.jpeg',
      title: 'HOWO Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 8,
      image: '/images/8.jpeg',
      title: 'Truck Maintenance',
      category: 'Services',
      icon: <FaTools />
    },
    {
      id: 9,
      image: '/images/9.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 10,
      image: '/images/10.jpeg',
      title: 'Truck Parts',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 11,
      image: '/images/11.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 12,
      image: '/images/12.jpeg',
      title: 'Complete Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 13,
      image: '/images/13.jpeg',
      title: 'SINOTRUK Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 14,
      image: '/images/14.jpeg',
      title: 'Truck Service',
      category: 'Services',
      icon: <FaTools />
    },
    {
      id: 15,
      image: '/images/15.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    },
    {
      id: 16,
      image: '/images/16.jpeg',
      title: 'Truck Parts',
      category: 'Parts',
      icon: <FaCog />
    },
    {
      id: 17,
      image: '/images/17.jpeg',
      title: 'Heavy Duty Truck',
      category: 'Trucks',
      icon: <FaTruck />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
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

        <div className="position-relative d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
          <button 
            className="carousel-nav-btn prev" 
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="gallery-single-slide mx-auto" style={{ maxWidth: '700px' }}>
            <Card className="gallery-card-single shadow-lg" style={{ overflow: 'hidden', borderRadius: '16px' }}>
              <div className="gallery-image-wrapper-single">
                <Card.Img 
                  variant="top" 
                  src={galleryItems[currentIndex].image} 
                  alt={galleryItems[currentIndex].title}
                  style={{ height: '400px', objectFit: 'cover' }}
                  className="gallery-transition"
                />
                <div className="gallery-overlay-single">
                  {galleryItems[currentIndex].icon}
                </div>
              </div>
              <Card.Body className="text-center py-4">
                <Card.Title className="fs-4 mb-2">{galleryItems[currentIndex].title}</Card.Title>
                <Card.Text className="text-muted">
                  <span className="badge bg-primary px-3 py-2">{galleryItems[currentIndex].category}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <button 
            className="carousel-nav-btn next" 
            onClick={nextSlide}
            aria-label="Next image"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="gallery-dots d-flex justify-content-center gap-2 mt-4">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

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
      </Container>
    </section>
  );
};

export default GallerySection;
