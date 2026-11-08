import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ExternalLink,
  Loader2,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSubmitting(false);
        setSubmitStatus({
          type: 'success',
          title: 'Message Sent! 🎉',
          message: `Your message has been delivered to ${personalInfo.email}.`,
          note: 'Note: If this is your first submission, check Gmail for a one-time activation email from FormSubmit.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        title: 'Could not send automatically',
        message: 'Please use the email button below to send directly via your email app.',
      });
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.name ? `Portfolio Contact from ${formData.name}` : 'Portfolio Contact'
  )}&body=${encodeURIComponent(
    formData.message
      ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      : `Hi Harshad,\n\nI visited your portfolio and would like to get in touch.`
  )}`;

  const channels = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.socials.email,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/Harshad964',
      href: personalInfo.socials.github,
      external: true,
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/harshad-ayatode',
      href: personalInfo.socials.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <MessageSquare size={14} />
              Get In Touch
            </span>
            <h2 className="section-title">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="section-subtitle">
              Whether you have an internship opportunity, a project to discuss, or want to connect
              — my inbox is always open.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Info Card */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card contact-info-card">
              <div>
                <h3 className="contact-info-title">Contact Details</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '8px' }}>
                  Reach out directly through email, phone, or professional networks.
                </p>
              </div>

              <div className="contact-channels-list">
                {channels.map((ch, i) => {
                  const inner = (
                    <>
                      <div className="contact-icon-box">{ch.icon}</div>
                      <div className="contact-channel-details">
                        <span className="contact-channel-label">{ch.label}</span>
                        <span className="contact-channel-value">{ch.value}</span>
                      </div>
                    </>
                  );

                  return ch.href ? (
                    <motion.a
                      key={i}
                      href={ch.href}
                      className="contact-channel-item"
                      target={ch.external ? '_blank' : undefined}
                      rel={ch.external ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {inner}
                    </motion.a>
                  ) : (
                    <div key={i} className="contact-channel-item">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Form Card */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card contact-form-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                Send a Message
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Fill in your details and I'll get back to you as soon as possible.
              </p>

              {/* Success alert */}
              {submitStatus?.type === 'success' && (
                <div className="form-feedback-alert success" style={{ marginBottom: '20px' }} role="alert">
                  <CheckCircle2 size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>{submitStatus.title}</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>{submitStatus.message}</p>
                    {submitStatus.note && (
                      <p style={{ fontSize: '0.8rem', marginTop: '6px', color: '#a7f3d0' }}>
                        {submitStatus.note}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Error alert */}
              {submitStatus?.type === 'error' && (
                <div className="form-feedback-alert error" style={{ marginBottom: '20px' }} role="alert">
                  <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>{submitStatus.title}</strong>
                    <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>{submitStatus.message}</p>
                    <a
                      href={mailtoUrl}
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: '10px', display: 'inline-flex' }}
                    >
                      <ExternalLink size={14} />
                      <span>Open in Gmail / Email App</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && <span className="form-error-text" role="alert">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && <span className="form-error-text" role="alert">{errors.email}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Your Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && <span className="form-error-text" role="alert">{errors.message}</span>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', marginTop: '8px' }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin-icon" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <div style={{ textAlign: 'center', margin: '12px 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  or
                </div>

                <a
                  href={mailtoUrl}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <Mail size={16} />
                  <span>Open in Gmail / Email App</span>
                </a>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
