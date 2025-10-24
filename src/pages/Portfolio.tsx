import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Palette, Gamepad2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import LiquidGlow from '../components/LiquidGlow';
import GlassCard from '../components/GlassCard';
import ParticleBackground from '../components/ParticleBackground';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';
import port3 from "../saman/port3.png";
import port2 from "../saman/port2.png";
import port4 from "../saman/port4.png";
import port5 from "../saman/port5.png";
import port6 from "../saman/port6.png";
import port7 from "../saman/port7.png";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Devkamal Engineers Profile App',
      category: 'App Development',
      icon: <Smartphone className="h-6 w-6" />,
     
      description: "In this project, I will showcase all the products of the company. I will create multiple pages, including a profile page, location page, and customer support page. Additionally, I will implement an offline chatbot that allows users to type their queries and receive instant replies.",
       image: port4,
      technologies: ['Flutter', 'Ui design', 'Tailwind CSS'],
      liveUrl: 'perosnal project',
    
    },
    {
      title: 'Organic Food delivery website',
      category: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Organic Food Service is a food delivery application that allows users to order organic food online. It includes features for user registration, product browsing, cart management, and order processing.',
      image: port3,
      technologies: ['React.js', 'tailwind css', 'Razorpay', 'Vercel'],
      liveUrl: 'https://oraganoservice.vercel.app/',
       githubUrl: 'https://github.com/SouravJangid/OrganoService'
      
    },
    {
      title: 'Growsphere',
      category: 'UI/UX Design',
      icon: <Palette className="h-6 w-6" />,
      description: 'Developed high-fidelity mockups using a clean and modern design language. Focused on accessibility, color harmony, and micro-interactions for enhanced usability.',
      image: port2,
       technologies: ['Figma', 'Framer', 'Design Systems', 'Prototyping'],
      liveUrl: 'https://akshaypundir.framer.website/homvio-case-study',
     
    },
    {
      title: 'Naruto Ninja adventure',
      category: 'Game Development',
      icon: <Gamepad2 className="h-6 w-6" />,
      description: "a 2D pixel-style side-scrolling game based on the Naruto universe. Players can control ninja characters like Kakaxi, each with their own unique jutsu attacks, wall-running abilities, and special ultimate powers. The levels should feature iconic locations such as the Hidden Leaf Village, filled with rival ninjas.",
      image: port5,
      technologies: ['Phaser', 'C#', "WebGL shader" , 'Game Analytics'],
      liveUrl: 'https://mhkc2tnl.gambo.games/',
      githubUrl: '#'
    },
    {
      title: 'Idaho Clothing- E Commerce',
      category: 'Web Development',
      icon: <Code className="h-6 w-6" />,
      description: 'Idaho Clothing is a Jaipur-based premium ethnic and western wear fashion brand specializing in contemporary womens clothing. Operating as an online D2C (Direct-to-Consumer) e-commerce store, Idaho-O has established itself as a trendsetting fashion destination for women seeking elegance, comfort, and quality craftsmanship.',
      image:port7,
      technologies: ['PHP ', 'WordPress','WooCommerce backend','Shopify',],
      liveUrl: 'https://idaho-o.com/',
      githubUrl: '#'
    },
    {
      title: 'ASAP- Social Media Influencer app ',
      category: 'Android Development',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'ASAP – Connect with Top Brands Instantly ASAP makes influencer collaborations effortless. Whether you’re a creator, influencer, or brand ambassador — you can discover and connect with 1,000+ top brands in just a few taps.',
      image: port6,
      technologies: ['Kotlin', 'supabase', 'Socket.io', 'Email.js'],
      liveUrl: 'https://apps.apple.com/in/app/asap-request-pr-boxes-more/id6738424129',
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
            className="relative text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LiquidGlow color="#22d3ee" size={200} />
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
                      loading="lazy"
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
                    
                    <div className="relative flex space-x-2 md:space-x-3">
                      <LiquidGlow color="#ef4444" size={150} />
                      {project.liveUrl && project.liveUrl !== '#' ? (
                        <Button3D as="a" href={project.liveUrl} size="sm" className="flex-1 text-center">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button3D>
                      ) : (
                        <div className="flex-1 px-3 py-2 md:px-4 md:py-2 rounded-lg text-white text-xs md:text-sm font-medium flex items-center justify-center gap-2 bg-gray-700/60 cursor-not-allowed">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </div>
                      )}
                      <a
                        href={project.githubUrl && project.githubUrl !== '#' ? project.githubUrl : undefined}
                        target={project.githubUrl && project.githubUrl !== '#' ? '_blank' : undefined}
                        rel={project.githubUrl && project.githubUrl !== '#' ? 'noopener noreferrer' : undefined}
                        aria-disabled={(!project.githubUrl || project.githubUrl === '#') ? true : undefined}
                        className={`px-3 py-2 md:px-4 md:py-2 border rounded-lg text-gray-300 text-xs md:text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                          project.githubUrl && project.githubUrl !== '#'
                            ? 'border-gray-600 hover:border-red-500 hover:text-white'
                            : 'border-gray-700/60 cursor-not-allowed'
                        }`}
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
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">100+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">85+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">2+</div>
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
            <Button3D as="a" href="/contact" size="sm">
              Start Your Project
              <ExternalLink className="h-5 w-5" />
            </Button3D>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;