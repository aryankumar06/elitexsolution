import React from 'react';

const GlassBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px]" />
    </div>
  );
};

export default GlassBackground;


