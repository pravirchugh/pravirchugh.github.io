import React from 'react';
import './Publications.css';

const publications = [
  {
    title: 'Patent Pending: AI-Assisted Code Retrieval and Generation System',
    summary:
      'A patent-pending approach designed to improve developer workflows across large enterprise codebases. The system combines semantic search, structural context extraction, and iterative generation to enable faster code understanding, retrieval, and assisted development.',
    tags: ['Patent', 'AI', 'Software Engineering'],
    link: '#',
    date: 'Filed 2025'
  },
  {
    title: 'LLM-Based Vulnerability Detection for Binary Programs',
    summary:
      'Research conducted at the UCLA Security Lab on using multi-agent large language models to detect software vulnerabilities in binary executables without access to source code. Achieved high accuracy in CWE classification and proposed a scalable framework for automated vulnerability analysis.',
    tags: ['AI', 'Security', 'Research'],
    link: 'https://arxiv.org/abs/2505.22010',
    date: 'May 2025'
  },
  {
    title: 'Measuring and Mitigating Bias in Large Language Models',
    summary:
      'Study from my research internship at Stanford HAI, analyzing bias propagation in modern transformer models. The work evaluated GPT-4 and LLaMA outputs to quantify semantic bias amplification and proposed methods for more transparent, fair AI systems.',
    tags: ['AI', 'Ethics', 'Research'],
    link: 'https://arxiv.org/abs/2404.07475',
    date: 'April 2024'
  },
  {
    title: 'Game Theory and Flight Bookings',
    summary:
      'An exploration of how concepts from game theory can explain airline pricing strategies and passenger decision-making, blending mathematics and behavioral economics to understand real-world market dynamics.',
    tags: ['Mathematics', 'Economics', 'Game Theory'],
    link: 'https://blog.wastudentmath.org/index.php/game-theory-and-flight-bookings/',
    date: 'February 2022'
  },
  {
    title: 'The Intersection of Mathematics and Computer Science',
    summary:
      'A perspective piece on how mathematical reasoning underpins algorithm design, computational efficiency, and problem-solving in computer science education and research.',
    tags: ['Mathematics', 'Computer Science', 'Education'],
    link: 'https://blog.wastudentmath.org/index.php/the-intersection-of-mathematics-and-computer-science/',
    date: 'January 2022'
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

