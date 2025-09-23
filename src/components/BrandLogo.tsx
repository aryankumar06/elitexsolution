import React from 'react';
import logoPng from '../saman/logo-square-transparent.png';

interface BrandLogoProps {
  className?: string;
  size?: number; // pixel height
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 100 }) => {
  return (
    <div className={`flex items-center ${className}`} style={{ height: size }}>
      <img
        src={logoPng}
        alt="EliteX Solutions"
        height={size}
        width={Math.round(size * 4)}
        loading="eager"
        className="h-full w-auto select-none"
      />
    </div>
  );
};

export default BrandLogo;


