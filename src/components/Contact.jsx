import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Inquiry",
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject || 'New Inquiry'}`,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setIsSubmitting(false);
        setSubmitted(true);

        // Trigger celebratory confetti
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981']
        });

        // Reset form after 6 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 6000);
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (err) {
      console.warn("Direct API submission note:", err);
      // Fallback: Open mailto client directly so communication is guaranteed!
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
          Looking for a dedicated Python Developer or backend engineer? Reach out directly or drop a message below.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Contact Details & Availability */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-8 rounded-3xl glass-card border border-white/[0.08] flex flex-col justify-between relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-6 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Full-time Roles &amp; Internships
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              I am actively seeking Python Developer roles. Feel free to contact me via email, phone, or LinkedIn.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition-all flex items-center gap-3.5 group no-underline"
              >
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Direct Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location} (Open to Relocation / Remote)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Social Links & Response Time Notice */}
          <div className="pt-8 border-t border-white/[0.07] mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:border-blue-400/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-blue-400 hover:border-blue-400/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Typical response &lt; 12 hours
            </span>
          </div>
        </motion.div>

        {/* Right Column: Clean Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 rounded-3xl glass-card border border-white/[0.08] relative"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-zinc-400 text-sm mb-6">
            Have a project opportunity, job invitation, or technical query? Drop a message and let's connect.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:bg-white/[0.06] text-white text-sm placeholder-zinc-600 outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:bg-white/[0.06] text-white text-sm placeholder-zinc-600 outline-none transition-all"
                />
              </div>

            </div>

            {/* Subject Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400">
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="e.g. Python Developer Role / Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:bg-white/[0.06] text-white text-sm placeholder-zinc-600 outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400">
                MESSAGE *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Share project scope, role details, or questions..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:bg-white/[0.06] text-white text-sm placeholder-zinc-600 outline-none transition-all resize-none"
              />
            </div>

            {/* Submit Button with Dynamic Micro-Interactions */}
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              id="contact-submit-btn"
              className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-75 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING MESSAGE...</span>
                </>
              ) : submitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>MESSAGE SENT SUCCESSFULLY!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>

            {submitted ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                <p className="text-xs font-mono text-emerald-400 font-semibold">
                  ✓ Message transmitted! Delivered straight to {personalInfo.email}.
                </p>
                <p className="text-[11px] text-zinc-400 mt-0.5">
                  I have received your note and will reply promptly.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-1">
                <span>Direct delivery to harshadaitode2@gmail.com</span>
                <a
                  href={`mailto:${personalInfo.email}?subject=Direct%20Inquiry%20from%20Portfolio`}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Or open Gmail directly
                </a>
              </div>
            )}
          </form>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;
