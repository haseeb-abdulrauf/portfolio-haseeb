import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Mail, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/data';
import { useToast } from '../context/ToastContext';

export const Navbar = () => {
  const { triggerEmailAction } = useToast();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Active Section Detection
      const scrollPosition = window.scrollY + 220; // Offset for header height

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          } else if (scrollPosition >= top && i === navLinks.length - 1) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div 
        className={`
          w-full px-6 sm:px-12 py-4 transition-all duration-300
          ${scrolled 
            ? 'bg-[#020b18]/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3.5' 
            : 'bg-gradient-to-b from-[#020b18]/90 via-[#020b18]/50 to-transparent backdrop-blur-md border-b border-white/5'}
        `}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Brand Logo with Electric Blue dot */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 group text-white font-display font-extrabold tracking-widest text-sm sm:text-base hover:text-cyan-300 transition-colors shrink-0"
          >
            <span className="whitespace-nowrap">{portfolioData.personal.name}</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </a>

          {/* Navigation Links with Clean Underline Scroll-Spy Tracker */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-display font-bold tracking-widest uppercase transition-colors py-1 group ${
                    isActive ? 'text-blue-200' : 'text-white hover:text-blue-200'
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#60A5FA] transition-all duration-300 rounded-full ${
                      isActive ? 'w-full shadow-[0_0_8px_#60A5FA]' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Direct Contact CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.1] hover:bg-white/[0.2] text-white border border-white/20 transition-all duration-300 backdrop-blur-md"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <button
              onClick={(e) => triggerEmailAction(e, portfolioData.personal.email)}
              className="p-2 rounded-lg bg-white/[0.1] hover:bg-white/[0.2] text-white border border-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#105ebd] hover:bg-[#083e80] text-white font-mono text-xs font-bold tracking-wider transition-all duration-300 hover:scale-105 border border-white/20 shadow-lg shadow-[#105ebd]/30"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-cyan-300 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Appealing Glassmorphism Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 65px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-[#020b18]/98 backdrop-blur-3xl z-40 border-b border-white/10 flex flex-col justify-between p-6 overflow-y-auto"
          >
            {/* Nav Items List */}
            <div className="flex flex-col space-y-3 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 mb-1 px-3">
                Navigation
              </span>
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#105ebd]/40 to-cyan-500/20 border-cyan-400/50 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                        : 'bg-white/[0.03] border-white/5 text-slate-300 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />}
                      <span className="text-sm font-display tracking-wider uppercase">{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-cyan-300 translate-x-1' : 'text-slate-500'}`} />
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Cockpit Info & Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-white/10 space-y-4 my-auto"
            >
              {/* Status Badge */}
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300">{portfolioData.personal.availability}</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>

              {/* Social Icons & Email Button */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-2 font-mono text-xs transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <button 
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    triggerEmailAction(e, portfolioData.personal.email);
                  }} 
                  className="p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-2 font-mono text-xs transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Direct Email</span>
                </button>
              </div>

              {/* Primary CTA */}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-[#105ebd] hover:bg-[#083e80] text-white font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#105ebd]/30 border border-white/20"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};



