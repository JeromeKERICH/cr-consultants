import {
    BuildingOffice2Icon,
    Cog6ToothIcon,
    DocumentChartBarIcon,
    GlobeAltIcon,
    LightBulbIcon,
    LinkIcon,
    ScaleIcon,
    ShieldCheckIcon,
    SparklesIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon, 
    CurrencyDollarIcon,
    DocumentCheckIcon,
    ChartBarIcon,
  } from '@heroicons/react/24/outline';
  import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
  
  export default function InfrastructureService() {
    useEffect(() => {
        window.scrollTo(0, 0);
        }
    , []);
    return (
      <div className="bg-white">
        

        <section className="relative bg-gray-900 overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src="/assets/s4.jpg" // Add your image to public/images/
              alt="Leadership team in discussion"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/90 via-[#002366]/70 to-[#D4AF37]/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-secondary mb-6">
            Infrastructure & Mega Project Consultancy
            </h1>
            <p className="text-l md:text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming ambitious visions into bankable, sustainable infrastructure projects
            </p>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Africa's Future</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Infrastructure and mega projects are the backbone of economic transformation. From power plants to ports, highways to digital networks, the right projects create jobs, enable trade, and improve lives for decades.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-secondary shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">The Challenge?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Multi-stakeholder coordination across jurisdictions
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Complex financing and bankability requirements
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      Political and market risk mitigation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Value Proposition</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ShieldCheckIcon  className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">End-to-End Advisory:</span> From concept to financial close and beyond</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon  className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">PPP Expertise:</span> Proven models for public-private collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon  className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">DFI Readiness:</span> Structuring projects to meet development finance criteria</span>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-3 text-gray-700"><span className="font-medium">Risk Mitigation:</span> Comprehensive frameworks for cross-border projects</span>
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Infrastructure Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* PPP Advisory */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Public-Private Partnership Advisory</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Guidance on BOT, BOOT, DBFO and other PPP models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Government agency negotiation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Alignment with international best practices</span>
                  </li>
                </ul>
              </div>
  
              {/* Project Structuring */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                 
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Project Structuring & Feasibility</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Technical and financial project design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Market feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Governance and operational models</span>
                  </li>
                </ul>
              </div>
  
              {/* DFI Readiness */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">DFI Readiness & ESG Integration</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Investment proposal preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">ESG compliance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Alignment with UN Sustainable Development Goals</span>
                  </li>
                </ul>
              </div>
  
              {/* Risk Management */}
              <div className="bg-gray-50 p-8 rounded-xl border border-secondary">
                <div className="flex items-center mb-4">
                  
                  <h3 className="ml-3 text-xl font-bold text-gray-900">Risk Management & Mitigation</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Political and economic risk analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Financial stress-testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="ml-2">Cross-border dispute resolution frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Africa Map Image */}
      

      {/* UAE Advantages */}
      <div className="order-2 lg:order-2">
        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            UAE: Africa's Strategic Infrastructure Partner
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                <CheckCircleIcon  className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Capital Availability</h4>
                <p className="text-gray-600">Sovereign wealth funds and private investors actively seeking African infrastructure projects</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                <CheckCircleIcon  className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Project Expertise</h4>
                <p className="text-gray-600">Proven experience delivering large-scale projects in challenging environments</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Government Relations</h4>
                <p className="text-gray-600">Strong diplomatic and trade ties that facilitate faster project approvals</p>
              </div>
            </li>
          </ul>
        </div>

        
      </div>
      <div className="order-1 lg:order-1">
        <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
          <img 
            src="/assets/mega.jpg" 
            alt="Africa Infrastructure Opportunities Map" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end p-6">
            <span className="text-white font-medium text-lg">Key Infrastructure Sectors Across Africa</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  
      {/* Our Process */}
<section className="py-5 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our 5-Step Project Development Process</h2>
    
    <div className="relative">
      {/* Progress line */}
      <div className="hidden md:block absolute left-0 right-0 top-8 h-1 bg-gray-200"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            
            title: "Project Scoping",
            desc: "Define vision, stakeholders and objectives. We align your project with national and regional development goals",
            details: [
              "Needs assessment",
              "Stakeholder mapping",
              "Project parameters"
            ]
          },
          { 
            
            title: "Feasibility Analysis",
            desc: "Market and financial viability studies to ensure project success. We make sure your project is bankable",
            details: [
              "Technical feasibility",
              "Financial modeling",
              "Risk assessment"
            ]
          },
          { 
           
            title: "PPP Structuring",
            desc: "Contract and legal framework design that fits your business and project needs to facilitate investment",
            details: [
              "Model selection",
              "Term sheet drafting",
              "Compliance checks"
            ]
          },
          { 
            
            title: "Financing Strategy",
            desc: "DFI and investor engagement that ensures bankability and sustainability for growth and development",
            details: [
              "Bankability preparation",
              "Investor pitching",
              "Deal structuring"
            ]
          },
          { 
            
            title: "Implementation",
            desc: "Governance and project oversight. We ensure successful delivery and monitoring for sustainability",
            details: [
              "Performance monitoring",
              "Stakeholder reporting",
              "Dispute resolution"
            ]
          },
          {
            title: "Impact Evaluation",
            desc: "Assessing project outcomes and sustainability to inform future projects and policy",
            details: [
              "Social and environmental impact",
              "Economic benefits analysis",
              "Lessons learned documentation"
            ]
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
              <p className="text-gray-600 text-sm mb-4 text-center">{step.desc}</p>
              
              <div className="hidden group-hover:block">
                <ul className="space-y-2 text-sm text-gray-600">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="ml-2">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ScaleIcon className="h-8 w-8 text-secondary" />,
                  title: "PPP Track Record",
                  desc: "Successful projects in multiple African countries"
                },
                {
                  icon: <LinkIcon className="h-8 w-8 text-secondary" />,
                  title: "Institutional Networks",
                  desc: "Direct access to UAE and African decision-makers"
                },
                {
                  icon: <SparklesIcon className="h-8 w-8 text-secondary" />,
                  title: "ESG Integration",
                  desc: "SDG-aligned projects attract impact funding"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Develop Transformational Infrastructure?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our Africa-UAE infrastructure specialists will guide your project from concept to completion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/book"
                className="flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary-light transition-colors"
              >
                Schedule Infrastructure Consultation
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Request Project Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }