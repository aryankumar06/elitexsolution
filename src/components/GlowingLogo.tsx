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
      className={`${sizeClasses[size]} font-bold ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.span
        className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent"
        animate={{
          textShadow: [
            '0 0 10px #ff004080',
            '0 0 20px #ff004060',
            '0 0 30px #ff004040',
            '0 0 20px #ff004060',
            '0 0 10px #ff004080'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          filter: 'drop-shadow(0 0 10px #ff0040)',
        }}
      >
        eliteX
      </motion.span>
      <motion.span
        className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        animate={{
          textShadow: [
            '0 0 10px #00d9ff80',
            '0 0 20px #00d9ff60',
            '0 0 30px #00d9ff40',
            '0 0 20px #00d9ff60',
            '0 0 10px #00d9ff80'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{
          filter: 'drop-shadow(0 0 10px #00d9ff)',
        }}
      >
        solutions
      </motion.span>
    </motion.div>
  );
};

export default GlowingLogo;