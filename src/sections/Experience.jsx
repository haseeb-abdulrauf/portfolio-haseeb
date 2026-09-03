import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/data';
import { Building2, Calendar, MapPin, Sparkles, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-28 relative bg-transparent overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Field */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-b from-cyan-600/10 via-indigo-600/10 to-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Career Journey"
          title="Career Experience & Progression"
          subtitle="A continuous trajectory of execution across healthcare marketing, performance ad scaling, and e-commerce operations."
          centered
        />

        {/* TIMELINE CHAIN CONTAINER */}
        <div className="relative mt-16">
          
          {/* Central Vertical Laser Chain Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-amber-400 opacity-40 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

          {/* Left Laser Chain Line (Mobile) */}
          <div className="block md:hidden absolute left-6 top-4 bottom-8 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 opacity-40 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

          {/* Animated Light Pulse Traversing down the Timeline */}
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-2 h-20 bg-gradient-to-b from-transparent via-cyan-300 to-transparent blur-sm pointer-events-none"
          />

          <div className="space-y-12 md:space-y-16">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = exp.type.toLowerCase().includes('current');

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-between group"
                >
                  {/* CENTRAL CHAIN NODE ORB */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-xl shadow-lg transition-all duration-300 ${
                        isCurrent
                          ? 'border-emerald-400 bg-slate-900/90 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.5)]'
                          : 'border-cyan-400/60 bg-slate-900/90 text-cyan-300 group-hover:border-amber-400 group-hover:text-amber-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                      }`}
                    >
                      {isCurrent ? (
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                        </span>
                      ) : (
                        <Briefcase className="w-5 h-5" />
                      )}
                    </motion.div>

                    {/* Node Year Badge */}
                    <div className="hidden lg:block absolute -bottom-7 whitespace-nowrap text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-white/10">
                      {exp.period.split('–')[0].trim()}
                    </div>
                  </div>

                  {/* CONTENT CARD WRAPPER WITH ASYMMETRIC ALTERNATING LAYOUT */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                    
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -6 }}
                      className="p-7 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-xl relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)] group-hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Top Ambient Card Glow */}
                      <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-48 h-48 ${isCurrent ? 'bg-emerald-500/10' : 'bg-cyan-500/10'} rounded-full blur-2xl group-hover:scale-125 transition-all duration-500 pointer-events-none`} />

                      {/* Header Row */}
                      <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 ${
                          isCurrent
                            ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300'
                            : 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300'
                        }`}>
                          <Sparkles className="w-3 h-3" />
                          {exp.type}
                        </span>

                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[11px] font-mono font-semibold">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
                        {exp.role}
                      </h3>

                      {/* Company & Location Info */}
                      <div className={`flex flex-wrap items-center gap-3 text-slate-300 font-mono text-xs font-semibold mb-6 pb-5 border-b border-white/10 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className="flex items-center gap-1.5 text-cyan-300">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <span className="text-slate-500">•</span>
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Achievement Bullet Stream */}
                      <ul className="space-y-3 mb-6 text-left">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology Tag Constellation */}
                      <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 text-[11px] font-mono text-slate-300 font-medium transition-all hover:scale-105"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </motion.div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

