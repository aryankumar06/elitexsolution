import React from 'react';
import GlassCard from './GlassCard';

const ResponseGuarantee: React.FC = () => {
  return (
    <GlassCard className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-red-900/10 via-black/0 to-red-800/10">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Quick Response Guarantee</h3>
      <div className="grid grid-cols-1">
        <div className="flex justify-between py-2 border-b border-white/10">
          <span className="text-gray-300">Email Response:</span>
          <span className="text-red-300">Within 4 hours</span>
        </div>
        <div className="flex justify-between py-2 border-b border-white/10">
          <span className="text-gray-300">Project Consultation:</span>
          <span className="text-red-300">Same day</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-300">Proposal Delivery:</span>
          <span className="text-white">48 hours</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default ResponseGuarantee;
