import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingLogo from './GlowingLogo';

interface LogoIntroProps {
  onComplete: () => void;
}

const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // Immediately start landing page
    }, 3500); // Show intro for 3.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    showIntro ? (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Radial gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-red-900/30 via-black to-black"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            
            {/* Animated particles */}
            {Array.from({ length: 30 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200]
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}

            {/* Expanding circles */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute border border-red-500/20 rounded-full"
                  initial={{ width: 0, height: 0 }}
                  animate={{ 
                    width: `${i * 300}px`, 
                    height: `${i * 300}px`,
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Logo Container */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-red-500/50 via-pink-500/50 to-purple-500/50 rounded-full" />
            </motion.div>

            {/* Main Logo */}
            <motion.div
              initial={{ filter: "brightness(0.5)" }}
              animate={{ filter: "brightness(1.2)" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <GlowingLogo size="xl" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <p className="text-gray-300 text-lg font-light tracking-wider">
                Crafting Digital Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Loading indicator */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-red-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.div
              className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"
              initial={{ top: "100%" }}
              animate={{ top: "-2px" }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: 2
              }}
            />
          </motion.div>
      </div>
    ) : null
  );
};

export default LogoIntro;