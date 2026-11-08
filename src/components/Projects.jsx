import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

// Project color themes for visual variety
const cardThemes = [
  {
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.12)',
    icon: '🤖',
    gradient: 'linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(99,102,241,0.08) 100%)',
  },
  {
    accent: '#a855f7',
    glow: 'rgba(168,85,247,0.12)',
    icon: '💬',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(236,72,153,0.08) 100%)',
  },
  {
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    icon: '🏗️',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(56,189,248,0.08) 100%)',
  },
  {
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.12)',
    icon: '🌐',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(239,68,68,0.08) 100%)',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <FolderGit2 size={14} />
              Featured Work
            </span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Practical software implementations spanning NLP, machine learning, REST API
              architectures, and responsive web applications.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const hasGithub = Boolean(project.githubUrl);
            const hasLive = Boolean(project.liveUrl);

            return (
              <AnimatedSection key={project.id} delay={0.1 * idx}>
                <motion.article
                  className="project-card-premium"
                  style={{ '--card-accent': theme.accent, '--card-glow': theme.glow }}
                  onHoverStart={() => setHovered(idx)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ translateY: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  {/* Gradient header bar */}
                  <div
                    className="project-card-header-bar"
                    style={{ background: theme.gradient }}
                  >
                    <span className="project-card-emoji">{theme.icon}</span>
                    <div className="project-card-meta">
                      <span className="project-category-tag">{project.category}</span>
                      <span
                        className={`project-status-pill ${project.status === 'Live' ? 'status-live' : ''}`}
                      >
                        {project.status === 'Live' && <span className="live-dot" />}
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="project-card-body">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-subtitle">{project.subtitle}</div>
                    <p className="project-description">{project.description}</p>

                    {/* Tech stack */}
                    <div className="project-tech-stack">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag"
                          style={{ borderColor: `${theme.accent}33` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="project-actions">
                      {hasGithub ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                        >
                          <Github size={15} />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span
                          className="btn btn-sm btn-disabled"
                          title="Repository private or academic"
                        >
                          <Github size={15} />
                          <span>Private / On Request</span>
                        </span>
                      )}

                      {hasLive && (
                        <a href={project.liveUrl} className="btn btn-primary btn-sm">
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover glow overlay */}
                  <AnimatePresence>
                    {hovered === idx && (
                      <motion.div
                        className="project-card-glow"
                        style={{ background: theme.glow }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.article>
              </AnimatedSection>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.2}>
          <div className="projects-github-cta">
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>More projects available on GitHub</span>
            <a
              href="https://github.com/Harshad964"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <Github size={15} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
