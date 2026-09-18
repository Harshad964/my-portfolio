import React from 'react';
import { Heart, Mail, Phone, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050508]/80 backdrop-blur-lg pt-12 pb-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Monogram Logo */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px] mb-4 shadow-lg shadow-blue-500/20">
          <div className="w-full h-full bg-[#0c0d16] rounded-[11px] flex items-center justify-center">
            <span className="font-mono text-sm font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              &lt;HA/&gt;
            </span>
          </div>
        </div>

        <h4 className="text-base font-bold text-white mb-1">
          Harshad Shashikant Ayatode
        </h4>
        <p className="text-xs font-mono text-blue-400 mb-6">
          Python Developer &amp; Backend Specialist
        </p>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs font-mono text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-violet-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            aria-label="Phone"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Sentiments & Copyright */}
        <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5 mb-2">
          Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-pulse" /> by Harshad Ayatode
        </p>
        <p className="text-[11px] font-mono text-zinc-600">
          © 2026 Harshad Ayatode | Python Developer. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
