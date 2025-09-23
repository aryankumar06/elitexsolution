import React, { Suspense, lazy, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LogoIntro from './components/LogoIntro';
import ScrollProgress from './components/ScrollProgress';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {/* Glossy swipe overlay for stronger frosted effect */}
        <motion.div
          key={`swipe-${location.pathname}`}
          initial={{ x: '-100%', opacity: 0.0 }}
          animate={{ x: '100%', opacity: [0.0, 0.6, 0.0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="pointer-events-none fixed inset-y-0 left-0 z-[55] hidden md:block"
          style={{ width: '40%', background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.12), rgba(255,255,255,0.0))', backdropFilter: 'blur(14px)' }}
        />
        {/* Mobile swipe overlay (lighter for performance) */}
        <motion.div
          key={`swipe-mobile-${location.pathname}`}
          initial={{ x: '-100%', opacity: 0.0 }}
          animate={{ x: '100%', opacity: [0.0, 0.45, 0.0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="pointer-events-none fixed inset-y-0 left-0 z-[55] md:hidden"
          style={{ width: '25%', background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.0))', backdropFilter: 'blur(8px)' }}
        />
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(6px)' }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="will-change-transform will-change-filter"
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <LogoIntro onComplete={handleIntroComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white text-sm md:text-base">
        <ScrollProgress />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;