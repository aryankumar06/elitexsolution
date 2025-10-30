import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Gamepad2, Check, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import LiquidGlow from '../components/LiquidGlow';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and scalable architecture.',
      features: [
        'React, Next.js, Vue.js Development',
        'Node.js, Express Backend',
        'Database Design & Integration',
        'API Development & Integration',
        'E-commerce Solutions',
        'CMS Development'
      ],
      pricing: {
        basic: { price: '$120', features: ['5 Pages', 'Responsive Design', 'Basic SEO', '3 Months Support'] },
        advanced: { price: '$200', features: ['10 Pages', 'Custom CMS', 'Advanced SEO', 'E-commerce', '6 Months Support'] },
        pro: { price: '$400', features: ['Unlimited Pages', 'Full Stack App', 'Advanced Features', 'API Integration', '12 Months Support'] }
      }
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Android Development',
      description: 'Native Android applications with modern UI/UX and optimal performance.',
      features: [
        'Native Android Development',
        'Flutter Programming',
        'Material Design Implementation',
        'Firebase Integration',
        'Play Store Optimization',
        'Deploy on Playstore & App store',
        'App Maintenance & Updates'
      ],
      pricing: {
        basic: { price: '$200', features: ['Basic App', '5 Screens', 'Local Storage', '3 Months Support'] },
        advanced: { price: '$400', features: ['Advanced Features', '10 Screens', 'API Integration', 'Push Notifications', '6 Months Support'] },
        pro: { price: '$600', features: ['Complex App', 'Unlimited Screens', 'Advanced Features', 'Backend Integration', '12 Months Support'] }
      }
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive conversions.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design',
        'Usability Testing',
        'Design System Creation'
      ],
      pricing: {
        basic: { price: '$100', features: ['5 Screens', 'Basic Wireframes', 'Visual Design', '2 Revisions'] },
        advanced: { price: '$250', features: ['10 Screens', 'Interactive Prototype', 'User Testing', '4 Revisions'] },
        pro: { price: '$400', features: ['Unlimited Screens', 'Complete Design System', 'Advanced Prototyping', 'Unlimited Revisions'] }
      }
    },
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      title: 'Game Development',
      description: 'Engaging games for mobile and web platforms with immersive gameplay.',
      features: [
        'Unity & Unreal Engine',
        '2D & 3D Game Development',
        'Mobile Game Optimization',
        'Multiplayer Integration',
        'In-App Purchases',
        'Game Analytics'
      ],
      pricing: {
        basic: { price: '$1500', features: ['Simple 2D Game', '5 Levels', 'Basic Mechanics', '3 Months Support'] },
        advanced: { price: '$2500', features: ['Advanced 2D/3D Game', '15 Levels', 'Complex Mechanics', 'Multiplayer', '6 Months Support'] },
        pro: { price: '$4000', features: ['Premium Game', 'Unlimited Content', 'Advanced Features', 'Ad Mob', '12 Months Support'] }
      }
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: 'App Testing & Store Deployment',
      description: 'Comprehensive testing and deployment services for all major app stores.',
      features: [
        'Quality Assurance Testing',
        'Bug Fixing & Optimization',
        'Play Store Deployment',
        'App Store Deployment',
        'Store Listing Optimization',
        'Post-Launch Support'
      ],
      pricing: {
        basic: { price: '$150', features: ['Basic Testing', 'Single Store Deploy', 'Bug Report', '1 Month Support'] },
        advanced: { price: '$300', features: ['Full Testing Suite', 'Multi-Store Deploy', 'ASO Optimization', '3 Months Support'] },
        pro: { price: '$500', features: ['Complete QA', 'All Stores Deploy', 'Premium ASO', 'Ongoing Maintenance', '6 Months Support'] }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
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
            <LiquidGlow color="#a855f7" size={200} />
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Our{' '}
              <span className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive tech solutions designed to transform your business with cutting-edge technology and innovative approaches.
            </p>
          </motion.div>

          {/* Services */}
          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  {/* Service Info */}
                  <div className="max-w-4xl mx-auto text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-3 md:mb-6">
                      <div className="text-red-400 mr-4">
                        {React.cloneElement(service.icon as React.ReactElement, { className: 'h-8 w-8 md:h-12 md:w-12' })}
                      </div>
                      <h2 className="text-xl md:text-4xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 md:h-5 md:w-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <GlassCard key={plan}>
                        <div className="p-4 md:p-5 lg:p-6 flex flex-col h-full">
                          <div className="mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white capitalize">
                                {plan} Plan
                              </h3>
                              <div className={`px-2 py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap ${
                                plan === 'basic' ? 'bg-blue-500/20 text-blue-400' :
                                plan === 'advanced' ? 'bg-purple-500/20 text-purple-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {plan === 'pro' ? 'Popular' : plan === 'advanced' ? 'Best' : 'Starter'}
                              </div>
                            </div>
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-red-400">{details.price}</p>
                          </div>

                          <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 flex-grow">
                            {details.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-[11px] md:text-sm text-gray-300">
                                <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="relative">
                            <LiquidGlow color="#ef4444" size={160} />
                            <Link to={`/contact?service=${encodeURIComponent(service.title)}&plan=${plan}`} className="relative z-10 w-full">
                              <Button3D size="sm" className="w-full">
                                Choose {plan}
                                <ArrowRight className="h-4 w-4" />
                              </Button3D>
                            </Link>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Need a{' '}
              <span className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Custom Solution?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution for your business.
            </p>
            <Link to="/contact" className="inline-block">
              <Button3D size="sm">
                Get Custom Quote
                <ArrowRight className="h-5 w-5" />
              </Button3D>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;