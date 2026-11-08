import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <GraduationCap size={14} />
              Academic Background
            </span>
            <h2 className="section-title">
              Education &amp; <span className="gradient-text">Qualifications</span>
            </h2>
            <p className="section-subtitle">
              Formal academic background establishing a strong foundation in computer science
              and engineering principles.
            </p>
          </div>
        </AnimatedSection>

        {/* Education Grid */}
        <div className="education-grid">
          {educationList.map((item, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <motion.div
                className="glass-card education-card"
                whileHover={{ translateY: -5, borderColor: 'rgba(99,102,241,0.4)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Top glow strip for primary item */}
                {index === 0 && <div className="education-primary-strip" />}

                <div className="edu-card-top">
                  <div className="edu-badge-row">
                    <span className="badge badge-cyan">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                    <span className={`badge ${index === 0 ? 'badge-indigo' : 'badge-emerald'}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="edu-degree-title">{item.degree}</h3>
                  <p className="edu-institution">{item.institution}</p>

                  <div className="edu-score-box">
                    <Award size={16} color="var(--accent-cyan)" />
                    <span className="edu-score-label">{item.scoreLabel}:</span>
                    <span className="edu-score-val">{item.score}</span>
                  </div>

                  <p className="edu-description">{item.description}</p>
                </div>

                {item.coursework && item.coursework.length > 0 && (
                  <div>
                    <div className="edu-coursework-title">
                      <BookOpen size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      Key Subjects / Coursework
                    </div>
                    <div className="edu-coursework-wrap">
                      {item.coursework.map((course) => (
                        <span key={course} className="tech-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
