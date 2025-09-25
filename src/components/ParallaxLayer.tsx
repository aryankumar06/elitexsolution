import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // positive moves slower than scroll, negative moves opposite
  className?: string;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ children, speed = 0.2, className = '' }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, (speed * 1000) | 0]);
  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
