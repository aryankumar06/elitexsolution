import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Tilt3D from './Tilt3D';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  tilt?: boolean; // enable 3D tilt by default
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  tilt = true,
}) => {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={clsx(
        'group relative overflow-hidden',
        'backdrop-blur-xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04]',
        'border border-white/20 rounded-2xl shadow-glass',
        'hover:border-red-500/60 hover:shadow-glow-md transition-all duration-500',
        'before:absolute before:inset-0 before:rounded-2xl',
        'before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0',
        'hover:before:opacity-100 before:transition-opacity before:duration-500',
        className
      )}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );

  if (!tilt) return card;

  return <Tilt3D>{card}</Tilt3D>;
};

export default GlassCard;