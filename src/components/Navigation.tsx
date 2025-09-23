import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlowingLogo from './GlowingLogo';
import BrandLogo from './BrandLogo';

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
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-900/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link to="/" aria-label="EliteX Home">
            <BrandLogo />
          </Link>

          {/* Animated tabs (no glass) */}
          <div className="relative flex items-center space-x-2 sm:space-x-4 overflow-x-auto md:overflow-visible whitespace-nowrap -mx-2 px-2 overscroll-x-contain">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative shrink-0 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-transform ${
                  location.pathname === item.path ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 rounded-full"
                    initial={false}
                    animate={{
                      left: '10%',
                      width: '80%',
                      background: `linear-gradient(90deg, ${tabColorMap[item.path]} 0%, #ffffff 100%)`,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="shrink-0 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs md:text-sm font-medium transition-all"
            >
              Get Quote
            </Link>

            {/* Mobile fade scroll hints */}
            <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent" />
            <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;