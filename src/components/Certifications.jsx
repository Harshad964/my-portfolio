import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Medal,
  ShieldCheck,
  X,
  ZoomIn,
  ExternalLink,
  Calendar,
  Hash,
} from 'lucide-react';
import { certifications } from '../data/portfolio';
import AnimatedSection from './AnimatedSection';

/* ── Lightbox Modal ── */
function CertModal({ cert, onClose }) {
  // Lock body scroll when modal is open
  React.useEffect(() => {
    document.body.classList.add('modal-open');
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);
  return (
    <AnimatePresence>
      <motion.div
        className="cert-modal-overlay"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="cert-modal-box"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.88, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Header */}
          <div className="cert-modal-header">
            <div>
              <span
                className="cert-issuer-badge"
                style={{ color: cert.issuerColor, borderColor: `${cert.issuerColor}44` }}
              >
                <ShieldCheck size={13} />
                {cert.issuer}
              </span>
              <h3 className="cert-modal-title">{cert.title}</h3>
              <div className="cert-modal-meta">
                {cert.period && (
                  <span className="cert-meta-item">
                    <Calendar size={13} />
                    {cert.period}
                  </span>
                )}
                {cert.credentialId && (
                  <span className="cert-meta-item">
                    <Hash size={13} />
                    {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
            <button
              className="cert-modal-close"
              onClick={onClose}
              aria-label="Close certificate viewer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Certificate Image */}
          <div className="cert-modal-img-wrap">
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="cert-modal-img"
            />
          </div>

          {/* Footer */}
          <div className="cert-modal-footer">
            <p className="cert-modal-desc">{cert.description}</p>
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              <ExternalLink size={14} />
              <span>Open Full Image</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Cert Card ── */
const certBg = {
  'CodeAlpha':              'rgba(124,58,237,0.07)',
  'Google Cloud':           'rgba(26,115,232,0.07)',
  'NPTEL / IIT Kharagpur':  'rgba(3,105,161,0.07)',
  "Giri's Tech Hub Pvt Ltd":'rgba(234,88,12,0.07)',
  'RTSE Scholarship Exam':  'rgba(180,83,9,0.07)',
};

export default function Certifications() {
  const [activeModal, setActiveModal] = useState(null);

  const certWithImages = certifications.filter((c) => c.image);
  const certWithoutImages = certifications.filter((c) => !c.image);

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <div className="section-header">
            <span className="section-badge">
              <Award size={14} />
              Verified Credentials
            </span>
            <h2 className="section-title">
              Certifications &amp; <span className="gradient-text">Honors</span>
            </h2>
            <p className="section-subtitle">
              Professional certifications, internship completions, and competitive academic
              achievements — click any certificate to view it in full.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Certificates with Images ── */}
        <div className="cert-gallery-grid">
          {certWithImages.map((cert, index) => (
            <AnimatedSection key={cert.id} delay={0.08 * index}>
              <motion.div
                className="cert-gallery-card"
                style={{ '--cert-color': cert.issuerColor, '--cert-bg': certBg[cert.issuer] || 'rgba(99,102,241,0.07)' }}
                whileHover={{ translateY: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                onClick={() => setActiveModal(cert)}
              >
                {/* Top accent */}
                <div
                  className="cert-top-accent"
                  style={{ background: `linear-gradient(90deg, ${cert.issuerColor}, transparent)` }}
                />

                {/* Certificate thumbnail */}
                <div className="cert-thumbnail-wrap">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-thumbnail"
                  />
                  <div className="cert-thumbnail-overlay">
                    <ZoomIn size={28} />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Info */}
                <div className="cert-gallery-info">
                  <span
                    className="cert-issuer-badge"
                    style={{
                      color: cert.issuerColor,
                      borderColor: `${cert.issuerColor}44`,
                      background: certBg[cert.issuer] || 'transparent',
                    }}
                  >
                    <ShieldCheck size={12} />
                    {cert.issuer}
                  </span>

                  <h3 className="cert-title">{cert.title}</h3>

                  <div className="cert-gallery-meta">
                    {cert.period && (
                      <span className="cert-meta-item">
                        <Calendar size={12} />
                        {cert.period}
                      </span>
                    )}
                    {cert.category && (
                      <span className="cert-category-tag">{cert.category}</span>
                    )}
                  </div>
                </div>

                {/* Click hint */}
                <div className="cert-click-hint">
                  <ZoomIn size={13} />
                  <span>Click to view</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Honors / Awards (no image) ── */}
        {certWithoutImages.length > 0 && (
          <AnimatedSection delay={0.2}>
            <div className="cert-honors-section">
              {certWithoutImages.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-card cert-honor-card"
                  whileHover={{ translateY: -4, borderColor: 'rgba(245,158,11,0.4)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <div className="cert-honor-top">
                    <div
                      className="cert-icon-wrap"
                      style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)' }}
                    >
                      <Medal size={22} style={{ color: '#f59e0b' }} />
                    </div>
                    <div>
                      <span
                        className="cert-issuer-badge"
                        style={{ color: '#f59e0b', borderColor: 'rgba(245,158,11,0.3)' }}
                      >
                        {cert.issuer}
                      </span>
                      <h3 className="cert-title" style={{ marginTop: '6px' }}>{cert.title}</h3>
                      <p className="cert-desc" style={{ marginTop: '6px' }}>{cert.description}</p>
                    </div>
                  </div>

                  {cert.honors && cert.honors.length > 0 && (
                    <div className="cert-honors-wrap">
                      {cert.honors.map((honor, hIdx) => (
                        <span key={hIdx} className="cert-honor-badge">
                          <Medal size={15} color="#f59e0b" fill="#f59e0b" />
                          <span>{honor}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* ── Lightbox ── */}
        {activeModal && (
          <CertModal cert={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </div>
    </section>
  );
}
