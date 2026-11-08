import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Code2, Server, Layout, Database, Cpu, Wrench, Layers, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

const iconMap = { Code2, Server, Layout, Database, Cpu, Wrench };

// All flat skills for the marquee strip
const allSkills = [
  'Python', 'Java', 'JavaScript', 'React.js', 'HTML5', 'CSS3',
  'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'FastAPI', 'Flask',
  'Git', 'GitHub', 'Machine Learning', 'REST APIs', 'DSA', 'Postman',
  'scikit-learn', 'Tailwind CSS', 'OOP', 'SQL', 'VS Code', 'JSON',
];

// Skill icons mapping (emoji/text fallback for marquee)
const skillIconMap = {
  'Python': '🐍', 'Java': '☕', 'JavaScript': '⚡', 'React.js': '⚛️',
  'HTML5': '🌐', 'CSS3': '🎨', 'Node.js': '🟢', 'Express.js': '🚀',
  'MongoDB': '🍃', 'MySQL': '🗄️', 'FastAPI': '⚡', 'Flask': '🧪',
  'Git': '🔀', 'GitHub': '🐙', 'Machine Learning': '🤖', 'REST APIs': '🔗',
  'DSA': '📊', 'Postman': '📮', 'scikit-learn': '🔬', 'Tailwind CSS': '💨',
  'OOP': '📦', 'SQL': '📋', 'VS Code': '💻', 'JSON': '{}',
};

function MarqueeTrack({ skills, reverse = false }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return;
    const speed = 0.04;
    posRef.current += reverse ? -(delta * speed) : delta * speed;
    const trackWidth = trackRef.current.scrollWidth / 2;
    if (posRef.current >= trackWidth) posRef.current = 0;
    if (posRef.current < 0) posRef.current = trackWidth - 1;
    trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
  });

  const doubled = [...skills, ...skills];

  return (
    <div className="marquee-outer" aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="marquee-chip">
            <span className="marquee-chip-icon">{skillIconMap[skill] || '•'}</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <Layers size={14} />
              Technical Proficiency
            </span>
            <h2 className="section-title">
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive overview of the languages, frameworks, databases, and tools I work with.
            </p>
          </div>
        </AnimatedSection>

        {/* Animated Marquee Strip */}
        <AnimatedSection delay={0.05}>
          <div className="marquee-section">
            <MarqueeTrack skills={row1} reverse={false} />
            <MarqueeTrack skills={row2} reverse={true} />
          </div>
        </AnimatedSection>

        {/* Categorized Skills Grid */}
        <div className="skills-grid" style={{ marginTop: '48px' }}>
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <AnimatedSection key={cat.category || idx} delay={0.08 * idx}>
                <motion.div
                  className="glass-card skill-category-card"
                  whileHover={{ translateY: -5, borderColor: 'rgba(56,189,248,0.4)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="skill-category-top">
                    <div className="skill-category-icon-wrap">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="skill-category-title">{cat.category}</h3>
                    <p className="skill-category-desc">{cat.description}</p>
                  </div>

                  <div className="skill-badges-wrap">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        <Check size={12} color="var(--accent-cyan)" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
