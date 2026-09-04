import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, Download } from 'lucide-react';
import { portfolioData } from '../data/data';
import profilePic from '../assets/profile.webp';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-20 bg-transparent overflow-hidden min-h-screen flex flex-col lg:justify-center items-center">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:my-auto">
        
        {/* Main Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Desktop) / Main Stack (Mobile) */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-left">
            
            {/* 1. Name & Header Block (Top on Mobile & Desktop) */}
            <div className="space-y-3 sm:space-y-4">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a2f60]/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-medium">{personal.availability}</span>
              </div>

              {/* Main Name Headline */}
              <h1 className="text-[5.8vw] min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-black tracking-tight text-white leading-tight sm:leading-[1.1] whitespace-nowrap">
                {personal.name}
              </h1>

              {/* Role Title */}
              <p className="text-xl sm:text-3xl font-serif italic text-white tracking-wide font-semibold">
                {personal.title}
              </p>
            </div>

            {/* 2. Profile Picture Block - MOBILE ONLY */}
            <div className="block lg:hidden my-3 flex justify-center">
              <div className="relative group cursor-pointer max-w-full">
                {/* Continuous Pulsing Ambient Aura */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.7, 0.35] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#105ebd]/50 via-cyan-400/30 to-[#2F80ED]/40 blur-2xl pointer-events-none"
                />

                {/* Continuous Rotating Laser Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-white opacity-80 blur-[2px] pointer-events-none"
                />

                {/* Circular Glass Outer Ring */}
                <div className="p-2 sm:p-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative">
                  <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/20 bg-[#091b36]">
                    <img
                      src={profilePic}
                      onError={(e) => { e.target.src = '/profile.webp'; }}
                      alt={personal.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-[#0a2f60]/95 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-2.5 font-mono text-xs text-white whitespace-nowrap">
                  <Sparkles className="w-4 h-4 text-cyan-300 shrink-0 animate-pulse" />
                  <div>
                    <p className="font-bold text-white text-xs">2+ Years Exp.</p>
                    <p className="text-[10px] text-white/90 font-sans">Making Brands Grow & Driving Results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Description & CTAs Block */}
            <div className="space-y-4 sm:space-y-6 pt-1">
              <p className="text-slate-100 font-sans text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Digital Marketer with 2+ years of hands-on experience across Organic and Paid Digital Marketing — building brand presence through social media strategy, content creation, Meta Advertising, and Local SEO, alongside e-commerce store and catalog management.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:items-center">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#105ebd] hover:bg-[#083e80] text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-300 hover:-translate-y-0.5 border border-white/20 shadow-lg shadow-[#105ebd]/30 text-center whitespace-nowrap"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                </a>

                <a
                  href={personal.resumeUrl}
                  download="Haseeb_Abdul_Rauf_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] text-white font-mono text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-300 hover:-translate-y-0.5 border border-white/20 backdrop-blur-md shadow-md text-center whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Picture Block - DESKTOP ONLY */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
            <div className="relative group cursor-pointer">
              {/* Continuous Pulsing Ambient Aura */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-5 rounded-full bg-gradient-to-tr from-[#105ebd]/50 via-cyan-400/35 to-[#2F80ED]/45 blur-2xl pointer-events-none"
              />

              {/* Continuous Rotating Laser Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-white opacity-80 blur-[2px] pointer-events-none"
              />

              {/* Circular Glass Outer Ring */}
              <div className="p-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 group-hover:border-cyan-400/50 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.35)] transition-all duration-500 ease-out shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative">
                
                {/* Image Container */}
                <div className="relative w-72 h-72 rounded-full overflow-hidden border border-white/20 bg-[#091b36]">
                  <img
                    src={profilePic}
                    onError={(e) => { e.target.src = '/profile.webp'; }}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Glass Light Sheen Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-2 -left-4 px-4 py-2.5 rounded-xl bg-[#0a2f60]/95 backdrop-blur-xl border border-white/20 group-hover:border-cyan-400/50 group-hover:-translate-y-1.5 transition-all duration-500 shadow-2xl flex items-center gap-2.5 font-mono text-xs text-white">
                <Sparkles className="w-4 h-4 text-cyan-300 shrink-0 animate-pulse" />
                <div>
                  <p className="font-bold text-white text-xs">2+ Years Exp.</p>
                  <p className="text-[10px] text-white/90 font-sans">Making Brands Grow & Driving Results</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
