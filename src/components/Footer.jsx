import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-glow" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top row */}
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span>{personalInfo.initials}</span>
            </div>
            <div>
              <div className="footer-name gradient-text">{personalInfo.name}</div>
              <div className="footer-role">
                {personalInfo.primaryTitle} · {personalInfo.secondaryTitle}
              </div>
              <div className="footer-location" style={{ marginTop: '6px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {personalInfo.location} · Class of {personalInfo.graduationYear}
              </div>
            </div>
          </div>

          {/* Quick nav */}
          <div className="footer-nav-cols">
            <div className="footer-nav-col">
              <div className="footer-nav-title">Quick Links</div>
              {navLinks.slice(0, 5).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="footer-nav-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="footer-nav-col">
              <div className="footer-nav-title">More</div>
              {navLinks.slice(5).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="footer-nav-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="footer-contact-col">
            <div className="footer-nav-title">Connect</div>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-item"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.socials.email}
              className="footer-social-item"
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom-row">
          <div className="footer-copy">
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="footer-made-with">
            Made with <Heart size={13} fill="#ef4444" color="#ef4444" /> using React &amp; Framer Motion
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
