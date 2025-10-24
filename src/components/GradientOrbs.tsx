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
          background: 'radial-gradient(closest-side, rgba(255,0,64,0.25), transparent)',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(0,217,255,0.22), transparent)',
          willChange: 'transform, opacity',
          backfaceVisibility: 'hidden'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25, duration: 1, delay: 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </div>
  );
};

export default GradientOrbs;


