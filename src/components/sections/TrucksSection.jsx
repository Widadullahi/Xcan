import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaWhatsapp, FaFileAlt, FaSyncAlt } from 'react-icons/fa';
import TruckCard from '../ui/TruckCard';

const TrucksSection = () => {
  const [showDetails, setShowDetails] = useState(null);

  const trucksData = [
    {
      id: 1,
      title: "HOWO 45 TONS HEAVY DUTY TRUCK",
      image: "/images/7.jpeg",
      year: "2025 MODEL",
      brand: "SINOTRUK GROUP",
      warranty: "1 YEAR WARRANTY",
      specs: [
        { label: "Engine", value: "371 HP" },
        { label: "Transmission", value: "10 Fast Gears" },
        { label: "Capacity", value: "45 Tons Bucket" },
        { label: "Chassis", value: "Double Chassis" },
        { label: "Suspension", value: "Double Suspension" },
        { label: "Tyres", value: "12 New Tyres" },
        { label: "Fuel Tank", value: "400L Diesel" },
        { label: "Brand", value: "SINOTRUK HOWO" },
      ],
      whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20HOWO%2045%20TONS%20TRUCK.%20Please%20send%20price%20and%20specifications."
    },
    {
      id: 2,
      title: "SINOTRUK 30 TONS HEAVY DUTY TRUCK",
      image: "/images/13.jpeg",
      year: "2025 MODEL",
      brand: "SINOTRUK GROUP",
      warranty: "1 YEAR WARRANTY",
      specs: [
        { label: "Engine", value: "371 HP" },
        { label: "Transmission", value: "10 Fast Gears" },
        { label: "Capacity", value: "30 Tons Bucket" },
        { label: "Warranty", value: "1 Year" },
        { label: "Service", value: "Free After Sales" },
        { label: "Manufacturing", value: "2025" },
        { label: "Brand", value: "SINOTRUK" },
        { label: "Model", value: "ZZ3257N3847W" },
      ],
      whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20SINOTRUK%2030%20TONS%20TRUCK.%20Please%20send%20price%20and%20specifications."
    }
  ];

  const showSpecifications = (truckTitle) => {
    let specifications = '';
    
    if (truckTitle.includes('HOWO')) {
      specifications = `Full specifications for ${truckTitle}:\n\n• Brand: SINOTRUK HOWO\n• Manufacturing Year: 2025\n• Warranty: 1 Year\n• After Sales: Free Service\n• Engine: 371 HP\n• Transmission: 10 Fast Gears\n• Chassis: Double\n• Suspension: Double\n• Bucket Capacity: ${truckTitle.includes('45') ? '45 Tons' : '30 Tons'}\n• Fuel Tank: 400L Diesel\n• Tyres: 12 New Tyres\n• Model: ZZ3257N3847W\n• Axles: 3\n• Wheelbase: 3825mm\n• Max Speed: 90km/h\n\nFor complete technical specifications and pricing, please contact us on WhatsApp.`;
    } else {
      specifications = `Full specifications for ${truckTitle}:\n\n• Brand: SINOTRUK\n• Manufacturing Year: 2025\n• Warranty: 1 Year\n• After Sales: Free Service\n• Engine: 371 HP\n• Transmission: 10 Fast Gears\n• Chassis: Reinforced\n• Suspension: Double\n• Bucket Capacity: 30 Tons\n• Fuel Tank: 400L Diesel\n• Tyres: 12 New Tyres\n• Model: ZZ3257N3847W\n• Axles: 3\n• Wheelbase: 3825mm\n• Max Speed: 90km/h\n• Gross Weight: 25,000kg\n\nFor complete technical specifications and pricing, please contact us on WhatsApp.`;
    }
    
    alert(specifications);
  };

  return (
    <section className="section-padding" id="trucks">
      <Container>
        <div className="section-title">
          <h2>BRAND NEW HOWO & SINOTRUK TRUCKS</h2>
          <p className="section-subtitle">
            2025 Manufacturing Year with 1-year comprehensive warranty and free after-sales service
          </p>
        </div>
        
        <div className="whatsapp-notice">
          <FaWhatsapp /> All inquiries through WhatsApp: +234 703 470 0040
        </div>

        <Row>
          {trucksData.map((truck) => (
            <Col md={6} key={truck.id} className="mb-4">
              <TruckCard 
                truck={truck}
                onViewDetails={() => showSpecifications(truck.title)}
              />
            </Col>
          ))}
        </Row>
        
        {/* Refurbished Trucks */}
        <Card className="mt-4">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={8}>
                <h5 className="card-title">CERTIFIED REFURBISHED HOWO & SINOTRUK TRUCKS</h5>
                <p className="text-gray">
                  High-quality refurbished HOWO and Sinotruk trucks with complete overhaul 
                  and performance verification. Cost-effective solutions with certified quality.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <Badge bg="primary">Engine Overhaul</Badge>
                  <Badge bg="primary">Body Refurbishment</Badge>
                  <Badge bg="primary">Performance Tested</Badge>
                  <Badge bg="success">HOWO Certified</Badge>
                  <Badge bg="success">Sinotruk Certified</Badge>
                </div>
              </Col>
              <Col md={4} className="text-end mt-3 mt-md-0">
                <Button 
                  variant="primary" 
                  href="https://wa.me/2347034700040?text=Hello%20XCAN!%20I'm%20interested%20in%20CERTIFIED%20REFURBISHED%20HOWO%20or%20SINOTRUK%20TRUCKS.%20Please%20send%20available%20options."
                  target="_blank"
                >
                  <FaSyncAlt /> View Refurbished Trucks
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default TrucksSection;