import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { portfolioData } from '../data/data';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-transparent overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <SectionHeading
          badge="Recent work"
          title="Featured Case Studies"
          subtitle="Real-world social media strategies, Meta advertising execution, and e-commerce channel setups."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-navy-300 uppercase tracking-widest">
                    {project.period}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-navy-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-slate-300 font-mono text-xs leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Deliverables:</p>
                  <ul className="space-y-1.5">
                    {project.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#092244]/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
