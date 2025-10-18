import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import LiquidGlow from '../components/LiquidGlow';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';
import emailjs from '@emailjs/browser';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


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
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [submitError , setSubmitError] = useState<string>('');

  // Auto-apply discount from URL param
  useEffect(() => {
    const discount = (searchParams.get('discount') || '').toUpperCase();
    if (discount === 'FIRST40') {
      setCoupon('FIRST40');
      setCouponApplied(true);
      setCouponError('');
    }
  }, [searchParams]);

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
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await sendEmail();
    
    setIsSubmitting(false);
    if(submitError === '') setIsSubmitted(true);
  };

  const sendEmail = async () => {
    if(formData.name === '' || formData.email === '' || formData.phone === '' || formData.service === '' || formData.message === ''){
      setSubmitError('Please fill all the fields!!');
      return;
    }

    try{
      const response = await emailjs.send(serviceID , templateID , formData , publicKey);
      if(response.status !== 200) throw new Error("Could not sent the email, please try again!!");
    }catch(err){
      console.log("Could not sent email!! : " , err);
      setSubmitError("Could not sent email !!");
      return;
    }
  }

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === 'FIRST40') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponApplied(false);
      setCouponError('Invalid code. Use FIRST40 for 40% off your first order.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-red flex items-center justify-center relative overflow-hidden">
        {/* Diwali Decorative Elements */}
        <div className="fixed top-10 left-10 text-4xl animate-pulse opacity-30">🪔</div>
        <div className="fixed top-20 right-20 text-3xl animate-pulse opacity-30">✨</div>
        <div className="fixed bottom-20 left-20 text-3xl animate-pulse opacity-30">🎆</div>
        <div className="fixed bottom-10 right-10 text-4xl animate-pulse opacity-30">🪔</div>
        
        <ParticleBackground />
        <Navigation />
        
        <motion.div
          className="text-center max-w-2xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/50">
            <Check className="h-10 w-10 text-white" />
          </div>
          <div className="text-4xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
            Thank You! 🪔
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            ✨ We've received your message and will get back to you within 24 hours. 
            Our team is excited to work with you on your project! ✨
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-transparent p-0 border-0"
          >
            <Button3D size="sm">Send Another Message</Button3D>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Diwali Decorative Elements */}
      <div className="fixed top-10 left-10 text-4xl animate-pulse opacity-30">🪔</div>
      <div className="fixed top-20 right-20 text-3xl animate-pulse opacity-30 animation-delay-300">✨</div>
      <div className="fixed bottom-20 left-20 text-3xl animate-pulse opacity-30 animation-delay-500">🎆</div>
      <div className="fixed bottom-10 right-10 text-4xl animate-pulse opacity-30 animation-delay-700">🪔</div>
      <div className="fixed top-1/2 left-5 text-2xl animate-pulse opacity-20">🎉</div>
      <div className="fixed top-1/3 right-10 text-2xl animate-pulse opacity-20 animation-delay-400">🎊</div>
      
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            className="relative text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LiquidGlow color="#22c55e" size={200} />
            <div className="inline-block mb-2">
              <span className="text-3xl md:text-4xl">🪔</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
              Get In{' '}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                Touch
              </span>
              {' '}🎉
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              ✨ Ready to transform your ideas into reality? Let's discuss your project and create something amazing together! ✨
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
                        <p className="text-sm md:text-base text-gray-400">+91 9310479532 and +91 93546 30932</p>
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
                        <p className="text-sm md:text-base text-gray-400">Near Signature street govindpuram - 201015,
                          ghaziabad,Uttar Pradesh, India </p>
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
                    <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent mb-4 md:mb-6">
                      🎊 Start Your Project 🎊
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Diwali Special Coupon */}
                      <div className="rounded-xl border-2 border-orange-500/40 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 shadow-lg shadow-orange-500/20">
                        <div className="text-orange-300 text-sm md:text-base">
                          <span className="text-2xl">🪔</span> <span className="font-bold text-yellow-300">Diwali Special: 40% OFF</span> on your first order with code <span className="font-mono text-yellow-300 font-bold">FIRST40</span>! ✨
                          {couponApplied && <span className="ml-2 text-green-400 font-semibold">✔ Applied!</span>}
                        </div>
                        <div className="flex items-stretch gap-2">
                          <input
                            type="text"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Enter FIRST40"
                            className="px-3 py-2 rounded-lg bg-white/5 border border-orange-400/30 text-white text-sm focus:outline-none focus:border-orange-400"
                          />
                          <button
                            type="button"
                            onClick={handleApplyCoupon}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/30"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                      {couponError && (
                        <div className="text-red-400 text-sm">{couponError}</div>
                      )}
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

                      <div className={`grid ${formData.plan === 'Custom' ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4 md:gap-6`}>
                        {formData.plan === 'Custom' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map(budget => (
                                <option key={budget} value={budget} className="bg-gray-800">
                                  {budget}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 md:px-4 md:py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors text-sm md:text-base"
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

                      <Button3D
                        type="submit"
                        disabled={isSubmitting}
                        size="sm"
                        className="w-full"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </Button3D>
                      {
                        submitError.length > 0 ? 
                          <div className='w-full text-center text-sm text-pink-600 py-4'>
                            {submitError}
                          </div>
                        : null
                      }
                    </form>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;