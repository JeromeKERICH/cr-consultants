import { motion } from 'framer-motion';
import { CalendarDaysIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const BookCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Let's Build Your <span className="text-secondary">Cross-Border</span> Growth Strategy
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto"
          >
            Whether you're an investor, executive, or entrepreneur, we're ready to guide your expansion with clarity and confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-secondary text-white font-bold py-4 px-8 rounded-lg hover:bg-secondary-light transition-colors duration-300"
            >
              <CalendarDaysIcon className="h-6 w-6 mr-2" />
              Book Consultation
            </motion.a>
            
            <motion.a
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-white/10 text-primary font-bold py-4 px-8 rounded-lg hover:bg-primary transition-colors duration-300 border border-primary/20"
            >
              <ChatBubbleBottomCenterTextIcon className="h-6 w-6 mr-2" />
              Chat via WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCTA;