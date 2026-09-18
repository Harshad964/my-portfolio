import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          Industry Experience
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Demonstrated track record of delivering clean Python code, automation scripts, and collaborative engineering.
        </p>
      </div>

      {/* Alternating Vertical Timeline */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Central Connecting Gradient Line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-500 opacity-40" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                } gap-8 md:gap-0`}
              >
                {/* Center Glowing Dot Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#07070c] border-2 border-blue-400 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                    />
                  </div>
                </div>

                {/* Content Card Container */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ y: -4 }}
                    className="p-6 sm:p-8 rounded-3xl glass-card border border-white/[0.08] relative group overflow-hidden"
                  >
                    {/* Corner gradient accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 via-violet-500/5 to-transparent pointer-events-none rounded-bl-3xl" />

                    {/* Top Row: Role, Duration, and Type Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30">
                        <Terminal className="w-3 h-3" />
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                        <Calendar className="w-3 h-3 text-violet-400" />
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-zinc-300 font-medium mb-4">
                      <Building2 className="w-4 h-4 text-zinc-400" />
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs text-zinc-400">{exp.location}</span>
                    </div>

                    {/* Accomplishment Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.07] group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty spacer for the alternating layout on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Experience;
