import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  // Generate various sized stars
  const stars = Array.from({ length: 100 }, (_, i) => {
    const size = Math.random();
    let starSize, starColor, opacity, glowSize;
    
    if (size > 0.95) {
      // Large bright stars
      starSize = Math.random() * 3 + 2;
      starColor = ['#ffffff', '#a8c5ff', '#ffa94d'][Math.floor(Math.random() * 3)];
      opacity = 0.9;
      glowSize = 20;
    } else if (size > 0.85) {
      // Medium stars
      starSize = Math.random() * 2 + 1.5;
      starColor = ['#ffffff', '#a8c5ff'][Math.floor(Math.random() * 2)];
      opacity = 0.7;
      glowSize = 12;
    } else {
      // Small stars
      starSize = Math.random() * 1.5 + 0.5;
      starColor = '#ffffff';
      opacity = Math.random() * 0.5 + 0.3;
      glowSize = 4;
    }
    
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: starSize,
      color: starColor,
      opacity: opacity,
      glowSize: glowSize,
      twinkleDuration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
    };
  });


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.glowSize}px ${star.color}`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            x: [-100, window.innerWidth + 100],
          }}
          transition={{
            opacity: {
              duration: star.twinkleDuration,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay,
            },
            x: {
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: star.delay,
            }
          }}
        />
      ))}

      {/* Shooting Stars */}
      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: '20%',
          left: '-10%',
          boxShadow: '0 0 4px #fff, 0 0 8px #a8c5ff',
        }}
        animate={{
          x: ['0vw', '120vw'],
          y: ['0vh', '40vh'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 20,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: '60%',
          left: '-10%',
          boxShadow: '0 0 4px #fff, 0 0 8px #ffa94d',
        }}
        animate={{
          x: ['0vw', '120vw'],
          y: ['0vh', '30vh'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 35,
          ease: "easeOut",
          delay: 8,
        }}
      />
    </div>
  );
};

export default ParticleBackground;