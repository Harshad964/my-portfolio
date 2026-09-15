import React from 'react';
import { FileText, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Resume() {
  const { resume } = personalInfo;

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="glass-card resume-card">
          <div className="resume-icon-circle">
            <FileText size={36} />
          </div>

          <h2 className="resume-card-title">
            <span className="gradient-text">{resume.heading}</span>
          </h2>

          <p className="resume-card-desc">
            {resume.description}
          </p>

          <div className="resume-actions-row">
            {/* View Resume: Opens PDF in new tab */}
            <a
              href={resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              id="resume-view-btn"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>

            {/* Download Resume: Direct PDF download */}
            <a
              href={resume.path}
              download={resume.fileName}
              className="btn btn-secondary btn-lg"
              id="resume-download-btn"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            <CheckCircle2 size={15} color="var(--accent-emerald)" />
            <span>Updated with current education, technical skills, and internship details</span>
          </div>
        </div>
      </div>
    </section>
  );
}
