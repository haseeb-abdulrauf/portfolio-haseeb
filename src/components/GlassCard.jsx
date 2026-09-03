import React from 'react';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`
        rounded-2xl p-6 sm:p-8
        bg-[#092b5a]/25 backdrop-blur-xl
        border border-white/12
        shadow-[0_8px_32px_rgba(0,0,0,0.37)]
        ${hoverEffect ? 'transition-all duration-300 hover:border-navy-400/50 hover:bg-[#0e3b79]/40 hover:shadow-[0_12px_40px_rgba(47,128,237,0.3)] hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
