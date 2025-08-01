import { motion } from 'framer-motion';
import { useState } from 'react';

const GlobalFootprint = () => {
  const locations = [
    {
      country: 'UAE',
      city: 'Business Bay, Dubai',
      type: 'HQ',
      flag: '🇦🇪',
      description: 'Our operational hub for Africa-Middle East strategy'
    },
    {
      country: 'Kenya',
      city: 'Nairobi',
      type: 'Licensed legal practice',
      flag: '🇰🇪',
      description: 'Full-service legal and advisory capabilities'
    },
    {
      country: 'Rwanda',
      city: 'Kigali',
      type: 'In partnership',
      flag: '🇷🇼',
      description: 'Strategic partnerships with local firms'
    },
    {
      country: 'Uganda',
      city: 'Kampala',
      type: 'Legal network',
      flag: '🇺🇬',
      description: 'Vetted legal partners and advisors'
    },
    {
      country: 'Tanzania',
      city: 'Dar es Salaam',
      type: 'Compliance advisory',
      flag: '🇹🇿',
      description: 'Specialized regulatory compliance services'
    }
  ];

  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-secondary">Strategic Footprint</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With our operational hub in Dubai and on-ground legal presence across East Africa, we operate at the center of global opportunity.
          </p>
        </motion.div>

        {/* Map Visualization - Now centered and full width */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-96 lg:h-[500px] bg-gray-100 rounded-xl overflow-hidden max-w-4xl mx-auto"
        >
          {/* Base Map Image */}
          <img 
            src="/images/africa-uae-map.png" 
            alt="Africa and UAE map" 
            className="w-full h-full object-cover"
          />
          
          {/* Location Pins */}
          {locations.map((location, index) => (
            <motion.button
              key={index}
              className={`absolute ${getPinPosition(index)} w-8 h-8 flex items-center justify-center rounded-full text-xl z-10`}
              onMouseEnter={() => setHoveredLocation(index)}
              onMouseLeave={() => setHoveredLocation(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-secondary/30 rounded-full animate-ping"></div>
                <div className="relative bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md border border-gray-200">
                  {location.flag}
                </div>
              </div>
            </motion.button>
          ))}
          
          {/* Location Tooltip */}
          {hoveredLocation !== null && (
            <motion.div
              className="absolute bg-white p-4 rounded-lg shadow-xl border border-gray-200 z-20 max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                left: `${getTooltipPosition(hoveredLocation).x}%`,
                top: `${getTooltipPosition(hoveredLocation).y}%`
              }}
            >
              <h4 className="font-bold text-gray-900">
                {locations[hoveredLocation].city}, {locations[hoveredLocation].country}
              </h4>
              <p className="text-sm text-primary mb-1">{locations[hoveredLocation].type}</p>
              <p className="text-sm text-gray-600">{locations[hoveredLocation].description}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Custom Solution CTA - Centered below map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 bg-secondary/10 p-6 rounded-xl border border-secondary/20 max-w-2xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 bg-secondary text-white p-3 rounded-lg mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-2">Don't see your country?</h4>
            <p className="text-gray-600 mb-4">Request a custom solution tailored to your needs.</p>
            <button className="text-sm font-medium text-secondary hover:text-secondary-dark flex items-center mx-auto">
              Contact us for expansion support
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper functions for pin positioning
function getPinPosition(index) {
  const positions = [
    'top-[20%] left-[80%]',  // UAE
    'top-[60%] left-[65%]',  // Kenya
    'top-[65%] left-[70%]',  // Rwanda
    'top-[55%] left-[67%]',  // Uganda
    'top-[70%] left-[72%]'   // Tanzania
  ];
  return positions[index] || 'top-0 left-0';
}

function getTooltipPosition(index) {
  const positions = [
    { x: 70, y: 15 },  // UAE
    { x: 60, y: 55 },  // Kenya
    { x: 65, y: 60 },  // Rwanda
    { x: 62, y: 50 },  // Uganda
    { x: 67, y: 65 }   // Tanzania
  ];
  return positions[index] || { x: 0, y: 0 };
}

export default GlobalFootprint;