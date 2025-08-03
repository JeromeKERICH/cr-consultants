import {
    
    CheckCircleIcon,
    
    FlagIcon,
    LinkIcon,
  
    MapIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon
  } from '@heroicons/react/24/outline';
  import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
  
  export default function ImmigrationService() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
       
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s2.jpg" // Add your image to public/images/
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Immigration & Residency Pathway Advisory
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Strategic relocation solutions for investors, entrepreneurs, and global families
            </p>
          </div>
        </section>
        
  
        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Mobility in the New Economy</h2>
                <p className="text-lg text-gray-600 mb-6">
                  In today's interconnected world, where you live, work, and invest is as important as what you do. Strategic residency unlocks access to new markets, investment opportunities, tax advantages, and lifestyle benefits.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Why Professional Guidance Matters</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Navigating complex immigration regulations
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Aligning residency strategy with business and family goals
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Avoiding costly application mistakes and delays
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    
                    Strategic Residency Options
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <FlagIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">UAE Programs</h4>
                        <p className="text-sm text-gray-600">Golden Visa, investor visas, executive relocation packages</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <MapIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Africa Programs</h4>
                        <p className="text-sm text-gray-600">Investment-linked residency and citizenship options</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                      <ScaleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">Tax Optimization</h4>
                        <p className="text-sm text-gray-600">Aligning residency with financial planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Coverage */}
        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Residency Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* UAE Programs */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">UAE Residency Programs</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Golden Visa:</span> For investors, entrepreneurs, and exceptional talents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Real Estate Investor:</span> Residency through property investment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Company Formation:</span> Mainland and Freezone business visas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Executive Relocation:</span> Employment-based residency packages</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a href="https://icp.gov.ae/en/golden-visa/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline hover:underline flex items-center">
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                    UAE Golden Visa Official Portal
                  </a>
                </div>
              </div>
  
              {/* Africa Programs */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                 
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Africa Investment Migration</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Citizenship Programs:</span> Investment-linked nationality options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Residency Schemes:</span> Real estate and business investment pathways</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Tax Residency:</span> Strategic planning for global families</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2"><span className="font-medium">Regional Mobility:</span> Access to ECOWAS, EAC and other trade blocs</span>
                  </li>
                </ul>
              </div>
  
              {/* Application Management */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">End-to-End Application Management</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Eligibility assessment and document preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Application submission and authority liaison</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Immigration compliance and legal oversight</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Family inclusion and dependent processing</span>
                  </li>
                </ul>
              </div>
  
              {/* Relocation Support */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Relocation & Settlement Support</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Assistance with housing, schooling, and local integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Banking setup and financial planning for new residents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Corporate relocation for executives and staff</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Strategic Advantages */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* UAE Advantages */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                 
                  Why Choose UAE Residency?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Tax Efficiency:</span> No personal income, inheritance, or capital gains tax
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Business Hub:</span> Strategic access to Middle East, Africa, Europe and Asia
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Quality of Life:</span> World-class healthcare, education and infrastructure
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Investor Confidence:</span> Stable governance and clear property laws
                    </div>
                  </li>
                </ul>
              </div>
  
              {/* Africa Advantages */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  
                  Benefits of African Investment Migration
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Market Access:</span> Direct business opportunities in high-growth economies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Sector Incentives:</span> Benefits in agriculture, manufacturing and renewables
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Lifestyle & Heritage:</span> Ideal for families with cultural/business ties
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-secondary/10 p-1 rounded-full mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold">Regional Mobility:</span> Visa-free access to ECOWAS, EAC and other trade blocs
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        
        {/* Our Process */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our 4-Step Residency Process</h2>
            
            <div className="relative">
              {/* Progress line */}
              <div className="hidden md:block absolute left-0 right-0 top-8 h-1 bg-gray-200"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                   
                    title: "Needs Assessment",
                    desc: "Understand your goals and priorities. Our first "
                  },
                  { 
                    
                    title: "Program Selection",
                    desc: "Match with optimal residency pathway"
                  },
                  { 
                    
                    title: "Application",
                    desc: "Document preparation and submission"
                  },
                  { 
                    
                    title: "Relocation",
                    desc: "Settlement and integration support"
                  }
                ].map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Number indicator */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-white shadow-md z-10">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    
                    {/* Step card */}
                    <div className="bg-white p-6 pt-12 rounded-lg shadow-sm hover:shadow-md transition-all h-full">
                      <div className="flex justify-center mb-4">
                        
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        
  
        {/* Why Choose Us */}
        <section className="py-5 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Why Choose Our Advisory</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
                  title: "Licensed Expertise",
                  desc: "Legal practice in both African and UAE jurisdictions"
                },
                {
                  icon: <LinkIcon className="h-8 w-8 text-secondary" />,
                  title: "Official Partnerships",
                  desc: "With freezones, immigration offices and mobility specialists"
                },
                {
                  icon: <ShieldCheckIcon className="h-8 w-8 text-secondary" />,
                  title: "Confidential Handling",
                  desc: "Secure management of sensitive documents"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/10 rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Begin Your Strategic Relocation Journey</h2>
            <p className="text-l md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our immigration specialists will design a personalized residency pathway aligned with your business and family objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Book Residency Consultation
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request Program Comparison
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }