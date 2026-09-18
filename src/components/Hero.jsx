import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  ArrowDown, 
  Sparkles, 
  Code2, 
  ExternalLink,
  ChevronRight,
  Terminal,
  FileText
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  // Typewriter effect for headline
  const fullTagline = personalInfo.tagline;
  const [typedText, setTypedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Cycling roles
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullTagline.length) {
        setTypedText(fullTagline.slice(0, currentIdx));
        currentIdx++;
      } else {
        setIsTypingDone(true);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullTagline]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.cyclingRoles.length);
    }, 2800);

    return () => clearInterval(roleInterval);
  }, []);

  const socials = [
    {
      name: 'GitHub',
      icon: Github,
      href: personalInfo.github,
      color: 'hover:text-white hover:border-zinc-500 hover:shadow-white/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400 hover:border-blue-500/40 hover:shadow-blue-500/20'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-violet-400 hover:border-violet-500/40 hover:shadow-violet-500/20'
    },
    {
      name: 'Phone',
      icon: Phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-cyan-500/20'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        
        {/* Floating Profile Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 group cursor-pointer"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition duration-300" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 shadow-xl">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover object-top border-2 border-[#0c0d16]"
            />
            <div className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0c0d16] flex items-center justify-center shadow-lg" title="Available for Hire">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Top Tag Pills */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-sm shadow-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 absolute" />
            Python Developer Intern (Codec Technologies)
          </span>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">
            <Sparkles className="w-3 h-3 text-violet-400" />
            ML & Backend Enthusiast
          </span>
        </motion.div>

        {/* Animated Typewriter Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight sm:leading-tight min-h-[4rem] sm:min-h-[5.5rem] flex items-center justify-center"
        >
          <span className="text-gradient">
            {typedText}
          </span>
          <span
            className={`inline-block w-1 h-8 sm:h-12 bg-blue-400 ml-1.5 align-middle ${
              isTypingDone ? 'animate-pulse' : ''
            }`}
          />
        </motion.h1>

        {/* Role Subheading with Dynamic Cycling Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-zinc-300 font-medium mb-8"
        >
          <span>Hi, I'm</span>
          <span className="text-white font-bold border-b border-dashed border-blue-500/50 pb-0.5">
            Harshad Ayatode
          </span>
          <span>—</span>
          <div className="relative inline-block h-8 overflow-hidden">
            <motion.span
              key={roleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="inline-block font-mono font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent"
            >
              {personalInfo.cyclingRoles[roleIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Concise Description for High Impact */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-10"
        >
          Final-year B.Tech CSE student specializing in high-performance Python backends, RESTful APIs, SQL/MongoDB architectures, and seamless ML integrations. Dedicated to building reliable, clean-code software systems.
        </motion.p>

        {/* Prominent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
        >
          {/* HIRE ME CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            id="hero-hire-me-btn"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm tracking-wider uppercase text-white overflow-hidden shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 animate-pulse-glow" />
            <span className="absolute inset-[1.5px] bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 rounded-[15px] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 font-bold tracking-wide">
              <Mail className="w-4 h-4" />
              HIRE ME NOW
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* EXPLORE PROJECTS CTA */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="hero-explore-projects-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-sm tracking-wide text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/20"
          >
            <Code2 className="w-4 h-4 text-blue-400" />
            Explore Projects
          </a>

          {/* DOWNLOAD RESUME CTA */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-resume-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
          >
            <FileText className="w-4 h-4 text-violet-400" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons Bar with Glow & Scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex items-center justify-center gap-3 p-2 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md"
        >
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.name}
                className={`p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-md ${social.color}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </motion.div>

      </div>

      {/* Scroll Down Bounce Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-zinc-500 hover:text-blue-400 transition-colors"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        id="hero-scroll-indicator"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-zinc-600 flex items-start justify-center p-1"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
