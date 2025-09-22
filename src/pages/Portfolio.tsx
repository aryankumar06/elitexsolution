import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Palette, Gamepad2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Fitness Tracking App',
      category: 'Android Development',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Native Android app for fitness tracking with workout plans, progress monitoring, and social features. Built with Kotlin and Firebase.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kotlin', 'Firebase', 'Material Design', 'Room Database'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Brand Identity System',
      category: 'UI/UX Design',
      icon: <Palette className="h-6 w-6" />,
      description: 'Complete brand identity and design system for a tech startup, including logo design, color palette, typography, and UI components.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe Creative Suite', 'Design Systems', 'Prototyping'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Space Adventure Game',
      category: 'Game Development',
      icon: <Gamepad2 className="h-6 w-6" />,
      description: '2D space adventure game with multiple levels, power-ups, and engaging gameplay mechanics. Built with Unity and C#.',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Unity', 'C#', 'Photoshop', 'Game Analytics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real Estate Platform',
      category: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Modern real estate platform with property listings, virtual tours, and agent management system. Features advanced search and filtering.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Mapbox'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Food Delivery App',
      category: 'Android Development',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Complete food delivery solution with customer app, restaurant dashboard, and delivery tracking. Real-time order updates and payment integration.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Google Maps API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Development': return 'text-blue-400 bg-blue-400/20';
      case 'Android Development': return 'text-green-400 bg-green-400/20';
      case 'UI/UX Design': return 'text-purple-400 bg-purple-400/20';
      case 'Game Development': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

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
              Our{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 md:h-44 lg:h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                        {project.icon}
                        <span>{project.category}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-1.5 py-0.5 md:px-2 md:py-1 bg-white/10 text-gray-300 text-[10px] md:text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2 md:space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-3 py-2 md:px-4 md:py-2 rounded-lg text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="px-3 py-2 md:px-4 md:py-2 border border-gray-600 hover:border-red-500 rounded-lg text-gray-300 hover:text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">200+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;