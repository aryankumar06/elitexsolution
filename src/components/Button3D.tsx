import React from 'react';
import { motion } from 'framer-motion';
import Tilt3D from './Tilt3D';
import clsx from 'clsx';

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  iconOnly?: boolean;
}

const sizeClasses: Record<NonNullable<Button3DProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const iconSizeClasses: Record<NonNullable<Button3DProps['size']>, string> = {
  sm: 'w-9 h-9',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const baseVariantClasses = {
  primary: 'text-white bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 shadow-glow-sm hover:shadow-glow-md',
  secondary: 'text-white bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700',
  outline: 'text-gray-200 border-2 border-white/20 hover:border-red-500/80 bg-white/5 backdrop-blur-md hover:bg-white/10',
} as const;

const Button3D: React.FC<Button3DProps> = ({ as = 'button', href, className = '', size = 'sm', variant = 'primary', iconOnly = false, children, ...rest }) => {
  const isDisabled = (rest as any)?.disabled;

  const computedVariant = (() => {
    if (variant !== 'outline') return baseVariantClasses[variant];
    // Outline: if iconOnly, make it truly circular without tile background
    return iconOnly
      ? 'text-gray-200 border border-white/15 hover:border-red-500/70 bg-transparent'
      : baseVariantClasses.outline;
  })();

  const base = (
    <motion.div
      whileTap={{ scale: isDisabled ? 1 : 0.98, y: isDisabled ? 0 : 1 }}
      className={clsx(
        'relative inline-flex items-center justify-center gap-2 select-none font-semibold',
        iconOnly ? iconSizeClasses[size] : sizeClasses[size],
        iconOnly ? 'rounded-full' : 'rounded-xl',
        computedVariant,
        'shadow-[0_8px_0_0_rgba(0,0,0,0.4)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.4)]',
        'transition-all duration-300 ease-out',
        'hover:brightness-110',
        isDisabled && 'opacity-60 cursor-not-allowed pointer-events-none',
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant !== 'outline' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-inherit"
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.15), rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15))',
            maskImage: 'radial-gradient(120px 120px at var(--mx,50%) var(--my,0%), black, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(120px 120px at var(--mx,50%) var(--my,0%), black, transparent 60%)',
            mixBlendMode: 'screen',
          }}
        />
      )}
    </motion.div>
  );

  const content = <Tilt3D hoverScale={isDisabled ? 1 : 1.03}>{base}</Tilt3D>;

  if (as === 'a' && href) {
    return (
      <a href={href} className="inline-block no-underline">
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...rest} className="bg-transparent border-0 p-0">
      {content}
    </button>
  );
};

export default Button3D;
