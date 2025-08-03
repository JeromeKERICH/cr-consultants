import {
    ArrowPathIcon,
    BuildingLibraryIcon,
    ChartBarIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
    DocumentCheckIcon,
    GlobeAltIcon,
    LightBulbIcon,
    LinkIcon,
    ScaleIcon,
    ShieldCheckIcon,
    TruckIcon,
    UserGroupIcon
  } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  
  export default function CrossBorder() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }
    , []);
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s3.jpg" // Add your image to public/images/
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Cross-Border Investment & Trade Facilitation
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting Africa-UAE opportunities with compliance and confidence
            </p>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging Africa-UAE Commerce</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Trade and investment between Africa and the UAE is growing at an unprecedented pace. From infrastructure financing to commodity exports, manufacturing partnerships to technology transfer — there is enormous potential for investors, enterprises, and governments who can navigate these cross-border opportunities effectively.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The Challenge?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Finding trustworthy partners across jurisdictions
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Navigating different legal and regulatory systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Managing logistics, compliance, and financing complexities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Value Proposition</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Vetted Networks:</span> Access to pre-qualified partners in both regions</span>
                    </li>
                    <li className="flex items-start">
                      <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Regulatory Mastery:</span> Compliance with both African and UAE trade laws</span>
                    </li>
                    <li className="flex items-start">
                      <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">End-to-End Support:</span> From partner matching to final delivery</span>
                    </li>
                    <li className="flex items-start">
                      <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Risk Mitigation:</span> Structured agreements that protect all parties</span>
                    </li>
                    <li className="flex items-start">
                        <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-gray-700"><span className="font-medium">Impact Focused:</span> Driving sustainable development through trade</span>
                    </li>
                    <li className="flex items-start">
                        <DocumentCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-gray-700"><span className="font-medium">Local Expertise:</span> On-ground teams in key African markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Coverage */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Trade & Investment Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Partner Sourcing */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Partner & Opportunity Sourcing</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Identify and vet credible business partners in Africa and the UAE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Match investors with sector-specific opportunities (energy, agriculture, logistics, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Facilitate government and institutional investor introductions</span>
                  </li>
                </ul>
              </div>
  
              {/* Investment Framework */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Investment Framework Design</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Structure cross-border deals aligning with UAE and African regulations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Draft and review investment agreements to protect stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Ensure compliance with Foreign Direct Investment (FDI) policies</span>
                  </li>
                </ul>
              </div>
  
              {/* Trade Facilitation */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Trade Facilitation</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Guidance on export/import documentation and customs clearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Navigate tariff regimes and shipping requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Facilitate participation in UAE-Africa trade fairs and forums</span>
                  </li>
                </ul>
              </div>
  
              {/* Networking & BD */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                 
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Networking & Business Development</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Arrange targeted networking events and B2B meetings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Host private investment roundtables with sector leaders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Provide market-entry branding strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Strategic Advantages - Visual Redesign */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Strategic Cross-Border Advantages
    </h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* UAE Advantages Card */}
      <div className="relative overflow-hidden rounded-xl shadow-lg group">
        {/* Background Image */}
        <img 
          src="/assets/ali.jpg" 
          alt="Jebel Ali Port Dubai"
          className="w-full h-64 object-cover brightness-75"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent p-6 flex flex-col justify-end">
          <div className="flex items-center mb-4">
            <GlobeAltIcon className="h-8 w-8 text-secondary mr-3" />
            <h3 className="text-2xl font-bold text-white">
              UAE: Africa's Trade Gateway
            </h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <TruckIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">Logistics Powerhouse:</span> World-class ports handling 60% of Africa-bound container traffic
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <CurrencyDollarIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">Financial Hub:</span> $25B+ in Africa-UAE trade finance annually
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <ScaleIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">Policy Advantage:</span> 18 bilateral agreements with African nations
              </div>
            </li>
          </ul>
          
          {/* Hover Indicator */}
          <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Trade Hub
          </div>
        </div>
      </div>

      {/* Africa Advantages Card */}
      <div className="relative overflow-hidden rounded-xl shadow-lg group">
        {/* Background Image */}
        <img 
          src="/assets/port.jpg" 
          alt="African city skyline"
          className="w-full h-64 object-cover brightness-75"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent p-6 flex flex-col justify-end">
          <div className="flex items-center mb-4">
            <LightBulbIcon className="h-8 w-8 text-secondary mr-3" />
            <h3 className="text-2xl font-bold text-white">
              Africa: The Growth Frontier
            </h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <UserGroupIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">Consumer Growth:</span> 450M+ middle-class consumers by 2035
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <BuildingLibraryIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">Sector Diversity:</span> $2.5T market opportunity across key industries
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/20 p-1 rounded-full mr-3">
                <LinkIcon className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-white">
                <span className="font-medium">AfCFTA Impact:</span> 54 nations creating $3.4T economic bloc
              </div>
            </li>
          </ul>
          
          {/* Hover Indicator */}
          <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Growth Market
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-12 bg-white rounded-xl shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">$50B+</div>
        <div className="text-gray-600">Annual UAE-Africa trade</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">6.1%</div>
        <div className="text-gray-600">Africa's annual GDP growth</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">18</div>
        <div className="text-gray-600">UAE-Africa bilateral agreements</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-primary">4.5M</div>
        <div className="text-gray-600">Africans in UAE diaspora</div>
      </div>
    </div>
  </div>
</section>
        
       {/* Our Process - Numbered Version */}
<section className="py-5 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Structured Process</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { 
          title: "Assessment",
          desc: "Define your trade/investment objectives to come up with a tailored strategy that aligns with your goals"
        },
        { 
          title: "Opportunity Mapping",
          desc: "Research markets and match partners. We identify the best opportunities for your business based on your objectives"
        },
        { 
          title: "Structuring",
          desc: "Develop compliant frameworks. Our framework strategies ensure your transactions meet all legal and regulatory requirements in both jurisdictions"
        },
        { 
          title: "Implementation",
          desc: "Facilitate first transactions. We assist with the initial trade or investment, ensuring all parties are aligned and compliant"
        },
        { 
          title: "Management",
          desc: "Monitor and scale operations. We provide ongoing support to ensure your cross-border activities are successful and sustainable"
        },
        {title: "Review & Optimize",
            desc: "Evaluate performance and refine strategies. We analyze results and adjust your approach to maximize impact and returns"
        },
      ].map((step, index) => (
        <div key={index} className="group relative bg-white p-8 rounded-xl shadow-sm text-center border border-gray-200 hover:border-secondary transition-colors">
          {/* Number Badge */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            {index + 1}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
          
          {/* Connecting line (hidden on mobile) */}
          {index < 4 && (
            <div className="hidden md:block absolute -right-6 top-1/2 w-6 h-px bg-gray-300">
              <div className="absolute -right-1 -top-1 w-2 h-2 bg-secondary rounded-full"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
    
  
        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Trade Facilitation Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BuildingLibraryIcon className="h-8 w-8 text-secondary" />,
                  title: "Institutional Networks",
                  desc: "Partnerships with Dubai Chambers and African trade ministries"
                },
                {
                  icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
                  title: "Dual Jurisdiction Expertise",
                  desc: "Licensed legal practice in both African and UAE markets"
                },
                {
                  icon: <CurrencyDollarIcon className="h-8 w-8 text-secondary" />,
                  title: "Exclusive Opportunities",
                  desc: "Access to government-backed projects and private deals"
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Expand Your Cross-Border Trade?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our Africa-UAE trade specialists will identify and structure the right opportunities for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Schedule Trade Consultation
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request Partner Matching
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }