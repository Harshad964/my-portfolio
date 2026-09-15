import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand & Title */}
          <div className="footer-brand">
            <div className="footer-name">{personalInfo.name}</div>
            <div className="footer-role">
              {personalInfo.primaryTitle} | {personalInfo.secondaryTitle}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-socials" aria-label="Footer Social Links">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.socials.email}
              className="hero-social-link"
              aria-label="Send Email"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
