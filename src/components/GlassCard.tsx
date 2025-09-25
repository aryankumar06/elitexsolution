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
      whileHover={hover ? { y: -3, scale: 1.01 } : undefined}
      className={clsx(
        'backdrop-blur-md md:backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5',
        'border border-white/15 md:border-white/20 rounded-lg md:rounded-xl shadow-lg md:shadow-xl',
        'hover:border-red-500/50 transition-all duration-300',
        className
      )}
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );

  if (!tilt) return card;

  return <Tilt3D>{card}</Tilt3D>;
};

export default GlassCard;