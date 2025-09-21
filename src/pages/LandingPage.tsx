import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Palette, Gamepad2, Star, Award, Users, Zap } from 'lucide-react';
import GlowingLogo from '../components/GlowingLogo';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import Navigation from '../components/Navigation';

const LandingPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks like React, Next.js, and Node.js for scalable solutions.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Android Development',
      description: 'Native Android apps with Kotlin and Java, delivering seamless mobile experiences for your users.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers with modern design principles.'
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: 'Game Development',
      description: 'Engaging games for mobile and web platforms using Unity, Unreal Engine, and custom frameworks.'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      rating: 5,
      review: 'EliteX Solutions delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'StartupXYZ',
      rating: 5,
      review: 'The mobile app they developed for us has been a game-changer. Professional, responsive, and delivered on time.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      rating: 5,
      review: 'Their UI/UX design transformed our brand identity. The team understood our vision perfectly and brought it to life.',
      avatar: '👩‍🎨'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <GlowingLogo size="xl" className="mb-8" />
            
            <motion.h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Transforming Ideas into{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Premium tech solutions for web development, mobile apps, UI/UX design, and game development. 
              We craft digital experiences that drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                to="/services"
                className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore Services
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-600 hover:border-red-500 transition-colors duration-300"
              >
                Get Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute top-1/4 left-10 opacity-30">
          <motion.div
            animate={{ rotate: 360, y: [0, -20, 0] }}
            transition={{ rotate: { duration: 20, repeat: Infinity }, y: { duration: 4, repeat: Infinity } }}
            className="w-20 h-20 border-2 border-red-500 rounded-lg"
          />
        </div>
        
        <div className="absolute bottom-1/4 right-10 opacity-30">
          <motion.div
            animate={{ rotate: -360, y: [0, 20, 0] }}
            transition={{ rotate: { duration: 15, repeat: Infinity }, y: { duration: 3, repeat: Infinity } }}
            className="w-16 h-16 border-2 border-blue-500 rounded-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive tech solutions designed to elevate your business with cutting-edge technology and innovative approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="p-6 h-full">
                  <div className="text-red-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-blue-900/10" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Client{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Reviews
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with EliteX Solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{review.avatar}</span>
                      <div>
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <p className="text-sm text-gray-400">{review.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 italic">
                      "{review.review}"
                    </blockquote>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  EliteX?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with creative innovation to deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">Award-winning design & development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Dedicated project management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-300">Fast delivery & ongoing support</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                      🚀
                    </div>
                    <h3 className="text-xl font-semibold text-white">Ready to Start?</h3>
                    <p className="text-red-400">Let's discuss your project</p>
                  </div>
                  
                  <div className="text-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Get Free Consultation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-blue-900/20" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Build Something{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your vision into reality with our expert team. Let's create digital solutions that drive your business forward.
            </p>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <GlowingLogo size="sm" />
            <p className="text-gray-400 mt-4 md:mt-0">
              © 2025 EliteX Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;