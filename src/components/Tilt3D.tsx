import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import clsx from 'clsx';

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  maxTiltDeg?: number; // maximum tilt in degrees
  hoverScale?: number; // scale on hover
  glare?: boolean; // show a glare highlight layer
}

const Tilt3D: React.FC<Tilt3DProps> = ({
  children,
  className = '',
  maxTiltDeg = 10,
  hoverScale = 1.02,
  glare = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotX = useSpring(
    useTransform(mouseY, (v) => v),
    { stiffness: 200, damping: 20 }
  );
  const rotY = useSpring(
    useTransform(mouseX, (v) => v),
    { stiffness: 200, damping: 20 }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const tiltX = (py - 0.5) * -2 * maxTiltDeg;
    const tiltY = (px - 0.5) * 2 * maxTiltDeg;
    mouseX.set(tiltY);
    mouseY.set(tiltX);

    // update glare position
    el.style.setProperty('--mx', `${Math.round(e.clientX - rect.left)}px`);
    el.style.setProperty('--my', `${Math.round(e.clientY - rect.top)}px`);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => setIsHover(true);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotX,
        rotateY: rotY,
      }}
      animate={{ scale: isHover ? hoverScale : 1 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={clsx('relative', className)}
    >
      {/* content layer */}
      <div style={{ transform: 'translateZ(0.01px)' }}>{children}</div>

      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-inherit"
          style={{
            background:
              'radial-gradient(240px 240px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 60%)',
            mixBlendMode: 'screen',
          }}
        />
      )}
    </motion.div>
  );
};

export default Tilt3D;
