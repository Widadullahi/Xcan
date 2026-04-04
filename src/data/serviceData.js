s e// Service data for XCAN Engineering
// gProfessional maintenance and repair services for heavy duty trucks

export const services = [
  {
    id: 'basic-maintenance',
    name: 'Basic Maintenance',
    description: 'Routine maintenance and inspection services',
    price: 50000,
    duration: '4-6 hours',
    features: [
      'Engine oil change',
      'Oil filter replacement',
      'Fuel filter replacement',
      'Air filter replacement',
      'Brake inspection',
      'Air system check',
      'Fluid level check',
      'Tire pressure check',
      'General inspection'
    ],
    suitableFor: 'Regular maintenance every 10,000km'
  },
  {
    id: 'standard-repair',
    name: 'Standard Repair',
    description: 'Comprehensive repair services for all truck systems',
    price: 300000,
    duration: '1-3 days',
    features: [
      'Engine diagnostics',
      'Transmission repair',
      'Brake system repair',
      'Electrical system repair',
      'Air system repair',
      'Suspension repair',
      'Cooling system repair',
      'Exhaust system repair',
      'Steering system repair'
    ],
    suitableFor: 'When specific repairs are needed'
  },
  {
    id: 'major-overhaul',
    name: 'Major Overhaul',
    description: 'Complete truck rebuild and restoration',
    price: 2000000,
    duration: '2-4 weeks',
    features: [
      'Complete engine overhaul',
      'Transmission rebuild',
      'Chassis inspection',
      'Full system restoration',
      'Performance testing',
      '1-year warranty',
      'Road test',
      'Final inspection'
    ],
    suitableFor: 'Old trucks needing complete restoration'
  }
];

export const specialties = [
  {
    name: 'Air System Engineering',
    description: 'Specialized expertise in truck air brake and air suspension systems',
    icon: 'wind'
  },
  {
    name: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics for all truck engine types',
    icon: 'search'
  },
  {
    name: 'Transmission Systems',
    description: 'Expert repair and rebuild of manual and automated transmissions',
    icon: 'cog'
  },
  {
    name: 'Brake Systems',
    description: 'Complete brake system inspection, repair, and replacement',
    icon: 'stop-circle'
  },
  {
    name: 'Electrical Systems',
    description: 'Diagnosis and repair of all truck electrical systems',
    icon: 'bolt'
  },
  {
    name: 'Suspension Systems',
    description: 'Air suspension and leaf spring repair and replacement',
    icon: 'arrows-alt'
  }
];

export const serviceLocations = [
  {
    type: 'workshop',
    name: 'XCAN Workshop',
    description: 'Bring your truck to our fully equipped workshop',
    available: true
  },
  {
    type: 'on-site',
    name: 'On-Site Service',
    description: 'We come to your location for repairs and maintenance',
    available: true,
    additionalFee: 'Transportation fee may apply'
  }
];

export const workingHours = {
  weekdays: 'Monday - Saturday: 7:00 AM - 7:00 PM',
  emergency: '24/7 Emergency Support Available',
  note: 'On-site services may require advance scheduling'
};

export const importantNotes = [
  'All prices are for labor charges only',
  'Parts are billed separately',
  'Customers can supply their own parts or we can provide at additional cost',
  'Warranty covers workmanship only, not parts',
  'Payment required upon completion of service',
  'Discounts available for fleet services (5+ trucks)'
];

export default services;