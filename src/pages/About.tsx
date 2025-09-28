import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import LiquidGlow from '../components/LiquidGlow';
import Footer from '../components/Footer';
import profil1 from "../saman/profile22.jpeg";
import profil2 from "../saman/utsav.jpg";
import profil3 from "../saman/akshay.jpg";
import profil4 from "../saman/sourav.jpg";
import profil5 from "../saman/harshit.jpg";
import profil6 from "../saman/vishal chaurasia.jpg";
import profil7 from "../saman/Manish Kumar.jpg";

const team = [
  { name: 'Aaryan Kumar', role: 'Founder & CTO  ',skill:"(Lead Web Developer)", photo: profil1 },
  { name: 'Utsav Rana', role: 'Co-founder & CTO',skill:"(Senior Mobile Developer)", photo: profil2 },
  { name: 'Sourav Jangid', role: 'Lead Software Engineer & CIO', photo: profil4 },
  { name: 'Harshit Sharma', role: 'Senior Frontend Developer', photo: profil5},
  { name: 'Akshay Pundir ', role: 'Design Lead', photo: profil3 },
  { name: 'vishal chaurasia', role: 'Digital Marketing Lead', photo: profil6},
  { name: 'Manish Kuma', role: 'Cyber Security Expert', photo: profil7},
  
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            className="relative text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <LiquidGlow color="#60a5fa" size={220} />
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About{' '}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
              We build premium digital products with a focus on performance, design, and measurable business outcomes.
            </p>
          </motion.div>

          {/* Founder Story */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
            <GlassCard>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4 text-white">Our Founder Story</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  EliteX Solutions started with a simple belief: great technology should feel effortless. Our founders began as
                  engineers and designers working on side projects for startups. The passion turned into a studio delivering
                  high-impact apps, modern websites, and delightful interfaces for clients across the globe.
                </p>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4 text-white">Our Mission</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Our mission is to transform ideas into performant, accessible, and visually striking products. We blend
                  engineering excellence with minimal, modern design to craft experiences that users love and businesses trust.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Team */}
          <motion.div
            className="relative text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <LiquidGlow color="#22d3ee" size={200} />
            <h2 className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Our Elite Team</h2>
            <p className="text-gray-400 text-sm md:text-base">Small, focused, and deeply committed to quality.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <GlassCard key={member.name}>
                <div className="p-5 md:p-6 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-3 md:mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.skill}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;


