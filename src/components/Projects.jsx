import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            Featured Work
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software implementations spanning NLP, machine learning algorithms, REST API architectures, and responsive web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const hasGithub = Boolean(project.githubUrl);
            const hasLive = Boolean(project.liveUrl);

            return (
              <article key={project.id} className="glass-card project-card">
                <div>
                  {/* Meta Bar */}
                  <div className="project-meta-bar">
                    <span className="project-category-tag">{project.category}</span>
                    <span className="project-status-pill">{project.status}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-subtitle">{project.subtitle}</div>

                  {/* Description */}
                  <p className="project-description">{project.description}</p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="project-tech-stack" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons (Strictly real links only - no fake URLs) */}
                  <div className="project-actions">
                    {hasGithub ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <Github size={15} />
                        <span>View GitHub</span>
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-disabled" title="Repository is currently private or academic">
                        <Github size={15} />
                        <span>Code Private / On Request</span>
                      </span>
                    )}

                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        className="btn btn-primary btn-sm"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink size={15} />
                        <span>View Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
