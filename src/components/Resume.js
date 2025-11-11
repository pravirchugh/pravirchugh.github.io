import React, { useState } from 'react';
import ResumePDF from './Resume.pdf';
import './Resume.css';

function Resume() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1 className="page-title">Resume</h1>
        <p className="page-subtitle">View or download my resume</p>
      </div>

      <div className="resume-actions">
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
        <button
          onClick={() => setShowPDF(!showPDF)}
          className="resume-button secondary"
        >
          {showPDF ? 'Hide PDF Viewer' : 'Show PDF Viewer'}
        </button>
      </div>

      {showPDF && (
        <div className="resume-viewer">
          <embed
            src={`${ResumePDF}#toolbar=1`}
            type="application/pdf"
            className="resume-embed"
            title="Resume PDF"
          />
        </div>
      )}
    </div>
  );
}

export default Resume;
