import React from 'react';
import { Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'StudentScholar',
    tagline: 'Developer Lead · Full stack platform',
    description:
      'StudentScholar was a full-stack notes sharing and class collaboration platform for students. I led four engineers, owning architecture, backend development, and the file upload middleware so classmates could organize notes, share resources, and collaborate in one place instead of scattered drives and chats.',
    links: [{ label: 'GitHub', href: 'https://github.com/WilliamChen14/StudentScholar' }],
    image: null
  },
  {
    title: 'UpVoice',
    tagline: 'LA Hacks 2024 · Civic AI',
    description:
      'To fit the Civic AI theme at LA Hacks, UpVoice let consumers share grievances about a company with its biggest shareholders, while AI grouped, prioritized, and surfaced the strongest stories. I built the similarity, impact, and urgency models plus concise reporting flows with Vue.js, Flask, MongoDB, SendGrid, and Gemini APIs.',
    links: [{ label: 'GitHub', href: 'https://github.com/pravirchugh/UpVoice' }],
    image: null
  },
  {
    title: 'Essay Echo',
    tagline: 'Hack on the Hill 2024 · Essay reuse',
    description:
      'Essay Echo helped students reuse college essays by finding thematic overlap with embeddings and clustering. Users uploaded drafts, saw similarity scores, and learned which passages could be repurposed, easing the load for first gen and underserved applicants.',
    links: [{ label: 'GitHub', href: 'https://github.com/pravirchugh/Essay-Echo' }],
    image: null
  },
  {
    title: 'Uncloseted',
    tagline: 'QWERHacks 2023 · Best Impact',
    description:
      'Uncloseted connected LGBTQ+ affirming healthcare providers with patients seeking safe care. I built the search and provider flows that highlighted specialties, locations, and communities served, helping the project earn the Best Impact Award.',
    links: [{ label: 'GitHub', href: 'https://github.com/pravirchugh/uncloseted' }],
    image: null
  },
  {
    title: 'AI vs Human Text Classifier',
    tagline: 'CS 162 Final Project · NLP',
    description:
      'For my Natural Language Processing class project, my team and I built a classifier that separated AI generated writing from human essays using large transformers plus a contrastive MLP head. It reached about 91.8% accuracy with an F1 of 0.916, and we evaluated fairness for non native writers.',
    links: [],
    image: null
  },
  {
    title: 'Random Walks, Node Embeddings, and GNNs',
    tagline: 'CS 145 Project · Graph Learning',
    description:
      'In my Data Mining course, my group and I explored graph representation learning with LINE, DeepWalk, Node2Vec, along with GCN, GraphSAGE, and GIN variants. We compared how each approach captured structure on citation and molecular datasets, balancing speed, expressiveness, and stability.',
    links: [],
    image: null
  }
];

function ProjectCard({ title, tagline, description, image, links }) {
  return (
    <article className={`project-card ${image ? 'has-media' : ''}`}>
      {image && (
        <div className="project-card-media">
          <img src={image.src} alt={image.alt || `${title} preview`} />
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-text">
          <h3>{title}</h3>
          {tagline && <p className="project-tagline">{tagline}</p>}
          <p className="project-description">{description}</p>
        </div>
        {links && links.length > 0 && (
          <div className="project-links">
            {links.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="project-link-button" aria-label={link.label}>
                {link.label === 'GitHub' ? <Github size={18} /> : link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p className="projects-intro">
          Outside of my work at SAP, I like exploring ideas through hackathons, class projects, and longer running builds. Here are some of
          the projects that have shaped how I think about AI, systems, and product.
        </p>
      </header>

      <section className="projects-section">
        <div className="projects-section-header">
          <h2>Project Highlights</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;

