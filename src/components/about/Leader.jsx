import { motion } from 'framer-motion';
import { 
  BriefcaseIcon,
  BookOpenIcon,
  TvIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const LeadershipProfile = () => {
  return (
    <section className="py-5 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Meet the Legal Architect Behind Our Success
          </h2>
        </motion.div>

        {/* Profile Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Image Column - Responsive Width */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-md mb-6">
              <div className="aspect-w-4 aspect-h-5 md:aspect-w-3 md:aspect-h-4">
                <img 
                  src="/assets/founder.jpg" 
                  alt="Princess Caroline Mutisya"
                  className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur-lg -z-10"></div>
            </div>
            
            <div className="text-center lg:text-left w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Princess Caroline Mutisya</h3>
              <p className="text-lg text-primary mb-4">Founder & Strategic Lead</p>
              
              {/* Credentials - Responsive Layout */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <a href="#" className="flex items-center text-gray-600 hover:text-secondary transition-colors px-3 py-1 bg-white rounded-full shadow-sm text-sm">
                  <BriefcaseIcon className="h-4 w-4 mr-1.5" />
                  <span>14+ Years Experience</span>
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-secondary transition-colors px-3 py-1 bg-white rounded-full shadow-sm text-sm">
                  <BookOpenIcon className="h-4 w-4 mr-1.5" />
                  <span>Publications</span>
                </a>
              </div>
              
              {/* Social Links - Responsive Centering */}
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="#" className="bg-white p-2 rounded-lg shadow hover:bg-gray-100 transition-colors flex items-center">
                  <svg className="h-5 w-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="ml-1.5 text-sm hidden sm:inline">LinkedIn</span>
                </a>
                <a href="#" className="bg-white p-2 rounded-lg shadow hover:bg-gray-100 transition-colors flex items-center">
                  <TvIcon className="h-5 w-5 text-primary" />
                  <span className="ml-1.5 text-sm hidden sm:inline">Media</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio Column - Responsive Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="prose prose-lg text-gray-700 max-w-none space-y-4 md:space-y-6">
              <p className="leading-relaxed">
                Princess Caroline Mutisya is the Founder and Strategic Lead at CR Strategic Advisory. With over 14 years of experience in international trade law, cross-border investment structuring, and high-level negotiations, she brings unmatched insight into the African and UAE markets.
              </p>
              
              <p className="leading-relaxed">
                As a trusted advisor to governments, boards, and investors, Princess Caroline has spearheaded multi-million dollar transactions, advised infrastructure mega-projects under PPP frameworks, and mentored emerging women leaders across Africa.
              </p>
              
              <p className="leading-relaxed font-medium">
                Her mission? To create a firm that not only drives commercial growth — but also enables transformation, legacy, and empowerment.
              </p>
            </div>

            {/* Quote Card - Responsive Padding */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 md:mt-12 bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-secondary"
            >
              <blockquote className="text-lg md:text-xl italic text-gray-800 mb-4 leading-relaxed">
                "Clarity and strategy are not luxuries — they're essentials for cross-border success."
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Princess Caroline Mutisya</p>
                  <p className="text-sm text-gray-500">Keynote, Africa-UAE Investment Summit 2023</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfile;