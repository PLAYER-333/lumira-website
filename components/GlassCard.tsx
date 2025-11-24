import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)]' 
    : '';

  return (
    <div className={`bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;