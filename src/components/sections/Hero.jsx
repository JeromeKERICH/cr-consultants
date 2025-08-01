import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarDaysIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const clientTypes = ["Investors", "Entrepreneurs", "Governments"];
  
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50 z-10" />
        <img 
          src="/assets/bg.jpg" 
          alt="Dubai and African cityscape" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Strategic Bridge Between <span className="text-secondary">Africa</span> and the <span className="text-secondary">UAE</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl"
          >
            We help investors, businesses, and governments expand confidently through cross-border trade, legal advisory, and market-entry consultancy.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/book"
                className="flex items-center justify-center bg-secondary text-primary font-bold py-4 px-8 rounded-lg hover:bg-secondary-light transition-colors"
              >
                <CalendarDaysIcon className="h-6 w-6 mr-2" />
                Book Consultation
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.div>
          </div>
        </motion.div>

        {/* Rotating Client Types */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center">
            <div className="h-0.5 bg-secondary w-16 mr-4" />
            <div className="relative h-8 overflow-hidden">
              <motion.div
                animate={{ 
                  y: [-20, -60, -100],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                className="flex flex-col"
              >
                {clientTypes.map((type, index) => (
                  <div key={index} className="text-white font-medium text-lg h-8 flex items-center">
                    For {type}
                  </div>
                ))}
                {/* Duplicate first item for seamless looping */}
                <div className="text-white font-medium text-lg h-8 flex items-center">
                  For {clientTypes[0]}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;