import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight, Mail, FileText } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'experience', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07070c]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-2.5 text-white no-underline"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0c0d16] rounded-[11px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                &lt;HA/&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
              Harshad Ayatode
            </span>
            <span className="text-[11px] font-mono text-blue-400/80 -mt-1 hidden sm:block">
              Python Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-blue-400/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name.toUpperCase()}</span>
              </a>
            );
          })}
        </nav>

        {/* Action CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Resume Button */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-resume-btn"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs tracking-wider uppercase text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-blue-500/40 transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            RESUME
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            id="nav-hire-me-btn"
            className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-xs tracking-wider uppercase text-white overflow-hidden shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 group-hover:opacity-90 transition-opacity" />
            <span className="absolute inset-[1.5px] bg-[#0c0d16] rounded-full group-hover:bg-opacity-0 transition-all duration-300" />
            <span className="relative z-10 flex items-center gap-1.5 font-bold">
              <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
              HIRE ME
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0a0a12]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-4 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-zinc-200 bg-white/[0.05] border border-white/[0.1]"
                >
                  <FileText className="w-4 h-4 text-blue-400" />
                  VIEW RESUME (PDF)
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-600/30"
                >
                  <Mail className="w-4 h-4" />
                  HIRE ME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
