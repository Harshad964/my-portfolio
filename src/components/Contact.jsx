import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (submitStatus) {
      setSubmitStatus(null);
    }
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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
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
          title: 'Message Sent Successfully! / मेसेज पाठवला गेला आहे!',
          message: `Your message has been dispatched to ${personalInfo.email}.`,
          note: 'Tip: If this is your first submission, check your Gmail inbox for a one-time activation confirmation from FormSubmit and click "Activate Form".'
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
        message: 'Could not deliver via API. Please click below to send directly through your email application (Gmail / Outlook).'
      });
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.name ? `Portfolio Contact from ${formData.name}` : 'Portfolio Contact'
  )}&body=${encodeURIComponent(
    formData.message
      ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      : 'Hi Harshad,\n\nI visited your portfolio and would like to get in touch.'
  )}`;

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project to discuss, or want to connect — my inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Direct Channels Card */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 className="contact-info-title">Contact Details</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Feel free to reach out directly through email, phone, or professional networks.
              </p>
            </div>

            <div className="contact-channels-list">
              {/* Email */}
              <a
                href={personalInfo.socials.email}
                className="contact-channel-item"
                aria-label={`Email ${personalInfo.email}`}
              >
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Email</span>
                  <span className="contact-channel-value">{personalInfo.email}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="contact-channel-item"
                aria-label={`Call ${personalInfo.phone}`}
              >
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Phone</span>
                  <span className="contact-channel-value">{personalInfo.phone}</span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-channel-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
                aria-label="GitHub Profile"
              >
                <div className="contact-icon-box">
                  <Github size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">GitHub</span>
                  <span className="contact-channel-value">{personalInfo.socials.github.replace('https://', '')}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
                aria-label="LinkedIn Profile"
              >
                <div className="contact-icon-box">
                  <Linkedin size={20} />
                </div>
                <div className="contact-channel-details">
                  <span className="contact-channel-label">LinkedIn</span>
                  <span className="contact-channel-value">{personalInfo.socials.linkedin.replace('https://', '')}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '8px' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Fill in your details below to send a message directly to my inbox.
            </p>

            {submitStatus && submitStatus.type === 'success' && (
              <div
                className="form-feedback-alert success"
                style={{ marginBottom: '20px' }}
                role="alert"
              >
                <CheckCircle2 size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>{submitStatus.title}</strong>
                  <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>{submitStatus.message}</p>
                  {submitStatus.note && (
                    <p style={{ fontSize: '0.82rem', marginTop: '6px', color: '#a7f3d0' }}>
                      {submitStatus.note}
                    </p>
                  )}
                </div>
              </div>
            )}

            {submitStatus && submitStatus.type === 'error' && (
              <div
                className="form-feedback-alert error"
                style={{ marginBottom: '20px' }}
                role="alert"
              >
                <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>{submitStatus.title}</strong>
                  <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>{submitStatus.message}</p>
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

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
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
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error-text" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span style={{ color: 'var(--accent-cyan)' }}>*</span>
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
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error-text" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
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
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error-text" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '8px' }}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin-icon" />
                    <span>Sending to email...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <span>or</span>
              </div>

              {/* Direct Mailto Option */}
              <a
                href={mailtoUrl}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
                id="contact-mailto-btn"
              >
                <Mail size={16} />
                <span>Open in Email App (Gmail / Outlook)</span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
