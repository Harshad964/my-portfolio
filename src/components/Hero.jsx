import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Terminal } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';
import heroImg from '../assets/hero.jpg';

// Animated typing hook
function useTypingEffect(texts, speed = 80, pauseMs = 1800) {
  const [display, setDisplay] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setTextIdx((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pauseMs]);

  return display;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const typingTexts = [
  'Software Developer',
  'Python Developer',
  'React.js Developer',
  'Full-Stack Builder',
  'ML Enthusiast',
];

export default function Hero() {
  const typedText = useTypingEffect(typingTexts);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Ambient glows */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-layout">
          {/* ─── LEFT: Text Content ─── */}
          <motion.div
            className="hero-content"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Status pill */}
            <motion.div variants={item} className="hero-status-pill">
              <span className="hero-status-dot" />
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={item} className="hero-greeting">
              <span>Hi there, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="hero-name">
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={item} className="hero-typing-row">
              <Terminal size={18} className="typing-icon" />
              <span className="typing-text">
                {typedText}
                <span className="typing-cursor" aria-hidden="true">|</span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="hero-intro">
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="hero-actions">
              <a
                href="#projects"
                onClick={(e) => scrollTo(e, '#projects')}
                className="btn btn-primary btn-lg"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={personalInfo.resume.path}
                download={personalInfo.resume.fileName}
                className="btn btn-secondary btn-lg"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="hero-socials">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.socials.email}
                className="hero-social-link"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Profile Photo ─── */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img
                  src={heroImg}
                  alt="Harshad Shashikant Ayatode"
                  className="hero-photo-img"
                />
              </div>
            </div>

            {/* Floating badge: College */}
            <motion.div
              className="hero-float-badge badge-college"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className="badge-dot badge-dot-blue" />
              <div>
                <div className="badge-label">College</div>
                <div className="badge-value">SVERI's COE</div>
              </div>
            </motion.div>

            {/* Floating badge: Graduation */}
            <motion.div
              className="hero-float-badge badge-grad"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="badge-dot badge-dot-cyan" />
              <div>
                <div className="badge-label">Graduating</div>
                <div className="badge-value">2027</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden="true"
      >
        <div className="scroll-dot" />
      </motion.div>
    </section>
  );
}
