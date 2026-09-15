import React from 'react';
import { Award, Medal, CheckCircle, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Award size={14} />
            Verified Credentials
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Honors</span>
          </h2>
          <p className="section-subtitle">
            Professional coursework certifications and competitive academic achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card cert-card">
              <div>
                <span className="cert-issuer-badge">
                  <ShieldCheck size={13} />
                  {cert.issuer}
                </span>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
              </div>

              {cert.honors && cert.honors.length > 0 && (
                <div className="cert-honors-wrap">
                  {cert.honors.map((honor, hIdx) => (
                    <span key={hIdx} className="cert-honor-badge">
                      <Medal size={16} color="#f59e0b" />
                      <span>{honor}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
