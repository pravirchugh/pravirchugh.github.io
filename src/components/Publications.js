import React from 'react';
import './Publications.css';

// Sample publications data - replace with your actual publications
const publications = [
  {
    title: 'Analyzing Bias in Large Language Models',
    summary: 'Research on identifying and mitigating different types of bias in modern LLMs, conducted during my internship at Stanford HAI.',
    tags: ['AI', 'Research', 'Bias'],
    link: '#',
    date: 'September 2023'
  },
  {
    title: 'Building Scalable Web Applications',
    summary: 'Reflections on developing large-scale systems and best practices for modern web development.',
    tags: ['Software Engineering', 'Web Development'],
    link: '#',
    date: 'Coming Soon'
  }
];

function Publications() {
  return (
    <div className="publications-page">
      <div className="publications-header">
        <h1 className="page-title">Publications</h1>
        <p className="page-subtitle">Articles, research, and thoughts on software engineering and AI</p>
      </div>

      <div className="publications-grid">
        {publications.map((publication, index) => (
          <article key={index} className="publication-card">
            <div className="publication-content">
              <div className="publication-meta">
                <span className="publication-date">{publication.date}</span>
              </div>
              <h2 className="publication-title">
                {publication.link !== '#' ? (
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    {publication.title}
                  </a>
                ) : (
                  publication.title
                )}
              </h2>
              <p className="publication-summary">{publication.summary}</p>
              <div className="publication-tags">
                {publication.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="publication-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {publications.length === 0 && (
        <div className="publications-empty">
          <p>More publications coming soon!</p>
        </div>
      )}
    </div>
  );
}

export default Publications;

