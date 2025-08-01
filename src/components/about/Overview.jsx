import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/30 z-10" />
        <img 
          src="/assets/about.png" 
          alt="Dubai and African cityscape merging" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 sm:px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-secondary font-medium mt-10 text-lg mb-5"
          >
            About CR Consultants
          </motion.p>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-6xl lg:text-4xl font-bold text-white mb-6 leading-tight"
          >
            Rooted in Africa. Operating from Dubai. <br/>
            <span className="text-secondary">Building Global Impact.</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 mb-4 max-w-5xl mx-auto text-start md:text-center"
          >
            CR Strategic Advisory is a cross-border consultancy firm helping investors, entrepreneurs, governments, and corporates expand between Africa and the UAE. From strategic legal advisory to market entry, trade facilitation, and leadership development, we architect growth with precision, compliance, and purpose.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/services"
              className="inline-block bg-secondary text-primary font-bold py-3 px-8 mb-20 rounded-lg hover:bg-secondary-light transition-colors duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default AboutHero;