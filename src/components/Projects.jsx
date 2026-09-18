import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  X, 
  Terminal, 
  Cpu, 
  ArrowUpRight,
  Database 
} from 'lucide-react';
import { Github } from './Icons';
import { projects, personalInfo } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & Backend', 'Machine Learning', 'Frontend & Full-Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          Featured Engineering
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Production &amp; Research <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          End-to-end full-stack architectures spanning NLP pipelines, machine learning risk models, and clean RESTful microservices.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Elevated Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group rounded-3xl glass-card border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient Background Gradient on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`}
            />

            <div>
              {/* Top Meta Bar: Category Badge & Top-Right Action Icons */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.05] text-blue-300 border border-white/[0.08]">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  {project.category}
                </span>

                {/* Top-Right GitHub / Live Icons */}
                <div className="flex items-center gap-2">
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      title="Live Deployment"
                      className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 hover:text-emerald-300 hover:scale-110 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title="GitHub Repository"
                    className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.08] text-zinc-300 hover:text-white hover:scale-110 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Inspect ${project.title} details`}
                    title="Inspect Details"
                    className="p-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors mb-1.5 relative z-10">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-4 relative z-10">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 relative z-10">
                {project.description}
              </p>

              {/* Feature Highlights Bullet Points */}
              <ul className="space-y-2 mb-6 relative z-10">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.07]">
              {/* Colored Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, tIdx) => {
                  const colors = [
                    'bg-blue-500/10 text-blue-300 border-blue-500/20',
                    'bg-violet-500/10 text-violet-300 border-violet-500/20',
                    'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
                    'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
                    'bg-amber-500/10 text-amber-300 border-amber-500/20'
                  ];
                  const colorClass = colors[tIdx % colors.length];

                  return (
                    <span
                      key={tIdx}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium border ${colorClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              {/* Bottom Card Actions */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  {project.stats}
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold group-hover:underline cursor-pointer"
                >
                  Inspect Architecture
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#0e0f19] border border-white/[0.12] rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedProject.stats}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-zinc-400 mb-6">
                {selectedProject.subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Engineering Highlights &amp; Scope
                </h4>
                <ul className="space-y-2">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/[0.08]">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white text-sm font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub Code
                </a>
                {selectedProject.demo && selectedProject.demo !== '#' && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-600/30 hover:opacity-90 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live App
                  </a>
                )}
                <a
                  href={`mailto:${personalInfo.email}?subject=Inquiry regarding ${encodeURIComponent(selectedProject.title)}`}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:opacity-90 transition-all"
                >
                  Discuss
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
