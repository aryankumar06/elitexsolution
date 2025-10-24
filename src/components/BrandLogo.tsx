import React from 'react';
import logoPng from '../saman/logo-square-transparent.png';

interface BrandLogoProps {
  className?: string;
  size?: number; // pixel height
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoPng}
        alt="EliteX Solutions"
        loading="eager"
        className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto select-none transition-all duration-300"
        style={size ? { height: size } : undefined}
      />
    </div>
  );
};

export default BrandLogo;


