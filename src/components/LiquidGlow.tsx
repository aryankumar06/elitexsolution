import React from 'react';
import { motion } from 'framer-motion';

interface LiquidGlowProps {
  color?: string; // hex like #ef4444
  size?: number; // px
  className?: string;
  active?: boolean;
}

const LiquidGlow: React.FC<LiquidGlowProps> = ({ color = '#ef4444', size = 160, className = '', active = true }) => {
  const rgba = (hex: string, alpha: number) => {
    const c = hex.replace('#', '');
    const bigint = parseInt(c.length === 3 ? c.split('').map((ch) => ch + ch).join('') : c, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.span
      aria-hidden
      initial={{ opacity: 0.0, scale: 0.9 }}
      animate={{ opacity: active ? 0.5 : 0.0, scale: active ? [1, 1.07, 1] : 0.9 }}
      transition={{ duration: 2.2, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
      className={`absolute inset-0 -z-10 rounded-[24px] blur-2xl ${className}`}
      style={{
        background: `radial-gradient(closest-side, ${rgba(color, 0.45)}, ${rgba(color, 0.22)}, transparent)`,
        filter: `drop-shadow(0 0 24px ${rgba(color, 0.45)})`,
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }}
    />
  );
};

export default LiquidGlow;


