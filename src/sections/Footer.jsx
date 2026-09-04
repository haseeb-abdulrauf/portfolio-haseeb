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
    <footer className="relative bg-[#030914]/90 backdrop-blur-2xl border-t border-white/15 pt-12 pb-8 text-slate-300 font-sans overflow-hidden">
      {/* Top Sheen Line Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      {/* Multi-Tone Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[220px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Architectural Watermark Text: "HASEEB" */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden px-4"
      >
        <span className="text-[14vw] sm:text-[11vw] font-black font-display text-transparent bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent bg-clip-text uppercase tracking-[0.25em] whitespace-nowrap leading-none">
          HASEEB
        </span>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10 space-y-8">
        
        {/* Main Header Grid: Brand Info + Status Pill + Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="group cursor-default">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-wide">
                {personal.name}
              </h3>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#06b6d4]" />
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 font-medium tracking-wide">
              {personal.title} <span className="text-cyan-400/60 mx-1">•</span> {personal.location}
            </p>
          </div>

          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400/50 transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>{personal.availability || "Available for New Opportunities"}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all duration-300 shadow-lg hover:-translate-y-1 group"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
            </a>

            <button
              onClick={(e) => triggerEmailAction(e, personal.email)}
              className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all duration-300 shadow-lg hover:-translate-y-1 cursor-pointer group"
              aria-label="Email Me"
              title="Email Me"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
            </button>

            <a
              href={personal.resumeUrl}
              download
              className="px-4 h-11 rounded-xl bg-white/[0.05] hover:bg-cyan-500/15 border border-white/15 hover:border-cyan-400/50 flex items-center gap-2 text-slate-200 hover:text-cyan-300 text-xs font-mono font-bold transition-all duration-300 shadow-lg hover:-translate-y-1 group"
              title="Download Resume"
            >
              <FileText className="w-4 h-4 text-cyan-400 transition-transform group-hover:scale-110" />
              <span>Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="px-4 h-11 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 border border-cyan-400/40 flex items-center gap-2 text-white hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:-translate-y-1 cursor-pointer text-xs font-mono font-bold group"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="flex items-center justify-center text-xs text-slate-400 font-mono tracking-wider">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
