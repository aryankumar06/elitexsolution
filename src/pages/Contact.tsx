import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
//import emailjs from 'emailjs-com';
import ParticleBackground from '../components/ParticleBackground';


const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: searchParams.get('service') || '',
    plan: searchParams.get('plan') || '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Web Development',
    'Android Development',
    'UI/UX Design',
    'Game Development',
    'Custom Solution'
  ];

  const plans = ['Basic', 'Advanced', 'Pro', 'Custom'];
  const budgets = ['$400 - $600', '$700 - $1,000', '$1,000 - $2,000', '$25,000+'];
  const timelines = ['1-2 weeks', '1 month', '2-3 months', '3+ months'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-red flex items-center justify-center">
        <ParticleBackground />
        <Navigation />
        
        <motion.div
          className="text-center max-w-2xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Thank You!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            We've received your message and will get back to you within 24 hours. 
            Our team is excited to work with you on your project!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8"
              >
                <GlassCard>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2.5 md:p-3 bg-red-500/20 rounded-lg">
                        <Mail className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white">Email Us</h3>
                        <p className="text-sm md:text-base text-gray-400">team@elitexsolutions.com</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2.5 md:p-3 bg-blue-500/20 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white">Call Us</h3>
                        <p className="text-sm md:text-base text-gray-400">+91 9310479532 / +91 93546 30932</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="p-5 md:p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2.5 md:p-3 bg-green-500/20 rounded-lg">
                        <MapPin className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-white">Visit Us</h3>
                        <p className="text-sm md:text-base text-gray-400">Near Signature street govindpuram,
                          ghaziabad,U.P,India </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <div className="text-center">
                  <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Business Hours</h3>
                  <div className="space-y-1.5 md:space-y-2 text-gray-400 text-sm md:text-base">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <GlassCard>
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Start Your Project</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Service *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            required
                          >
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service} value={service} className="bg-gray-800">
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Plan
                          </label>
                          <select
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                          >
                            <option value="">Select a plan</option>
                            {plans.map(plan => (
                              <option key={plan} value={plan} className="bg-gray-800">
                                {plan}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                          >
                            <option value="">Select budget range</option>
                            {budgets.map(budget => (
                              <option key={budget} value={budget} className="bg-gray-800">
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map(timeline => (
                              <option key={timeline} value={timeline} className="bg-gray-800">
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 md:px-8 md:py-4 rounded-lg text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;