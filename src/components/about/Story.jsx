import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const FirmStory = () => {
  const storyImages = [
    '/assets/logo.jpg',
    '/assets/port.jpg',
    '/assets/bg.jpg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === storyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [storyImages.length]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              Our Story
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-700 mb-6"
            >
              Our journey began with a mission: to simplify cross-border business for the bold. Founded by Princess Caroline Mutisya, a seasoned legal architect with 14+ years of experience, CR Strategic Advisory was born from the real need for structure, clarity, and connection in Africa–UAE investment.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-700 mb-6"
            >
              We understand the frustrations of international investors and entrepreneurs: compliance gaps, opaque processes, missed opportunities. So we built a solution-driven firm, combining deep local insights, legal precision, and strategic partnerships to drive results.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-700"
            >
              Today, we proudly serve high-net-worth individuals, corporates, governments, and development organizations with one goal in mind: help them expand smart, safe, and successfully.
            </motion.p>
          </div>

          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-xl"
          >
            {storyImages.map((image, index) => (
              <motion.img
                key={image}
                src={image}
                alt={`Our story ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
            ))}
            
            {/* Image selector indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {storyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-secondary' : 'bg-white/50'}`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirmStory;