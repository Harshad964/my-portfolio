import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolio';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-logo"
            onClick={(e) => handleLinkClick(e, '#home')}
            aria-label="Harshad Shashikant Ayatode Portfolio Home"
          >
            <div className="nav-logo-icon">{personalInfo.initials}</div>
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li
                  key={link.name}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <a
              href="#resume"
              onClick={(e) => handleLinkClick(e, '#resume')}
              className="btn btn-outline btn-sm nav-desktop-resume"
              id="desktop-resume-btn"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className="mobile-menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.name}</span>
                {isActive && <span style={{ color: 'var(--accent-cyan)' }}>•</span>}
              </a>
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
        </div>
      </div>
    </header>
  );
}
