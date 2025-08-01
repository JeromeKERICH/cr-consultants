import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChartBarIcon,
  ArrowsRightLeftIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const CoreServices = () => {
  const services = [
    {
      icon: <ChartBarIcon className="h-10 w-10 text-secondary" />,
      title: "Business Strategy & Expansion Consultancy",
      description: "We guide businesses and investors through structured market entry, growth strategies, and governance models that fuel sustainable expansion across Africa and the UAE. From idea to execution — we build with precision.",
      slug: "business-strategy",
      image: "/assets/s1.png"
    },
    {
      icon: <ArrowsRightLeftIcon className="h-10 w-10 text-secondary" />,
      title: "Cross-Border Investment & Trade Facilitation",
      description: "We connect investors, enterprises, and governments with vetted opportunities and partners. Our team ensures compliant trade flows and investment frameworks for Africa–UAE success.",
      slug: "cross-border-investment",
      image: "/assets/s3.jpg"
    },
    {
      icon: <BuildingOffice2Icon className="h-10 w-10 text-secondary" />,
      title: "Infrastructure & Mega Project Consultancy",
      description: "We provide PPP advisory, project structuring, and DFI readiness services for infrastructure, energy, and development projects that drive long-term impact.",
      slug: "infrastructure",
      image: "/assets/s5.jpg"
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10 text-secondary" />,
      title: "Immigration & Residency Pathway Advisory",
      description: "From UAE residency to Africa-linked investment migration programs, we guide executives, entrepreneurs, and families through every step — seamlessly and securely.",
      slug: "immigration",
      image: "/assets/s2.jpg"
    },
    {
      icon: <BriefcaseIcon className="h-10 w-10 text-secondary" />,
      title: "Family Office & Wealth Structuring",
      description: "We assist high-net-worth families in structuring their wealth, setting up family offices, and managing cross-border succession planning and compliance.",
      slug: "family-office",
      image: "/assets/s6.jpg"
    },
    {
      icon: <AcademicCapIcon className="h-10 w-10 text-secondary" />,
      title: "Leadership Development & Capacity Building",
      description: "Empowering boards, executives, women, and youth through bespoke mentorship, governance workshops, and transformational leadership programs that elevate performance.",
      slug: "leadership",
      image: "/assets/s4.jpg"
    },
    {
      icon: <ScaleIcon className="h-10 w-10 text-secondary" />,
      title: "Legal Consultancy Outside UAE Jurisdiction",
      description: "Our legal team provides robust commercial, regulatory, and corporate advisory for businesses entering African markets — with licensing in Kenya and other regions.",
      slug: "legal-consultancy",
      image: "/assets/s7.png"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-5 md:py-15bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering Cross-Border Growth With Strategy, Structure, and Impact
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Service Image */}
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start">
                  
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;