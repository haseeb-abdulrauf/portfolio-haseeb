import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/data';
import { GraduationCap, Award, ShieldCheck, Sparkles, BookOpen, Brain, Target, Share2, CheckCircle2 } from 'lucide-react';

const certIconMap = {
  "AI Marketing": Brain,
  "Digital Marketing": Target,
  "Social Media": Share2,
  "HubSpot Certified": Award,
};

export const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-transparent overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Credentials"
          title="Education & Certifications"
          subtitle="Formal degree education in Information Technology combined with professional certifications."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. DEGREE EDUCATION MAIN FEATURE CARD */}
          <div className="lg:col-span-5 flex">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="w-full rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-[0_16px_40px_rgba(0,0,0,0.4)] group"
              >
                {/* Glowing Corner Aura */}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      {item.status || "Currently Pursuing"}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">
                    University Degree
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight leading-snug mb-3">
                    {item.degree}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-300 font-mono text-xs font-semibold mb-6 pb-6 border-b border-white/10">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>{item.institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-cyan-300">{item.period}</span>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Verified Academic Program</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-bold">2023 - 2027</span>
                </div>

              </motion.div>
            ))}
          </div>

          {/* 2. CERTIFICATIONS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert, index) => {
              const CertIcon = certIconMap[cert.badge] || Award;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-cyan-500/40 backdrop-blur-md p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg group"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                        <CertIcon className="w-5 h-5" />
                      </div>

                      <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-slate-300 text-[10px] font-mono font-bold tracking-wider uppercase group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug font-display group-hover:text-cyan-200 transition-colors">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="truncate pr-2 font-medium">{cert.issuer}</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

