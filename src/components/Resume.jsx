import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, CheckCircle2, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

const highlights = [
  'B.Tech CSE · SVERI\'s College of Engineering, Pandharpur',
  'Python Developer Intern @ Codec Technologies & CodeAlpha',
  'AI, ML, NLP, Flask, REST APIs, React.js & Full-Stack',
  'Academic CGPA: 8.2 · Gold &amp; Silver RTSE Scholarship Medals',
];

export default function Resume() {
  const { resume } = personalInfo;

  return (
    <section id="resume" className="section">
      <div className="container">
        <AnimatedSection>
          <div className="glass-card resume-card">
            {/* Background gradient */}
            <div className="resume-bg-gradient" aria-hidden="true" />

            <div className="resume-content">
              {/* Icon */}
              <div className="resume-icon-circle">
                <FileText size={36} />
              </div>

              {/* Heading */}
              <h2 className="resume-card-title">
                <span className="gradient-text">{resume.heading}</span>
              </h2>
              <p className="resume-card-desc">{resume.description}</p>

              {/* Resume highlights */}
              <ul className="resume-highlights">
                {highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    className="resume-highlight-item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <Star size={14} color="var(--accent-cyan)" fill="var(--accent-cyan)" />
                    <span dangerouslySetInnerHTML={{ __html: h }} />
                  </motion.li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="resume-actions-row">
                <motion.a
                  href={resume.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  id="resume-view-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={18} />
                  <span>View Resume</span>
                </motion.a>

                <motion.a
                  href={resume.path}
                  download={resume.fileName}
                  className="btn btn-secondary btn-lg"
                  id="resume-download-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </motion.a>
              </div>

              <div
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                }}
              >
                <CheckCircle2 size={15} color="var(--accent-emerald)" />
                <span>Updated with current education, skills &amp; internship experience</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
