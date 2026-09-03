import React from 'react';
import { portfolioData } from '../data/data';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Footer = () => {
  const { personal } = portfolioData;
  const { triggerEmailAction } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020b18]/80 backdrop-blur-xl border-t border-white/10 py-8 text-slate-300 font-sans overflow-hidden">
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Elegant Architectural Watermark Text (Centered Background) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-4"
      >
        <span className="text-[6.5vw] sm:text-[5.5vw] font-black font-display text-transparent bg-gradient-to-b from-white/[0.08] to-white/[0.01] bg-clip-text uppercase tracking-[0.25em] whitespace-nowrap leading-none blur-[0.5px]">
          HASEEB ABDUL RAUF
        </span>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Main Single-Line Compact Layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-6 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold font-display text-white tracking-wide">
              {personal.name}
            </h3>
            <p className="text-[11px] font-mono text-slate-400 mt-0.5">
              {personal.title} • {personal.location}
            </p>
          </div>

          {/* Social Links & Back to Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={(e) => triggerEmailAction(e, personal.email)}
              className="w-9 h-9 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Email Me"
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 border border-cyan-400/30 flex items-center justify-center text-white hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 flex items-center justify-center text-[11px] text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
