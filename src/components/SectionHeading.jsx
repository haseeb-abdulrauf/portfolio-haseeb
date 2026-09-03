import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <p className="font-mono text-xs text-blue-200 uppercase tracking-widest mb-3 font-semibold">
          // {badge}
        </p>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-4 leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-100 text-sm sm:text-base font-sans leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
