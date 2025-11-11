import React from 'react';
import './Experience.css';

function Experience({ name, start, end, title, description, link }) {
  return (
    <div className="exp-container">
      <div className="exp-heading">
        <h3 className="organization-name">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="website-link">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        <div className="exp-meta">
          <p className="exp-meta-item">{start} - {end}</p>
          <p className="exp-meta-item">{title}</p>
        </div>
      </div>
      <p className="exp-description">{description}</p>
    </div>
  );
}

export default Experience;
