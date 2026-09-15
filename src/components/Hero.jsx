import React from 'react';
import { Mail, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          {/* Status Pill */}
          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Greeting */}
          <div className="hero-greeting">
            <span>Hi, I'm</span>
          </div>

          {/* Name */}
          <h1 className="hero-name">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Professional Titles */}
          <div className="hero-titles-wrap" aria-label="Professional Titles">
            <span className="hero-title-tag highlight">
              <Terminal size={15} />
              {personalInfo.primaryTitle}
            </span>
            <span className="hero-title-tag">
              <Sparkles size={15} color="var(--accent-cyan)" />
              {personalInfo.secondaryTitle}
            </span>
            <span className="hero-title-tag">
              <span style={{ color: 'var(--accent-amber)', fontWeight: 800 }}>Py</span>
              {personalInfo.tertiaryTitle}
            </span>
          </div>

          {/* Professional Introduction */}
          <p className="hero-intro">
            "{personalInfo.tagline}"
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="btn btn-primary btn-lg"
              id="hero-view-projects-btn"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn btn-secondary btn-lg"
              id="hero-contact-btn"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="hero-socials" aria-label="Social Profiles">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={personalInfo.socials.email}
              className="hero-social-link"
              aria-label="Send Email to Harshad"
              title={`Email: ${personalInfo.email}`}
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
