import React from 'react';
import { motion } from 'framer-motion';

interface GlowingLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlowingLogo: React.FC<GlowingLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-5xl md:text-8xl'
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} font-bold ${className} relative`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Animated glow layers - GPU accelerated */}
      <motion.span
        className="absolute inset-0 blur-xl pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          background: 'radial-gradient(ellipse at center, #ff004060 0%, transparent 70%)',
          willChange: 'opacity',
        }}
        aria-hidden
      />
      <motion.span
        className="absolute inset-0 blur-xl pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ 
          background: 'radial-gradient(ellipse at 70% center, #00d9ff50 0%, transparent 70%)',
          willChange: 'opacity',
        }}
        aria-hidden
      />
      
      {/* Text content */}
      <span className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
        elite<i>X</i>
      </span>
      <span className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        solutions
      </span>
    </motion.div>
  );
};

export default GlowingLogo;