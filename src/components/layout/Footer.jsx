import { Link } from 'react-router-dom';
import { 
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOfficeIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { LinkedinIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons';

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Consultation", path: "/book" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    { name: "Market Expansion", path: "/services/business-strategy" },
    { name: "Legal Consultancy", path: "/services/legal" },
    { name: "Trade Facilitation", path: "/services/cross-border" },
    { name: "Leadership Development", path: "/services/leadership" },
    { name: "Immigration & Residency", path: "/services/immigration" },
    { name: "Infrastructure & PPP", path: "/services/infrastructure" }
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                CR
              </div>
              <span className="ml-3 text-xl font-bold">
                CR Global Advisory
              </span>
            </div>
            <p className="text-gray-300">
              Bridging Africa & UAE through strategic business solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0 text-secondary" />
                <div className="ml-3">
                  <h4 className="font-semibold">Office:</h4>
                  <p className="text-gray-300">UAE – Business Bay, Dubai</p>
                  <p className="text-gray-300">Kenya – Nairobi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href="mailto:contact@crglobaladvisory.com" className="ml-3 text-gray-300 hover:text-white">
                  info@crconsultants.ae
                </a>
              </div>
              
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href="tel:+971-XXX-XXX-XXX" className="ml-3 text-gray-300 hover:text-white">
                  +971-123-456-789
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-secondary pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2 text-secondary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-secondary pb-2">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <BuildingOfficeIcon className="h-4 w-4 mr-2 text-secondary" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b border-secondary pb-2">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a 
                href="https://wa.me/yournumber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-secondary-light transition-colors"
              >
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
                Chat with us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CR Global Advisory. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;