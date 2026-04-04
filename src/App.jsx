import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './styles/main.css';

// Layout Components
import TopBar from './components/layout/TopBar';
import NavbarComponent from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import BookingModal from './components/common/BookingModal';

// Section Components
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import TrucksSection from './components/sections/TrucksSection';
import PartsSection from './components/sections/PartsSection';
import ServicesSection from './components/sections/ServicesSection';
import CorporateSection from './components/sections/CorporateSection';
import ScheduleSection from './components/sections/ScheduleSection';
import GallerySection from './components/sections/GallerySection';
import Testimonials from './components/sections/Testimonials';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handleBookService = (serviceType, price) => {
    setSelectedService(serviceType);
    setSelectedPrice(price);
    setShowBookingModal(true);
  };

  return (
    <div className="App">
      <TopBar />
      <NavbarComponent />
      <WhatsAppFloat />
      
      <main>
        <HeroSection />
        <StatsSection />
        <TrucksSection />
        <PartsSection />
        <ServicesSection onBookService={handleBookService} />
        <CorporateSection />
        <ScheduleSection />
        <GallerySection />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
      
      <BookingModal
        show={showBookingModal}
        onHide={() => setShowBookingModal(false)}
        serviceType={selectedService}
        price={selectedPrice}
      />
    </div>
  );
}

export default App;