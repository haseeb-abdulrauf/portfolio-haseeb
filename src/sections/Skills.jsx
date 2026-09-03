import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioData } from '../data/data';
import { Sparkles, Cpu, CheckCircle2, TrendingUp, Target, Search, ShoppingBag, Layers, ShieldCheck, Zap } from 'lucide-react';

// Official Brand Logomarks for Tools
const MetaToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
      fill="#0081FB"
    />
  </svg>
);

const GoogleToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const SemrushToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
    <path
      d="M 62 18 A 32 32 0 0 1 62 82 C 48 82 30 78 20 72 C 32 64 36 60 38 58 C 24 54 14 50 8 46 C 24 42 32 40 38 38 C 30 32 24 26 20 22 C 36 20 50 18 62 18 Z"
      fill="#FF642D"
    />
    <circle cx="62" cy="50" r="16" fill="#FFFFFF" />
    <path
      d="M 60 39.5 A 10.5 10.5 0 0 1 72.5 52"
      stroke="#FF642D"
      strokeWidth="4.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const AhrefsToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#3B82F6" />
    <path d="M12 4L4 18H8.5L10.2 15H13.8L15.5 18H20L12 4ZM11 10.5L12 8.5L13 10.5H11Z" fill="#FFFFFF" />
  </svg>
);

const CanvaToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="url(#canva-tool-grad-v8)" />
    <path
      d="M15.2 8.5C14.2 7.6 12.8 7.2 11.2 7.2C7.8 7.2 5.2 9.7 5.2 13.4C5.2 16.7 7.6 19.1 11 19.1C12.6 19.1 13.9 18.6 15 17.8C15.8 18.2 15.8 18.9 15.1 19.4C14.2 20.1 12.7 20.5 10.9 20.5C5.4 20.5 1.5 16.6 1.5 11.4C1.5 6.2 5.8 2.3 11.3 2.3C13.7 2.3 15.6 2.9 16.8 3.9C17.6 4.6 17.6 5.5 16.7 6.1L15.2 8.5Z"
      fill="#FFFFFF"
    />
    <defs>
      <linearGradient id="canva-tool-grad-v8" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4CC" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
  </svg>
);

const ShopifyToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <path
      d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"
      fill="#95BF47"
    />
  </svg>
);

const WordpressToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#FFFFFF" />
    <path
      fill="#21759B"
      d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-7.697 12c0-1.848.58-3.56 1.57-4.966L10.3 19.349C6.732 18.064 4.303 14.331 4.303 12zm7.697 10.748c-1.378 0-2.678-.344-3.821-.951l3.528-9.673 3.613 9.613a10.67 10.67 0 0 1-3.32.011zm.698-12.825c.677 0 1.29.07 1.29.07a.465.465 0 0 1 .414.512c-.046.368-.465.418-.883.418h-.233l2.88 8.57 1.674-5.116-.186-.543h-.233c-.418 0-.837-.05-.883-.418a.465.465 0 0 1 .414-.512s.614-.07 1.29-.07c.651 0 1.29.07 1.29.07a.465.465 0 0 1 .418.512c-.047.368-.465.418-.883.418h-.233l2.86 8.52 1.489-4.884c.162-.511.233-.953.233-1.325 0-1.023-.744-1.604-1.744-1.604-.14 0-.279.009-.418.028-.21-.466.07-.977.581-1.023.233-.023.465-.047.721-.047.93 0 1.767.349 2.372.93a5.53 5.53 0 0 1 1.256 3.488c0 1.465-.418 2.86-1.186 4.093l-3.232 9.395c-.86.279-1.767.442-2.721.442-1.023 0-2.023-.186-2.953-.512l3.418-9.976z"
    />
  </svg>
);

const EbayToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#0064D2" />
    <text x="4" y="16" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">eBay</text>
  </svg>
);

const DarazToolLogo = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 36 48" fill="none">
    <path
      d="M18 2L32 9V38L18 46L4 38V24L18 16V2Z"
      fill="#F57224"
    />
    <polygon
      points="18,16.5 30,22.5 18,28.5"
      fill="#FFFFFF"
    />
  </svg>
);

const toolLogoMap = {
  "Meta Business Suite": <MetaToolLogo />,
  "Meta Ads Manager": <MetaToolLogo />,
  "Meta Events Manager": <MetaToolLogo />,
  "Meta Insights": <MetaToolLogo />,
  "Meta Commerce Manager": <MetaToolLogo />,
  "Google Business Profile": <GoogleToolLogo />,
  "Google Search Console": <GoogleToolLogo />,
  "Google Keyword Planner": <GoogleToolLogo />,
  "Google Trends": <GoogleToolLogo />,
  "SEMrush": <SemrushToolLogo />,
  "Ahrefs": <AhrefsToolLogo />,
  "Canva": <CanvaToolLogo />,
  "Shopify": <ShopifyToolLogo />,
  "WordPress": <WordpressToolLogo />,
  "eBay": <EbayToolLogo />,
  "Daraz": <DarazToolLogo />
};

export const Skills = () => {
  const { skills, tools } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedDomain, setExpandedDomain] = useState(0);

  const categories = ["All", "Social & Ads", "SEO & Search", "Design", "E-Commerce"];

  const filteredTools = activeCategory === "All"
    ? tools
    : tools.filter(t => t.category === activeCategory);

  const domains = [
    {
      num: "01",
      title: "Organic Social Media Growth",
      subtitle: "Viral content planning, brand positioning & organic reach acceleration across platforms.",
      metric: "+185% Engagement",
      progress: 95,
      icon: TrendingUp,
      accentColor: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.25)",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      items: skills.organic,
    },
    {
      num: "02",
      title: "Paid Meta Advertising & ROAS",
      subtitle: "High-ROI Meta ad campaign structuring, pixel tracking & audience retargeting.",
      metric: "4.8x ROAS",
      progress: 98,
      icon: Target,
      accentColor: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.25)",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      items: skills.paid,
    },
    {
      num: "03",
      title: "Local SEO & Search Discovery",
      subtitle: "Google Business Profile optimization, local citation building & organic search domination.",
      metric: "#1 Local Rank",
      progress: 92,
      icon: Search,
      accentColor: "from-emerald-400 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.25)",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      items: skills.seo,
    },
    {
      num: "04",
      title: "E-Commerce Operations & Scaling",
      subtitle: "Multi-channel store management, listing optimization & inventory workflows.",
      metric: "$250K+ Revenue",
      progress: 90,
      icon: ShoppingBag,
      accentColor: "from-violet-500 to-purple-600",
      glowColor: "rgba(139, 92, 246, 0.25)",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      items: skills.ecommerce,
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-transparent overflow-hidden border-t border-white/10">
      {/* Dynamic Animated Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Executive Capabilities"
          title="Technical Core & Infrastructure"
          subtitle="Data-backed growth strategies, performance engineering, and software stack."
          centered
        />

        {/* 1. HIGH-AGENCY BENTO COCKPIT ACCORDION */}
        <div className="mb-24 grid grid-cols-1 gap-5">
          {domains.map((dom, idx) => {
            const isOpen = expandedDomain === idx;
            const Icon = dom.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setExpandedDomain(isOpen ? -1 : idx)}
                style={{
                  boxShadow: isOpen ? `0 16px 48px -12px ${dom.glowColor}` : '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
                className={`group cursor-pointer rounded-2xl border transition-all duration-500 relative overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/80 border-cyan-400/40 backdrop-blur-xl'
                    : 'bg-slate-950/40 border-white/10 hover:border-cyan-500/30 hover:bg-slate-900/50 backdrop-blur-md'
                }`}
              >
                {/* Top Subtle Animated Accent Line */}
                {isOpen && (
                  <motion.div
                    layoutId="activeLine"
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${dom.accentColor}`}
                  />
                )}

                <div className="p-6 sm:p-8">
                  {/* Card Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Left Title Group */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${
                        isOpen
                          ? 'bg-cyan-500/10 border-cyan-400/40 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-cyan-300'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                            {dom.num}
                          </span>
                          <span className="h-3 w-[1px] bg-white/20" />
                          <span className={`text-xs font-mono font-medium tracking-wide uppercase ${isOpen ? 'text-cyan-300' : 'text-slate-400'}`}>
                            Domain Strategy
                          </span>
                        </div>
                        <h3 className={`text-xl sm:text-2xl font-bold font-display tracking-tight transition-colors duration-300 mt-1 ${
                          isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {dom.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right Metric Pill & Progress */}
                    <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                      {/* Metric Badge */}
                      <div className={`px-4 py-2 rounded-full border text-xs sm:text-sm font-mono font-bold tracking-wide flex items-center gap-2 ${dom.badgeBg}`}>
                        <Zap className="w-4 h-4" />
                        {dom.metric}
                      </div>

                      {/* Expand Indicator */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                          isOpen
                            ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                            : 'bg-white/5 border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-white'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>

                  </div>

                  {/* Expanded Motion Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/10 space-y-6">
                          
                          {/* Subtitle description */}
                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                            {dom.subtitle}
                          </p>

                          {/* Animated Progress Meter */}
                          <div className="space-y-2 max-w-md">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-slate-400 uppercase">Execution Mastery</span>
                              <span className="text-cyan-400 font-bold">{dom.progress}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-slate-800 overflow-hidden p-[1px]">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${dom.progress}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`h-full rounded-full bg-gradient-to-r ${dom.accentColor} shadow-[0_0_12px_rgba(6,182,212,0.6)]`}
                              />
                            </div>
                          </div>

                          {/* Skill Tags Stream */}
                          <div>
                            <span className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold tracking-wider">
                              Core Technical Modules
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                              {dom.items.map((item, iIdx) => (
                                <motion.div
                                  key={iIdx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: iIdx * 0.05 }}
                                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                  <span>{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. SOFTWARE INFRASTRUCTURE & INTERACTIVE MATRIX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-8 sm:p-12 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle Corner Aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Matrix Header & Filter Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                  Software Stack & Infrastructure
                </h3>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Battle-tested tools and software platforms utilized daily across campaign operations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeToolTab"
                        className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/50 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tool Cards Stream Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-4 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-3.5 backdrop-blur-md"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                    {toolLogoMap[tool.name] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors font-display leading-snug">
                      {tool.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mt-0.5 truncate">
                      {tool.category}
                    </span>
                  </div>

                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#06b6d4]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

