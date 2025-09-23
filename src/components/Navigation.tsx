import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlowingLogo from './GlowingLogo';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  const tabColorMap: Record<string, string> = {
    '/': '#ef4444', // red-500
    '/services': '#a855f7', // purple-500
    '/portfolio': '#22d3ee', // cyan-400
    '/contact': '#22c55e', // green-500
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
          <Link to="/">
            <GlowingLogo size="sm" />
          </Link>

          <div className="relative flex items-center space-x-2 sm:space-x-4 overflow-x-auto md:overflow-visible whitespace-nowrap -mx-2 px-2 overscroll-x-contain rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative overflow-hidden shrink-0 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-white bg-white/15 border border-white/20 shadow-inner shadow-white/20'
                    : 'text-gray-200 hover:text-white hover:bg-white/10 hover:border hover:border-white/15'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="relative z-10">{item.label}</span>
                {/* liquid glass animated blob */}
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0.0, scale: 0.8, x: '-50%', y: '-50%' }}
                  animate={{
                    opacity: location.pathname === item.path ? 0.6 : 0.0,
                    scale: location.pathname === item.path ? [1, 1.1, 1] : 0.8,
                  }}
                  whileHover={{ opacity: 0.35 }}
                  transition={{ duration: 2, repeat: location.pathname === item.path ? Infinity : 0, ease: 'easeInOut' }}
                  className="absolute left-1/2 top-1/2 w-24 h-24 md:w-28 md:h-28 -z-0 rounded-full blur-2xl"
                  style={{
                    background: `radial-gradient(closest-side, ${tabColorMap[item.path] || '#ef4444'}55, ${tabColorMap[item.path] || '#ef4444'}33, transparent)`,
                    filter: `drop-shadow(0 0 20px ${(tabColorMap[item.path] || '#ef4444')}55)`,
                  }}
                />
                {/* top glossy highlight */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/30 to-transparent opacity-40"
                />
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