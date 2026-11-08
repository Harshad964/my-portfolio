import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, CheckCircle2, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <Briefcase size={14} />
              Professional Experience
            </span>
            <h2 className="section-title">
              Internships &amp; <span className="gradient-text">Industry Practice</span>
            </h2>
            <p className="section-subtitle">
              Hands-on software development experience building Python applications, debugging,
              and adhering to engineering best practices.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="timeline-wrap">
          {experiences.map((exp, index) => (
            <AnimatedSection key={`${exp.company}-${index}`} delay={0.12 * index}>
              <div className="timeline-item">
                {/* Timeline dot + line */}
                <div className="timeline-connector" aria-hidden="true">
                  <div className="timeline-dot">
                    <Briefcase size={14} />
                  </div>
                  {index < experiences.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Card */}
                <motion.div
                  className="glass-card experience-card"
                  whileHover={{ translateY: -4, borderColor: 'rgba(56,189,248,0.4)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="experience-card-header">
                    <div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-wrap">
                        <Building size={15} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="exp-location-wrap">
                        <MapPin size={13} color="var(--text-muted)" />
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="exp-badges">
                      <div className="exp-duration-badge">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="exp-type-badge">{exp.type}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="exp-responsibilities-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <motion.li
                        key={rIdx}
                        className="exp-resp-item"
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * rIdx, duration: 0.4 }}
                      >
                        <CheckCircle2 size={15} className="exp-bullet-icon" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="exp-tags-row">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
