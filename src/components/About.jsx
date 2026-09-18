import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  Trophy, 
  Medal, 
  Calendar, 
  MapPin, 
  Sparkles,
  UserCheck,
  Briefcase,
  FileText,
  Download
} from 'lucide-react';
import { personalInfo, education, achievements } from '../data/portfolioData';

const iconMap = {
  Award,
  BookOpen,
  Code2,
  Cpu,
  CheckCircle2,
  Trophy,
  Medal
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
          <UserCheck className="w-3.5 h-3.5" />
          Candidate Profile
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Passionate about building scalable Python systems, intelligent models, and clean architectures.
        </p>
      </div>

      {/* Main Profile & Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* Profile Card & Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 flex flex-col items-center text-center p-8 rounded-3xl glass-card border border-white/[0.08] relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Glowing Ring Profile Avatar */}
          <div className="relative mb-6 group">
            {/* Animated outer spinning glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            {/* Outer border ring */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500">
              {/* Inner Circle with Harshad's Photo */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#0a0b14] border-2 border-[#161726] relative overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle gradient overlay at bottom for smooth contrast */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#07070c]/80 to-transparent pointer-events-none" />

                {/* Available Badge */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-[10px] font-mono font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute" />
                  <span className="ml-1">Available</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {personalInfo.name}
          </h3>
          <p className="text-sm font-mono text-blue-400 mb-4">
            {personalInfo.role} • B.Tech CSE (2027)
          </p>

          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-6 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.06]">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 w-full border-t border-white/[0.08] pt-6">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="block text-xl font-bold text-gradient font-mono">2</span>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Internships</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="block text-xl font-bold text-gradient font-mono">4+</span>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Full-Stack Projects</span>
            </div>
          </div>

          {/* Download Resume CTA */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="about-resume-btn"
            className="w-full mt-4 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-500/20 hover:from-blue-600/40 hover:to-violet-600/40 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-blue-300 hover:text-white transition-all duration-300 group"
          >
            <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-blue-400" />
            <span>Download Resume (PDF)</span>
          </a>
        </motion.div>

        {/* Profile Summary & Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* Detailed Summary Box */}
          <div className="p-8 rounded-3xl glass-card border border-white/[0.08] relative">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Executive Profile Summary
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {personalInfo.bio}
            </p>

            {/* Core Competencies Quick Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20">
                #REST_APIs
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                #HuggingFace_NLP
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                #Flask_MongoDB
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                #SQL_DataPipelines
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                #CleanCode_DSA
              </span>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="p-8 rounded-3xl glass-card border border-white/[0.08]">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              Education Journey
            </h4>

            {/* Vertical Connected Timeline */}
            <div className="relative pl-6 border-l-2 border-gradient-to-b border-blue-500/30 ml-2 space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#07070c] border-2 border-blue-400 group-hover:border-violet-400 group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-violet-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h5 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {item.degree}
                    </h5>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                        {item.score}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 font-medium mb-1">
                    {item.institution}
                  </p>
                  
                  {item.details && (
                    <p className="text-xs text-zinc-500 mb-2">
                      {item.details}
                    </p>
                  )}

                  {item.coursework && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>

      {/* Achievements Section as Icon-Badge Chips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-4"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Honors, Certifications &amp; <span className="text-gradient">Key Milestones</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Verified academic excellence, certifications, and technical badges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach, idx) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl glass-card border border-white/[0.08] hover:border-blue-500/40 flex items-start gap-3.5 group cursor-default"
              >
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${ach.color} bg-opacity-20 flex-shrink-0 shadow-lg text-white`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-0.5">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors">
                    {ach.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
};

export default About;
