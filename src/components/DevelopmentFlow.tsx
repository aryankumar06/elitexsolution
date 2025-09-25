import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  { num: '01', title: 'Discover', desc: 'We analyze your needs and understand your goals' },
  { num: '02', title: 'Design', desc: 'Create detailed plans and technical specifications' },
  { num: '03', title: 'Develop', desc: 'Build your solution with cutting-edge technology' },
  { num: '04', title: 'Deploy', desc: 'Launch and optimize for maximum performance' },
];

const Circle: React.FC<{ label: string; delay?: number }> = ({ label, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.4 }}
    className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/15 bg-gradient-to-br from-red-900/30 to-red-700/10 flex items-center justify-center shadow-[0_8px_32px_rgba(239,68,68,0.25)]"
  >
    <span className="text-red-300 font-semibold">{label}</span>
  </motion.div>
);

const DevelopmentFlow: React.FC = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Our 
      <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"> Process</span>
      </h3>

      {/* Desktop / Tablet */}
      <div className="hidden md:block">
        {/* Circles + connectors */}
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-8">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              style={{ transformOrigin: 'left center' }}
              className="h-[2px] bg-gradient-to-r from-red-500/30 via-white/10 to-red-500/30"
            />
          </div>
          <div className="grid grid-cols-4 gap-10 items-center">
            {stages.map((s, i) => (
              <div key={s.num} className="flex items-center justify-center">
                <Circle label={s.num} delay={i * 0.1} />
              </div>
            ))}
          </div>
        </div>

        {/* Titles and descriptions */}
        <div className="mt-8 grid grid-cols-4 gap-10 text-center">
          {stages.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="text-xl font-semibold text-white mb-3">{s.title}</div>
              <p className="text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="md:hidden space-y-8">
        {stages.map((s, i) => (
          <div key={s.num} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Circle label={s.num} delay={i * 0.05} />
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.6 }}
                  style={{ transformOrigin: 'left center' }}
                  className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-red-500/30"
                />
              )}
            </div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-lg font-semibold text-white mb-2">{s.title}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentFlow;
