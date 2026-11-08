import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="container">
        <nav className="navbar-inner" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleLinkClick(e, '#home')}
            aria-label="Harshad Ayatode Portfolio Home"
          >
            <motion.div
              className="nav-logo-icon"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              {personalInfo.initials}
            </motion.div>
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className={`nav-link-item ${isActive ? 'active' : ''}`}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                    {isActive && (
                      <motion.span
                        className="nav-active-dot"
                        layoutId="navActiveDot"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <motion.a
              href="#resume"
              onClick={(e) => handleLinkClick(e, '#resume')}
              className="btn btn-outline btn-sm nav-desktop-resume"
              id="desktop-resume-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={15} />
              <span>Resume</span>
            </motion.a>

            {/* Hamburger */}
            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay open"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="mobile-menu-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <span>{link.name}</span>
                    {isActive && <span style={{ color: 'var(--accent-cyan)' }}>•</span>}
                  </motion.a>
                );
              })}
              <div className="mobile-nav-actions">
                <a
                  href={personalInfo.resume.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: '100%' }}
                >
                  <FileText size={16} />
                  <span>View Resume (PDF)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
