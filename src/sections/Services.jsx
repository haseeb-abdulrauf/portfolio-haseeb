import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/data';
import { Share2, Target, PenTool, MapPin, ShoppingBag, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';

export const Services = () => {
  const { services } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const iconMap = {
    Share2: <Share2 className="w-5 h-5 text-blue-300" />,
    Target: <Target className="w-5 h-5 text-blue-300" />,
    PenTool: <PenTool className="w-5 h-5 text-blue-300" />,
    MapPin: <MapPin className="w-5 h-5 text-blue-300" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-blue-300" />
  };

  // Auto-play loop every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        
        {/* Section Heading with requested title change */}
        <SectionHeading
          badge="Services"
          title="WHAT I DO FOR YOU"
          subtitle="Tailored digital marketing solutions designed to drive audience engagement, paid performance, and online revenue."
          centered
        />

        {/* 3D Focus Carousel Container */}
        <div 
          className="relative mt-8 sm:mt-12 py-6 px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-[#030e24]/90 hover:bg-[#0c448a] text-white border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous Service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-3.5 rounded-full bg-[#030e24]/90 hover:bg-[#0c448a] text-white border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next Service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Focus Container */}
          <div className="flex items-center justify-center min-h-[460px] sm:min-h-[480px] relative max-w-5xl mx-auto">
            {services.map((service, index) => {
              // Calculate offset relative to activeIndex (-2, -1, 0, 1, 2)
              const total = services.length;
              let diff = (index - activeIndex + total) % total;
              if (diff > Math.floor(total / 2)) {
                diff -= total;
              }

              const isActive = diff === 0;

              // Styles based on offset position - darker rich navy tones
              let positionClass = '';
              if (isActive) {
                positionClass = 'z-30 scale-100 opacity-100 translate-x-0 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(16,94,189,0.35)] border-white/25 bg-[#041229]/95';
              } else if (diff === -1) {
                positionClass = 'z-20 scale-90 sm:scale-95 opacity-35 hover:opacity-70 -translate-x-[45%] sm:-translate-x-[60%] border-white/10 bg-[#020a1a]/90 hidden sm:block';
              } else if (diff === 1) {
                positionClass = 'z-20 scale-90 sm:scale-95 opacity-35 hover:opacity-70 translate-x-[45%] sm:translate-x-[60%] border-white/10 bg-[#020a1a]/90 hidden sm:block';
              } else {
                positionClass = 'z-10 scale-80 opacity-0 pointer-events-none hidden';
              }

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    absolute w-full max-w-[360px] sm:max-w-[440px] p-6 sm:p-8 rounded-2xl
                    backdrop-blur-2xl border transition-all duration-500 ease-out cursor-pointer
                    flex flex-col justify-between select-none ${positionClass}
                  `}
                >
                  {/* Top Glowing Gradient Accent Bar for Active Card */}
                  {isActive && (
                    <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />
                  )}

                  <div>
                    {/* Header Row: Icon & Active Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-xl bg-[#082247]/90 backdrop-blur-md border border-white/15 shadow-md">
                        {iconMap[service.icon]}
                      </div>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30">
                          <Sparkles className="w-3 h-3" /> ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <p className="text-xs font-mono text-blue-200 uppercase tracking-widest mb-2 font-semibold">
                      // {service.category}
                    </p>

                    {/* Service Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight font-display">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-100 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 border-t border-white/15">
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs font-mono text-white">
                          <Check className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                          <span className="text-white font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8 z-40 relative">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  h-2 rounded-full transition-all duration-300 focus:outline-none
                  ${activeIndex === idx 
                    ? 'w-8 bg-[#60A5FA] shadow-[0_0_12px_#60A5FA]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'}
                `}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
