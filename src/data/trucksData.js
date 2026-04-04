// Truck data for XCAN Engineering
// All trucks are available in brand new, direct tokunbo, and China refurbished conditions

export const trucksData = [
  {
    id: 1,
    title: "HOWO 45 TONS HEAVY DUTY TRUCK",
    brand: "SINOTRUK HOWO",
    model: "ZZ3257N3847W",
    year: "2025",
    condition: "Brand New",
    warranty: "1 Year Warranty",
    price: "Contact for Price",
    image: "/images/7.jpeg",
    specs: {
      engine: "371 HP",
      transmission: "10 Fast Gears",
      capacity: "45 Tons Bucket",
      chassis: "Double Chassis",
      suspension: "Double Suspension",
      tyres: "12 New Tyres",
      fuelTank: "400L Diesel",
      axles: "3 Axles",
      wheelbase: "3825mm",
      maxSpeed: "90km/h"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20HOWO%2045%20TONS%20TRUCK.%20Please%20send%20price%20and%20specifications."
  },
  {
    id: 2,
    title: "SINOTRUK 30 TONS HEAVY DUTY TRUCK",
    brand: "SINOTRUK",
    model: "ZZ3257N3847W",
    year: "2025",
    condition: "Brand New",
    warranty: "1 Year Warranty",
    price: "Contact for Price",
    image: "/images/13.jpeg",
    specs: {
      engine: "371 HP",
      transmission: "10 Fast Gears",
      capacity: "30 Tons Bucket",
      chassis: "Reinforced",
      suspension: "Double Suspension",
      tyres: "12 New Tyres",
      fuelTank: "400L Diesel",
      axles: "3 Axles",
      wheelbase: "3825mm",
      maxSpeed: "90km/h",
      grossWeight: "25,000kg"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20SINOTRUK%2030%20TONS%20TRUCK.%20Please%20send%20price%20and%20specifications."
  },
  {
    id: 3,
    title: "DAF CF 85 TRACTOR HEAD",
    brand: "DAF",
    model: "CF 85",
    year: "2024",
    condition: "Direct Tokunbo",
    warranty: "6 Months Warranty",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400",
    specs: {
      engine: "460 HP",
      transmission: "16 Speed Manual",
      capacity: "60 Tons Trailer",
      chassis: "Heavy Duty",
      suspension: "Air Suspension",
      tyres: "10 Tyres",
      fuelTank: "500L Diesel",
      axles: "2 Axles",
      cabType: "Sleeper Cab"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20DAF%20CF%2085%20TRACTOR%20HEAD.%20Please%20send%20price%20and%20specifications."
  },
  {
    id: 4,
    title: "IVECO STRALIS HEAVY TRUCK",
    brand: "IVECO",
    model: "Stralis",
    year: "2024",
    condition: "Brand New",
    warranty: "1 Year Warranty",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=400",
    specs: {
      engine: "500 HP",
      transmission: "12 Speed Automated",
      capacity: "50 Tons",
      chassis: "Heavy Duty",
      suspension: "Air Suspension",
      tyres: "12 Tyres",
      fuelTank: "450L Diesel",
      axles: "3 Axles",
      cabType: "High Roof Sleeper"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20IVECO%20STRALIS%20HEAVY%20TRUCK.%20Please%20send%20price%20and%20specifications."
  },
  {
    id: 5,
    title: "VOLVO FH16 HEAVY DUTY",
    brand: "Volvo",
    model: "FH16",
    year: "2024",
    condition: "Direct Tokunbo",
    warranty: "6 Months Warranty",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
    specs: {
      engine: "750 HP",
      transmission: "I-Shift 12 Speed",
      capacity: "80 Tons",
      chassis: "Extra Heavy Duty",
      suspension: "Air Suspension",
      tyres: "10 Tyres",
      fuelTank: "600L Diesel",
      axles: "2 Axles",
      cabType: "Globetrotter XL"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20VOLVO%20FH16%20HEAVY%20DUTY.%20Please%20send%20price%20and%20specifications."
  },
  {
    id: 6,
    title: "MAN TGX HEAVY TRUCK",
    brand: "MAN Diesel",
    model: "TGX",
    year: "2024",
    condition: "Brand New",
    warranty: "1 Year Warranty",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400",
    specs: {
      engine: "640 HP",
      transmission: "TipMatic 12 Speed",
      capacity: "60 Tons",
      chassis: "Heavy Duty",
      suspension: "Air Suspension",
      tyres: "10 Tyres",
      fuelTank: "500L Diesel",
      axles: "2 Axles",
      cabType: "XXL Cab"
    },
    whatsappMessage: "Hello%20XCAN!%20I'm%20interested%20in%20the%20MAN%20TGX%20HEAVY%20TRUCK.%20Please%20send%20price%20and%20specifications."
  }
];

export const truckConditions = [
  {
    type: "Brand New",
    description: "Factory fresh trucks with full manufacturer warranty",
    warranty: "1-2 Years",
    badge: "success"
  },
  {
    type: "Direct Tokunbo",
    description: "Used trucks imported directly from Europe/USA",
    warranty: "6 Months",
    badge: "info"
  },
  {
    type: "China Refurbished",
    description: "Professionally refurbished trucks from China",
    warranty: "3-6 Months",
    badge: "warning"
  }
];

export default trucksData;