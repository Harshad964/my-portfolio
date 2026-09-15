import React from 'react';
import { User, CheckCircle2, GraduationCap, Code, Compass } from 'lucide-react';
import { personalInfo, aboutData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <User size={14} />
            About Me
          </span>
          <h2 className="section-title">
            Engineering Practical <span className="gradient-text">Software Solutions</span>
          </h2>
          <p className="section-subtitle">
            A look into my academic journey, engineering mindset, and passion for technology.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-bio-card">
            {aboutData.summary.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Academic & Focus Highlights */}
            <div className="about-highlights-grid">
              {aboutData.highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-item">
                  <div className="about-highlight-label">{item.label}</div>
                  <div className="about-highlight-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Competencies Card */}
          <div className="glass-card about-side-card">
            <div className="about-side-title">
              <Compass size={20} color="var(--accent-cyan)" />
              <span>Core Strengths & Focus</span>
            </div>

            <ul className="attributes-list">
              {aboutData.keyAttributes.map((attr, idx) => (
                <li key={idx} className="attribute-item">
                  <div className="attribute-bullet">
                    <CheckCircle2 size={14} />
                  </div>
                  <span>{attr}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <GraduationCap size={18} color="var(--accent-indigo)" />
                <span>B.Tech CSE Class of {personalInfo.graduationYear}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
