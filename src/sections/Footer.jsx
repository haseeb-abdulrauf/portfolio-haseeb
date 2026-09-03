import React from 'react';
import { portfolioData } from '../data/data';
import { Linkedin, Mail, ArrowUp, FileText } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Footer = () => {
  const { personal } = portfolioData;
  const { triggerEmailAction } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020814] backdrop-blur-xl border-t border-white/10 pt-10 pb-8 text-slate-300 font-sans overflow-hidden">
      {/* Soft Multi-Tone Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[180px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Architectural Watermark Text: "HASEEB" (Fully visible with low opacity) */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-4"
      >
        <span className="text-[14vw] sm:text-[11vw] font-black font-display text-transparent bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text uppercase tracking-[0.2em] whitespace-nowrap leading-none">
          HASEEB
        </span>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10 space-y-6">
        
        {/* Main Header Grid: Brand Info + Status Pill + Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-6 border-b border-white/10 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <h3 className="text-xl font-bold font-display text-white tracking-wide">
                {personal.name}
              </h3>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
            </div>
            <p className="text-xs font-mono text-slate-400">
              {personal.title} • {personal.location}
            </p>
          </div>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{personal.availability || "Available for New Opportunities"}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-md"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={(e) => triggerEmailAction(e, personal.email)}
              className="w-10 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 shadow-md cursor-pointer"
              aria-label="Email Me"
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
            </button>

            <a
              href={personal.resumeUrl}
              download
              className="px-3.5 h-10 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-400/40 flex items-center gap-2 text-slate-300 hover:text-cyan-300 text-xs font-mono font-bold transition-all duration-300 shadow-md"
              title="Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="px-3.5 h-10 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 border border-cyan-400/30 flex items-center gap-2 text-white hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer text-xs font-mono font-bold"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="flex items-center justify-center text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
