// Parts data for XCAN Engineering
// All parts available for HOWO, SINOTRUK, DAF, IVECO, Volvo, MAN Diesel

export const partsCategories = [
  {
    id: 'engines',
    name: 'Complete Engines',
    description: 'Brand new and tokunbo complete engines for all truck brands',
    items: [
      { name: 'HOWO WD615 Engine', brands: ['HOWO', 'SINOTRUK'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'DAF PR Engine', brands: ['DAF'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'IVECO Cursor Engine', brands: ['IVECO'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Volvo D16 Engine', brands: ['Volvo'], condition: ['Tokunbo'] },
      { name: 'MAN D26 Engine', brands: ['MAN Diesel'], condition: ['Brand New', 'Tokunbo'] }
    ]
  },
  {
    id: 'gearboxes',
    name: 'Gearboxes / Transmissions',
    description: 'Manual and automated transmission systems',
    items: [
      { name: 'HOWO 10-Speed Gearbox', brands: ['HOWO', 'SINOTRUK'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'DAF 16-Speed Gearbox', brands: ['DAF'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'IVECO 12-Speed Gearbox', brands: ['IVECO'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Volvo I-Shift Gearbox', brands: ['Volvo'], condition: ['Tokunbo'] },
      { name: 'MAN TipMatic Gearbox', brands: ['MAN Diesel'], condition: ['Brand New', 'Tokunbo'] }
    ]
  },
  {
    id: 'axles',
    name: 'Complete Axles',
    description: 'Front and rear axles for heavy duty trucks',
    items: [
      { name: 'HOWO Front Axle', brands: ['HOWO', 'SINOTRUK'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'HOWO Rear Axle', brands: ['HOWO', 'SINOTRUK'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'DAF Front Axle', brands: ['DAF'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'DAF Rear Axle', brands: ['DAF'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Volvo Front Axle', brands: ['Volvo'], condition: ['Tokunbo'] },
      { name: 'Volvo Rear Axle', brands: ['Volvo'], condition: ['Tokunbo'] }
    ]
  },
  {
    id: 'suspensions',
    name: 'Suspensions & Springs',
    description: 'Air suspension systems and leaf springs',
    items: [
      { name: 'Air Suspension Kit', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Leaf Spring Set', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Suspension Air Bag', brands: ['DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Spring Shackle Kit', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO'], condition: ['Brand New', 'Tokunbo'] }
    ]
  },
  {
    id: 'engine-parts',
    name: 'Engine Spare Parts',
    description: 'Individual engine components and accessories',
    items: [
      { name: 'Pistons & Rings', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Crankshaft', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Cylinder Head', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Turbocharger', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Fuel Injectors', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Water Pump', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Oil Pump', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Gasket Set', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] }
    ]
  },
  {
    id: 'air-system',
    name: 'Air System Parts',
    description: 'Complete air system components (Specialty)',
    items: [
      { name: 'Air Compressor', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Air Dryer', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Air Tank', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Air System Valve', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Air Hose', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Air Chamber', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Air Suspension Balloon', brands: ['DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Air Horn', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] }
    ]
  },
  {
    id: 'electrical',
    name: 'Electrical Parts',
    description: 'Electrical system components',
    items: [
      { name: 'Alternator', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Starter Motor', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Battery', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'ECU Module', brands: ['DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Wiring Harness', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Sensors', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] }
    ]
  },
  {
    id: 'brake-system',
    name: 'Brake System Parts',
    description: 'Complete brake system components',
    items: [
      { name: 'Brake Pads', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Brake Discs', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Brake Drums', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Brake Caliper', brands: ['DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New', 'Tokunbo'] },
      { name: 'Brake Booster', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] },
      { name: 'Hand Brake', brands: ['HOWO', 'SINOTRUK', 'DAF', 'IVECO', 'Volvo', 'MAN Diesel'], condition: ['Brand New'] }
    ]
  }
];

export const brands = [
  { name: 'HOWO', fullName: 'SINOTRUK HOWO' },
  { name: 'SINOTRUK', fullName: 'Sinotruk Group' },
  { name: 'DAF', fullName: 'DAF Trucks' },
  { name: 'IVECO', fullName: 'IVECO Trucks' },
  { name: 'Volvo', fullName: 'Volvo Trucks' },
  { name: 'MAN Diesel', fullName: 'MAN Truck & Bus' }
];

export const conditions = [
  { type: 'Brand New', description: 'Factory fresh parts with warranty' },
  { type: 'Tokunbo', description: 'Used parts imported from Europe/USA' }
];

export default partsCategories;