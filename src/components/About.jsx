import React from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle2, GraduationCap, Compass } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <User size={14} />
              About Me
            </span>
            <h2 className="section-title">
              Engineering Practical{' '}
              <span className="gradient-text">Software Solutions</span>
            </h2>
            <p className="section-subtitle">
              A look into my academic journey, engineering mindset, and passion for technology.
            </p>
          </div>
        </AnimatedSection>

        {/* About Grid */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card about-bio-card">
              {aboutData.summary.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}

              {/* Academic & Focus Highlights */}
              <div className="about-highlights-grid">
                {aboutData.highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="about-highlight-item"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="about-highlight-label">{item.label}</div>
                    <div className="about-highlight-value">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Key Competencies Card */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card about-side-card">
              <div className="about-side-title">
                <Compass size={20} color="var(--accent-cyan)" />
                <span>Core Strengths &amp; Focus</span>
              </div>

              <ul className="attributes-list">
                {aboutData.keyAttributes.map((attr, idx) => (
                  <motion.li
                    key={idx}
                    className="attribute-item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  >
                    <div className="attribute-bullet">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{attr}</span>
                  </motion.li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 'auto',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                  }}
                >
                  <GraduationCap size={18} color="var(--accent-indigo)" />
                  <span>B.Tech CSE · Class of {personalInfo.graduationYear}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
