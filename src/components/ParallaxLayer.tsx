import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // positive moves slower than scroll, negative moves opposite
  className?: string;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, speed = 0.2, className = '' }) => {
  const { scrollY } = useScroll();
  const yRaw = useTransform(scrollY, [0, 1000], [0, (speed * 1000) | 0]);
  
  // Add spring physics for ultra-smooth parallax
  const y = useSpring(yRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <motion.div 
      className={className} 
      style={{ 
        y,
        willChange: 'transform',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
