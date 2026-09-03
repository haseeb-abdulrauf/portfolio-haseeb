import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/data';
import { Share2, Target, PenTool, MapPin, ShoppingBag, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react';

export const Services = () => {
  const { services } = portfolioData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 40;

  const iconMap = {
    Share2: <Share2 className="w-5 h-5 text-blue-300" />,
    Target: <Target className="w-5 h-5 text-blue-300" />,
    PenTool: <PenTool className="w-5 h-5 text-blue-300" />,
    MapPin: <MapPin className="w-5 h-5 text-blue-300" />,
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-blue-300" />
  };

  // Auto-play loop every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  // Touch Swipe Handlers for Phone View
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12">
        
        {/* Section Heading with requested title change */}
        <SectionHeading
          badge="Services"
          title="WHAT I DO FOR YOU"
          subtitle="Tailored digital marketing solutions designed to drive audience engagement, paid performance, and online revenue."
          centered
        />

        {/* 3D Focus Carousel Container with Swipe Support */}
        <div 
          className="relative mt-6 sm:mt-12 py-4 sm:py-6 px-1 sm:px-8 touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3.5 rounded-full bg-[#030e24]/90 hover:bg-[#0c448a] text-white border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous Service"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-3.5 rounded-full bg-[#030e24]/90 hover:bg-[#0c448a] text-white border border-white/20 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next Service"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Cards Focus Container */}
          <div className="flex items-center justify-center min-h-[390px] sm:min-h-[480px] relative max-w-5xl mx-auto overflow-hidden sm:overflow-visible py-2">
            {services.map((service, index) => {
              // Calculate offset relative to activeIndex (-2, -1, 0, 1, 2)
              const total = services.length;
              let diff = (index - activeIndex + total) % total;
              if (diff > Math.floor(total / 2)) {
                diff -= total;
              }

              const isActive = diff === 0;

              // Styles based on offset position - higher visibility side cards for phone view
              let positionClass = '';
              if (isActive) {
                positionClass = 'z-30 scale-100 opacity-100 translate-x-0 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(16,94,189,0.35)] border-white/25 bg-[#041229]/95';
              } else if (diff === -1) {
                positionClass = 'z-20 scale-[0.88] sm:scale-95 opacity-60 hover:opacity-100 -translate-x-[64%] sm:-translate-x-[60%] border-white/15 bg-[#020a1a]/95';
              } else if (diff === 1) {
                positionClass = 'z-20 scale-[0.88] sm:scale-95 opacity-60 hover:opacity-100 translate-x-[64%] sm:translate-x-[60%] border-white/15 bg-[#020a1a]/95';
              } else {
                positionClass = 'z-10 scale-75 opacity-0 pointer-events-none hidden';
              }

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    absolute w-[74vw] max-w-[275px] sm:max-w-[440px] p-4 sm:p-8 rounded-2xl
                    backdrop-blur-2xl border transition-all duration-500 ease-out cursor-pointer
                    flex flex-col justify-between select-none ${positionClass}
                  `}
                >
                  {/* Top Glowing Gradient Accent Bar for Active Card */}
                  {isActive && (
                    <div className="absolute top-0 left-5 right-5 sm:left-8 sm:right-8 h-[2px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />
                  )}

                  <div>
                    {/* Header Row: Icon & Active Badge */}
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className="p-2 sm:p-3.5 rounded-xl bg-[#082247]/90 backdrop-blur-md border border-white/15 shadow-md">
                        {iconMap[service.icon]}
                      </div>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-emerald-400 font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30">
                          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <p className="text-[10px] sm:text-xs font-mono text-blue-200 uppercase tracking-widest mb-1 font-semibold">
                      // {service.category}
                    </p>

                    {/* Service Title */}
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight font-display leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-100 font-sans text-[11px] sm:text-sm leading-relaxed mb-3 sm:mb-6 font-normal line-clamp-3 sm:line-clamp-none">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-2.5 sm:pt-4 border-t border-white/15">
                    <ul className="grid grid-cols-1 gap-1 sm:gap-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-white">
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-300 shrink-0" />
                          <span className="text-white font-medium truncate">{feat}</span>
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
