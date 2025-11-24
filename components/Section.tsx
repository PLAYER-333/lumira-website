import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'darker' | 'glass';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '',
  background = 'default'
}) => {
  const bgStyles = {
    default: 'bg-transparent',
    darker: 'bg-slate-950',
    glass: 'bg-lumira-surface/80 backdrop-blur-sm border-y border-white/5',
  };

  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${bgStyles[background]} ${className}`}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;