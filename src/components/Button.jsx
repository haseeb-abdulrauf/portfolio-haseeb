import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy-500/50';

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase',
    md: 'px-6 py-3 text-sm tracking-wide',
    lg: 'px-8 py-4 text-base tracking-wide font-semibold',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-navy-500 to-navy-700 text-white shadow-[0_0_25px_rgba(47,128,237,0.35)] hover:shadow-[0_0_35px_rgba(47,128,237,0.65)] hover:-translate-y-0.5 border border-navy-400/30',
    secondary: 'bg-navy-800/60 hover:bg-navy-700/60 text-slate-200 border border-white/10 hover:border-navy-400/50 backdrop-blur-md hover:-translate-y-0.5',
    outline: 'bg-transparent border border-navy-500/40 text-navy-300 hover:bg-navy-500/10 hover:border-navy-400 hover:text-white',
    glass: 'glass-card hover:border-navy-400/50 text-slate-100 hover:bg-navy-700/40',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />}
    </Component>
  );
};
