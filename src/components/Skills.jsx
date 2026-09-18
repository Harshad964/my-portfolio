import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Layout, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles,
  Check,
  Star
} from 'lucide-react';
import { skillCategories, personalInfo } from '../data/portfolioData';

const iconMap = {
  Code,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Technical Arsenal
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills &amp; <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Curated proficiencies across Python backend engineering, database modeling, and modern web application development.
        </p>
      </div>

      {/* Masonry / Grid of Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = iconMap[category.icon] || Code;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6, 
                rotateX: 2, 
                rotateY: 2,
                transition: { duration: 0.2 } 
              }}
              className="p-6 sm:p-7 rounded-3xl glass-card border border-white/[0.08] relative group flex flex-col justify-between"
              style={{ perspective: 1000 }}
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 via-violet-500/5 to-transparent rounded-bl-3xl pointer-events-none" />

              <div>
                {/* Header with Category Icon */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/[0.08] text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skills List with Proficiency Progress */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-200 flex items-center gap-1.5">
                        {skill.highlight ? (
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        )}
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Highlights summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 p-6 rounded-2xl glass-card border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Full-Stack &amp; Python Ready</h4>
            <p className="text-xs text-zinc-400">Experienced in developing clean, modular, and maintainable applications from scratch.</p>
          </div>
        </div>

        <a
          href={`mailto:${personalInfo.email}?subject=Interview Invitation for Python Developer Role`}
          className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-blue-600 hover:text-white border border-white/[0.1] text-xs font-bold uppercase tracking-wider text-zinc-200 transition-all duration-200 flex-shrink-0"
        >
          Request Technical Interview
        </a>
      </motion.div>

    </section>
  );
};

export default Skills;
