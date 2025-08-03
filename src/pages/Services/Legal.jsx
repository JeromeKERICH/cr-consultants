import {
    
    ShieldCheckIcon,
   
    ArrowRightIcon
  } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  
  export default function LegalConsultancyService() {
    useEffect(() =>{
        window.scrollTo(0, 0);
    },[])

    return (
      <div className="bg-white">
        {/* Hero Section */}
        
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s7.png" 
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Legal Consultancy Outside UAE Jurisdiction
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Navigating Africa's complex legal landscapes from our UAE-Kenya strategic base
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Certainty Across Borders</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cross-border expansion brings enormous opportunity, but also complex legal, regulatory, and compliance challenges.
                </p>
                <p className="text-gray-600 mb-6">
                  For businesses entering African markets, understanding local laws, licensing requirements, and corporate governance structures is non-negotiable. Our legal team provides robust commercial, regulatory, and corporate advisory for clients whose operations extend beyond the UAE.
                </p>
                <p className="text-gray-600">
                  With licensed practice in Kenya and a network of partner firms across Africa, we ensure full compliance and strategic legal positioning so you can focus on growth.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Risk Areas We Mitigate</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Regulatory Non-Compliance:</span> Avoid penalties and operational delays</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Contract Risks:</span> Protect against unfavorable terms</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">IP Vulnerability:</span> Secure your trademarks and patents</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Jurisdictional Gaps:</span> Bridge legal systems effectively</span>
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
            <h2 className="text-2xl font-bold text-center text-primary mb-12">Our Legal Spectrum</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corporate & Commercial Law */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
            
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Corporate & Commercial Law</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Company incorporation and entity structuring
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Commercial contract drafting and negotiation
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    M&A and joint venture agreements
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Shareholder agreements and governance
                  </li>
                </ul>
              </div>
  
              {/* Regulatory & Compliance */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Regulatory & Compliance</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Sector-specific licensing (energy, telecoms, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Investment code compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Risk assessment strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Ongoing compliance monitoring
                  </li>
                </ul>
              </div>
  
              {/* Intellectual Property */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                 
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Intellectual Property</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Trademark registration and protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Patent filing and design registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Copyright advisory
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Multi-jurisdiction IP portfolio management
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Resources:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.kipi.go.ke" target="_blank" rel="noopener noreferrer" className="text-primary underline">Kenya Industrial Property Institute (KIPI)</a></li>
                    <li><a href="https://www.aripo.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">African Regional IP Organization (ARIPO)</a></li>
                    <li><a href="https://www.oapi.int" target="_blank" rel="noopener noreferrer" className="text-primary underline">OAPI (Francophone Africa)</a></li>
                  </ul>
                </div>
              </div>
  
              {/* International Trade */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">International Trade Law</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Trade agreement structuring
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Cross-border contract advisory
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Trade treaty compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Dispute resolution and arbitration
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Resources:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://au-afcfta.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">African Continental Free Trade Area (AfCFTA)</a></li>
                    <li><a href="https://www.eac.int" target="_blank" rel="noopener noreferrer" className="text-primary underline">East African Community Trade Portal</a></li>
                  </ul>
                </div>
              </div>
  
              {/* Immigration & Business Setup */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Immigration & Business Setup</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Work permits and investor visas
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Legal structuring for foreign investors
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Immigration coordination for executives
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    Residency program advisory
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Secure Your Cross-Border Operations</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Our licensed legal team bridges UAE and African jurisdictions to protect your business interests.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Request Legal Consultation
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg "
              >
                Explore All Services
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
  
        {/* Why Critical Section */}
        <section className="py-5 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-primary mb-12">Why Cross-Border Legal Advisory is Critical</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Africa's Legal Complexity</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Diverse Systems:</span> Common law, civil law, and hybrid jurisdictions
                  </li>
                 
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Sector-Specific Rules:</span> Special licensing in energy, finance, telecoms
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Local Content Laws:</span> Mandatory local participation in many sectors
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Advantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Risk Mitigation:</span> Avoid costly legal disputes and penalties
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Faster Market Entry:</span> Streamlined licensing and compliance
                    
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary font-bold mr-2">•</span>
                    <span className="font-bold">Investor Confidence:</span> Proper structuring attracts capital
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        
        
      </div>
    );
  }