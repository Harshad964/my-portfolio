import React from 'react';
import {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  Check,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolio';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Layers size={14} />
            Technical Proficiency
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, frameworks, databases, and engineering tools I work with.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div key={cat.category || idx} className="glass-card skill-category-card">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
