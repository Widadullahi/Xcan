import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const whatsappNumber = '+2347034700040';
  const message = "Hello%20XCAN%20Truck%20Services!%20I'm%20interested%20in%20your%20HOWO%20and%20Sinotruk%20trucks%20and%20services.";
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloat;