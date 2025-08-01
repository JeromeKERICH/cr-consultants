import { motion } from 'framer-motion';
import { 
  GlobeAltIcon,
  ShieldCheckIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
  const uniqueFactors = [
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-secondary" />,
      title: "Africa-UAE Nexus Expertise",
      description: "We uniquely bridge African markets and Middle East opportunities, providing local insights with a global perspective."
    },
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-secondary" />,
      title: "Proven Leadership",
      description: "Led by Princess Caroline Mutisya, a recognized Strategic Legal Architect with 14+ years of cross-border investment experience."
    },
    {
      icon: <MapPinIcon className="h-12 w-12 text-secondary" />,
      title: "Dubai Strategic Location",
      description: "Based in the UAE business hub, we leverage Dubai's global connectivity to serve Africa-focused investors."
    },
    {
      icon: <BuildingLibraryIcon className="h-12 w-12 text-secondary" />,
      title: "Strong Institutional Networks",
      description: "Partnerships with Dubai Chambers, East Africa Chambers of Commerce, and African governments."
    },
    {
      icon: <SparklesIcon className="h-12 w-12 text-secondary" />,
      title: "Purpose-Driven Consultancy",
      description: "We integrate business growth with social impact, women & youth empowerment, and ESG-driven strategies."
    },
    {
      icon: <SparklesIcon className="h-12 w-12 text-secondary" />,
      title: "Comprehensive Service Portfolio",
      description: "From market entry to legal advisory, we offer end-to-end solutions tailored to your unique needs."
    }
  ];

  return (
    <section className="py-5 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            What Makes Us Unique
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Five competitive advantages that set our advisory firm apart
          </p>
        </motion.div>

        {/* Unique Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-secondary/30 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="mb-6 p-4 bg-primary/10 rounded-full"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {factor.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gray-800 rounded-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#D4AF37]/30 rounded-full blur"></div>
                <img 
                  src="/assets/founder.jpg" 
                  alt="Princess Caroline Mutisya"
                  className="relative h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-12 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">
                Strategic Leadership
              </h3>
              <p className="text-gray-100 mb-4">
                "Our advisory approach combines deep African market understanding with UAE business acumen, creating unparalleled value for clients navigating cross-border opportunities."
              </p>
              <div className="text-secondary font-semibold">
                <p>Princess Caroline Mutisya</p>
                <p className="text-sm">CEO & Strategic Legal Architect</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;