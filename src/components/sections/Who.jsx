import { 
    GlobeAmericasIcon,
    BuildingOfficeIcon,
    BuildingLibraryIcon,
    BriefcaseIcon,
    ChartBarIcon,
    LightBulbIcon,
    UserIcon,
    AcademicCapIcon
  } from '@heroicons/react/24/outline';
  import { motion } from 'framer-motion';
  
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
  
  const sectionTitle = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const WhoWeHelp = () => {
    const primaryClients = [
      {
        icon: <GlobeAmericasIcon className="h-10 w-10 text-secondary" />,
        title: "Foreign Investors & Entrepreneurs",
        description: "Seeking Africa or UAE market entry, structuring, and trade facilitation."
      },
      {
        icon: <BuildingOfficeIcon className="h-10 w-10 text-secondary" />,
        title: "UAE-Based Businesses",
        description: "Expanding into African markets with tailored growth strategies."
      },
      {
        icon: <BuildingLibraryIcon className="h-10 w-10 text-secondary" />,
        title: "Governments & PPP Stakeholders",
        description: "Infrastructure, mega projects, and DFI readiness support."
      },
      {
        icon: <BriefcaseIcon className="h-10 w-10 text-secondary" />,
        title: "High-Net-Worth Individuals & Families",
        description: "Looking for Africa–UAE residency, family offices, and investment pathways."
      },
      {
        icon: <ChartBarIcon className="h-10 w-10 text-secondary" />,
        title: "Corporates & Family Offices",
        description: "Needing investment intelligence, legal frameworks, and wealth structuring."
      },
      {
        icon: <LightBulbIcon className="h-10 w-10 text-secondary" />,
        title: "NGOs, Foundations & Impact Investors",
        description: "Focused on social enterprise and Africa-focused ESG initiatives."
      }
    ];
  
    const secondaryClients = [
      {
        icon: <UserIcon className="h-10 w-10 text-primary" />,
        title: "Business Leaders & Executives",
        description: "Seeking executive coaching, leadership training, and governance support."
      },
      {
        icon: <AcademicCapIcon className="h-10 w-10 text-primary" />,
        title: "Women & Youth Programs",
        description: "Initiatives requiring empowerment, mentorship, and capacity-building tools."
      }
    ];
  
    return (
      <section className="py-5 md:py-15 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionTitle}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who We Help</h2>
            <motion.p 
              variants={sectionTitle}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              We work with a diverse range of clients shaping Africa–UAE growth.
            </motion.p>
          </motion.div>
  
          {/* Primary Clients */}
          <div className="mb-20">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionTitle}
              className="text-xl font-semibold text-primary mb-8 pb-2 border-b border-secondary inline-block"
            >
              Primary Clients
            </motion.h3>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {primaryClients.map((client, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="mb-4 p-3 bg-primary/10 rounded-full"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {client.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{client.title}</h4>
                    <p className="text-gray-600">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
  
          {/* Secondary Clients */}
          <div>
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionTitle}
              className="text-xl font-semibold text-primary mb-8 pb-2 border-b border-secondary inline-block"
            >
              Secondary Clients
            </motion.h3>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {secondaryClients.map((client, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="mb-4 p-3 bg-secondary/10 rounded-full"
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {client.icon}
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{client.title}</h4>
                    <p className="text-gray-600">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoWeHelp;