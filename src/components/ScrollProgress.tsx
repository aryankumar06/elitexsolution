import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Add spring physics for ultra-smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <motion.div
        className="h-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;


