import React from 'react';
import Experience from './Experience';
import './ExperienceList.css';

const experiences = [
  {
    name: 'SAP',
    start: 'June 2024',
    end: 'Present',
    title: 'AI/ML Intern',
    description:
      'Contributed to large-scale procurement systems at SAP Ariba, focusing on AI-driven automation and reliability. Most recently built an orchestration platform connecting users to personalized recommendations through secure data pipelines and model workflows. Earlier, helped design real-time code summarization services and semantic search systems that improved efficiency and recall across global engineering teams.',
    link: '/sap'
  },
  {
    name: 'UCLA Security Lab',
    start: 'November 2024',
    end: 'June 2025',
    title: 'Research Assistant',
    description:
      'Developed a multi-agent LLM framework to detect software vulnerabilities in compiled binaries by analyzing execution paths and memory behavior. Achieved 92% accuracy in multi-class CWE classification and co-authored a paper submitted to ACM CCS 2025 on secure and transparent intelligent systems.',
    link: 'https://www.ytian.info/research'
  },
  {
    name: 'Bruin AI @ UCLA',
    start: 'October 2023',
    end: 'June 2025',
    title: 'Director of External Affairs',
    description:
      'Led partnerships and outreach for UCLA’s largest AI organization, connecting students with industry professionals and research mentors. Organized workshops and presentations on large language models and fine-tuning techniques for over 40 members.',
    link: 'https://bruinai.org/'
  },
  {
    name: 'Stanford University Human-Centered Artificial Intelligence (HAI)',
    start: 'June 2023',
    end: 'September 2023',
    title: 'AI Research Intern',
    description:
      'Collaborated with researchers from Stanford HAI and the Young Data Scientists League to study bias propagation in large language models. Fine-tuned transformer architectures on GPT-4 and LLaMA outputs and analyzed over 100K generations to measure semantic bias amplification across tasks.',
    link: 'https://hai.stanford.edu/'
  }
];


function ExperienceList() {
  return (
    <div className="experience-list">
      <div className="experience-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">My professional journey and contributions</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            name={experience.name}
            start={experience.start}
            end={experience.end}
            title={experience.title}
            description={experience.description}
            link={experience.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
