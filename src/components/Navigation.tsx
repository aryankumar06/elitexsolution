import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';
import Button3D from './Button3D';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const tabColorMap: Record<string, string> = {
    '/': '#ef4444',
    '/services': '#a855f7',
    '/portfolio': '#22d3ee',
    '/about': '#60a5fa',
    '/contact': '#22c55e',
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
    >
      {/* Glassy background layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-2xl" />
      
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent" />
      
      {/* Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-18">
            <Link to="/" aria-label="EliteX Home">
              <BrandLogo />
            </Link>

            {/* Animated tabs */}
            <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-4 overflow-x-auto md:overflow-visible whitespace-nowrap -mx-1 sm:-mx-2 px-1 sm:px-2 overscroll-x-contain scrollbar-hide">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative shrink-0 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 text-[10px] sm:text-xs md:text-sm font-medium transition-transform ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  {location.pathname === item.path && (
                    <>
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 rounded-full"
                        initial={false}
                        animate={{
                          left: '10%',
                          width: '80%',
                          background: `linear-gradient(90deg, ${tabColorMap[item.path]} 0%, #ffffff 100%)`,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                      />
                      <motion.span
                        className="absolute left-1/2 -bottom-0.5 h-2 w-0 rounded-full blur-md opacity-60"
                        initial={false}
                        animate={{
                          left: '10%',
                          width: '80%',
                          background: `linear-gradient(90deg, ${tabColorMap[item.path]} 0%, rgba(255,255,255,0.6) 100%)`,
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        style={{ willChange: 'opacity, transform' }}
                        aria-hidden
                      />
                    </>
                  )}
                </Link>
              ))}
              
              <Link to="/contact" className="shrink-0">
                <Button3D size="sm">
                  Get Quote
                </Button3D>
              </Link>

              {/* Mobile fade scroll hints */}
              <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent" />
              <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;