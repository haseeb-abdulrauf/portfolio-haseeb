import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { portfolioData } from '../data/data';
import { Target, Share2, MapPin, ShoppingBag, CheckCircle2 } from 'lucide-react';

export const About = () => {
  const { about } = portfolioData;

  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-navy-300" />,
      title: "Paid Meta Performance",
      desc: "End-to-end execution of Meta Ads Manager campaigns with precision audience targeting and Meta Events Manager tracking."
    },
    {
      icon: <Share2 className="w-5 h-5 text-navy-300" />,
      title: "Organic Content & Strategy",
      desc: "Creating healthcare & product creatives on Canva, content scheduling, and audience engagement optimization."
    },
    {
      icon: <MapPin className="w-5 h-5 text-navy-300" />,
      title: "Local SEO Visibility",
      desc: "Google Business Profile optimization and localized keyword research for maximum local discovery."
    },
    {
      icon: <ShoppingBag className="w-5 h-5 text-navy-300" />,
      title: "Multi-Channel Operations",
      desc: "Storefront design, catalog optimization, and multi-channel management across Shopify, Daraz, & eBay."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-transparent overflow-hidden border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        <SectionHeading
          badge="ABOUT ME"
          title="Strategy-Driven Digital Marketing Professional"
          subtitle="Combining strategic creative thinking with performance-focused digital execution."
        />

        {/* Executive Bio Spotlight Card */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-[#0a356d]/35 backdrop-blur-xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#105ebd]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-xs text-blue-200 uppercase tracking-widest block font-semibold">
              // EXECUTIVE SUMMARY
            </span>
            <p className="text-white font-sans text-base sm:text-lg leading-relaxed font-normal">
              {about.bio}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-300" /> 2+ Years Field Experience
              </span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-300" /> Multi-Channel Brand Strategy
              </span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-300" /> End-to-End Campaign Management
              </span>
            </div>
          </div>
        </div>

        {/* 4 Capability Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((item, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between group p-6">
              <div>
                <div className="p-3 rounded-xl bg-[#0e4b96]/60 backdrop-blur-md border border-white/20 w-fit mb-4 group-hover:border-white/40 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-mono group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-100 font-sans text-xs leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
