import { useEffect, useState } from 'react';
import { supabase } from '../library/supabaseClient';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import { CalendarIcon } from '@heroicons/react/24/outline';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Basic validation
        if (!formData.name || !formData.email) {
            setError('Name and email are required');
            setIsSubmitting(false);
            return;
        }

        try {
            const { data, error: supabaseError } = await supabase
                .from('contact_messages')
                .insert([{
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    created_at: new Date().toISOString()
                }])
                .select();

            if (supabaseError) throw supabaseError;

            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

        } catch (err) {
            console.error('Submission error:', err);
            setError(err.message || 'Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone: value
        });
    };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#global-lines)" />
            <pattern id="global-lines" patternUnits="userSpaceOnUse" width="40" height="40">
              <path d="M0,40 L40,0 M-10,10 L10,-10 M30,50 L50,30" stroke="#002366" strokeWidth="0.5" />
            </pattern>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach out to our Africa-UAE advisory team for personalized support.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPinIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">UAE Office</h3>
                  <p className="text-gray-600">Meydan Grandstand, 6th floor.</p>
                  <p className="text-gray-600">Meydan Road, Nad Al, Sheba, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex">
                <EnvelopeIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <a href="mailto:contact@crglobaladvisory.com" className="text-gray-600 hover:text-primary">
                    info@crconsultants.com
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <PhoneIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <a href="tel:+971XXXXXXXXX" className="text-gray-600 hover:text-primary">
                    +971 123 456 7890
                  </a>
                </div>
              </div>

              
              <div className="flex">
                <ClockIcon className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">Mon–Fri: 9:00 AM – 6:00 PM (UAE)</p>
                </div>
              </div>
            </div>
          </div>

    
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        
                        {submitSuccess && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}
                        
                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                <p className="text-red-800">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <PhoneInput
                                    international
                                    defaultCountry="AE"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    className="mt-1 border border-gray-300 rounded-md shadow-sm focus-within:ring-primary focus-within:border-primary"
                                    inputClassName="w-full py-2 px-3 focus:outline-none"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                                    Service Interested In
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                >
                                    <option value="">Select a service</option>
                                    <option value="Business Strategy">Business Strategy</option>
                                    <option value="Trade Facilitation">Trade Facilitation</option>
                                    <option value="Immigration">Immigration</option>
                                    <option value="Legal">Legal</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                                        isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-primary-dark'
                                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <EnvelopeIcon className="h-5 w-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


      {/* Final CTA */}
      <section className="bg-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Growth Journey Starts Here</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Book a consultation with our advisory team or connect instantly via WhatsApp for faster response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-2" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
