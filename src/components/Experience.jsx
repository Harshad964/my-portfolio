import React from 'react';
import { Briefcase, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            Professional Experience
          </span>
          <h2 className="section-title">
            Internships & <span className="gradient-text">Industry Practice</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development experience building Python applications, debugging, and adhering to engineering best practices.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="glass-card experience-card">
              <div className="experience-card-header">
                <div>
                  <h3 className="exp-role-title">{exp.role}</h3>
                  <div className="exp-company-wrap">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="exp-duration-badge">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Verified Responsibilities */}
              <ul className="exp-responsibilities-list">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="exp-resp-item">
                    <CheckCircle2 size={16} className="exp-bullet-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Focus Tags */}
              <div className="exp-tags-row">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
