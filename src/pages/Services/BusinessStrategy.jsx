import { 
    ChartBarIcon,
    BuildingLibraryIcon,
    ScaleIcon,
    UserGroupIcon,
    GlobeAltIcon,
    
    ShieldCheckIcon,
    ArrowPathIcon,
    LightBulbIcon,
    NumberedListIcon,
    BookOpenIcon
  } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  
  
  export default function BusinessStrategyService() {
    useEffect(() => {
      window.scrollTo(0, 0)
    },[]);
    return (
      <div className="bg-white">
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s1.png" 
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Business Strategy & Expansion Consultancy
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Structured market entry solutions for Africa-UAE cross-border growth
            </p>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Market Expansion</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Expanding into a new market, whether it's Africa or the UAE, is both an opportunity and a high-stakes challenge.
                </p>
                <p className="text-gray-600 mb-6">
                  The UAE has positioned itself as a global business hub, offering world-class infrastructure, investor-friendly policies, tax advantages, and unmatched access to Asian, European, and African markets. Dubai, in particular, has become a launchpad for Africa-focused investors.
                </p>
                <p className="text-gray-600">
                  Africa presents fast-growing economies, untapped markets, and a young, tech-driven population. From Nairobi to Lagos, Kigali to Cape Town, the continent is brimming with opportunities in sectors like renewable energy, agribusiness, fintech, logistics, and infrastructure.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Professional Guidance Matters</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">Avoid costly regulatory mistakes</span>
                    </li>
                    <li className="flex items-start">
                      <LightBulbIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">Accelerate your market entry</span>
                    </li>
                    <li className="flex items-start">
                      <GlobeAltIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">Leverage local networks and partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <ScaleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">Optimize your tax and corporate structure</span>
                    </li>
                    <li className="flex items-start">
                        <ArrowPathIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="ml-3 text-gray-700">Ensure compliance with local laws</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Service Coverage */}
        <section className="py-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Benefits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Market Entry Strategy */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <ChartBarIcon className="h-8 w-8 text-secondary" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Market Entry Strategy</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    In-depth market intelligence and analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Competitive landscape analysis for target sectors
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Feasibility studies and risk assessments
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Target market segmentation and entry strategies
                  </li>
                </ul>
              </div>
  
              {/* Operational Frameworks */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BuildingLibraryIcon className="h-8 w-8 text-secondary" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Operational Frameworks</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Business structuring for compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Tax planning and optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Corporate governance frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Organizational design and staffing plans
                  </li>
                </ul>
              </div>
  
              {/* Regulatory Navigation */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <ScaleIcon className="h-8 w-8 text-secondary" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Regulatory Navigation</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Company registration and licensing
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Industry-specific permits and approvals
                  </li> 
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Cross-border legal structuring, planning & compliance
                  </li> 
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    FDI policy alignment and incentives access
                  </li>
                </ul>
              </div>
  
              {/* Partnerships & Networks */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-secondary" />
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Partnerships & Networks</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Vetted partner identification and introductions
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Trade chamber connections and networking events
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Joint venture facilitation and negotiation support
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Government agency introductions and advocacy support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* Strategic Advantages Sections */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* UAE Advantages */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  
                  Why the UAE is Strategic for Africa-Focused Businesses
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Geographic Advantage:</span> Dubai sits at the crossroads of East and West, just 4–6 hours from major African capitals.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Global Connectivity:</span> World's busiest ports and airports for Africa-bound trade.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Investor-Friendly Policies:</span> Free zones, 100% foreign ownership, and attractive tax regimes.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Financial Gateway:</span> Strong banking systems to channel capital into African markets.
                    </div>
                  </li>
                </ul>
              </div>
  
              {/* Africa Advantages */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  
                  Why Africa is Strategic for UAE-Based Businesses
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Rapid Growth Markets:</span> Some of the world's fastest-growing economies with emerging middle-class consumers.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Resource-Rich:</span> Abundant natural resources and growing manufacturing sectors.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Digital Leapfrogging:</span> Mobile technology driving fintech and e-commerce innovation.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">✓</span>
                    <div>
                      <span className="font-medium">Regional Trade Integration:</span> AfCFTA opens a unified market of 1.3 billion people.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


         {/* Final CTA */}
         <section className="py-5 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Expand Strategically?</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Our Africa-UAE business strategists will design a customized expansion plan for your specific objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Book Strategy Session
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </section>
  
        {/* Our Approach */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our 5-Step Market Expansion Methodology</h2>
    
    <div className="relative">
      {/* Progress line */}
      <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-secondary to-primary transform -translate-x-1/2"></div>
      
      <div className="space-y-12 lg:space-y-0">
        {/* Step 1 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pr-8 lg:order-first">
            <div className="flex items-center lg:justify-end mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                1
              </div>
            </div>
          </div>
          <div className="lg:pl-8 mt-4 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900">Discovery & Goal Setting</h3>
            <p className="mt-2 text-gray-600">
              We conduct in-depth consultations to understand your vision, capabilities, and target markets. 
              Through structured workshops, we define clear objectives and success metrics for your expansion.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pl-8 lg:order-last">
            <div className="flex items-center lg:justify-start mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                2
              </div>
            </div>
          </div>
          <div className="lg:pr-8 mt-4 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900">Research & Feasibility</h3>
            <p className="mt-2 text-gray-600">
              Our team delivers comprehensive market intelligence, analyzing regulatory frameworks, 
              competitive landscapes, and demand patterns. We identify risks and validate opportunities 
              through data-driven feasibility studies.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pr-8 lg:order-first">
            <div className="flex items-center lg:justify-end mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                3
              </div>
            </div>
          </div>
          <div className="lg:pl-8 mt-4 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900">Strategy Design</h3>
            <p className="mt-2 text-gray-600">
              We craft a customized expansion blueprint covering market entry options, 
              operational structures, partnership models, and implementation timelines. 
              The strategy aligns with your risk appetite and growth objectives.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pl-8 lg:order-last">
            <div className="flex items-center lg:justify-start mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                4
              </div>
            </div>
          </div>
          <div className="lg:pr-8 mt-4 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900">Implementation</h3>
            <p className="mt-2 text-gray-600">
              Our experts handle company registration, licensing, banking setup, 
              and operational launch. We establish local presences, recruit initial teams, 
              and ensure full compliance with all regulations.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="lg:pr-8 lg:order-first">
            <div className="flex items-center lg:justify-end mb-4 lg:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white text-2xl font-bold">
                5
              </div>
            </div>
          </div>
          <div className="lg:pl-8 mt-4 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900">Ongoing Advisory</h3>
            <p className="mt-2 text-gray-600">
              We provide continuous support through market monitoring, 
              strategy refinements, and network introductions. Our team helps 
              optimize operations and navigate evolving market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  
       
      </div>
    );
  }