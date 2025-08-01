import { 
    
    BriefcaseIcon,
    BuildingLibraryIcon,
    UserGroupIcon,
    CheckCircleIcon 
  } from '@heroicons/react/24/outline';
  
  export default function ServiceDes() {
    const clientTypes = [
      {
        title: "Investors & HNWIs",
        icon: <UserGroupIcon className="h-10 w-10 text-secondary" />,
        description: "Secure your wealth and mobility with tailored residency programs, family office solutions, and cross-border investment strategies.",
        benefits: [
          "Residency & citizenship planning",
          "Wealth structuring",
          "Asset protection",
          "Global mobility solutions"
        ]
      },
      {
        title: "Corporations",
        icon: <BriefcaseIcon className="h-10 w-10 text-secondary" />,
        description: "Navigate market entry, regulatory compliance, and operational setup with our corporate advisory services.",
        benefits: [
          "Market entry strategy",
          "Freezone/mainland setup",
          "Trade facilitation",
          "Local partnership guidance"
        ]
      },
      {
        title: "Governments",
        icon: <BuildingLibraryIcon className="h-10 w-10 text-secondary" />,
        description: "Develop infrastructure projects and attract foreign investment through our public-private partnership expertise.",
        benefits: [
          "Mega-project development",
          "PPP structuring",
          "Investment promotion",
          "Capacity building programs"
        ]
      }
    ];
  
    return (
      <section className="py-5 md:py-15 lg:py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Holistic Cross-Border Expertise
            </h2>
            
          </div>
  
          {/* Client Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {client.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">
                    {client.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-5">
                  {client.description}
                </p>
                <ul className="space-y-3">
                  {client.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }