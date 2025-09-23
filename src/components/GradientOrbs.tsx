import React from 'react';
import { motion } from 'framer-motion';

interface GradientOrbsProps {
  className?: string;
}

const GradientOrbs: React.FC<GradientOrbsProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 hidden md:block ${className}`}>
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(255,0,64,0.25), transparent)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(0,217,255,0.22), transparent)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default GradientOrbs;


