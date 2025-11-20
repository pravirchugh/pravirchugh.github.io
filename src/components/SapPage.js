import React from 'react';
import { Brain, FileCode, Search, Repeat, LayoutTemplate, Presentation } from 'lucide-react';
import './SapPage.css';

function SapPage() {
  return (
    <div className="sap-page">
      <header className="sap-header">
        <p className="sap-eyebrow">Experience Spotlight</p>
        <h1 className="sap-title">SAP - AI/ML Intern</h1>
        <p className="sap-duration"><em>1.5 years, ongoing</em></p>
        <p className="sap-intro">
          I have spent the last 1.5 years at SAP Ariba working on AI systems that support large scale enterprise software.
          I started as a summer intern in 2024, continued part time during the school year, and returned full time for summer 2025 as an intern,
          contributing to projects that span intelligent retrieval, semantic search, developer assistance, and production level recommendation workflows.
          Much of my work has involved collaborating closely with platform, ML, and architecture teams to build systems that are reliable, scalable,
          and aligned with real product needs.
        </p>
      </header>

      <section className="sap-section">
        <div className="sap-section-header">
          <h2>Featured Projects</h2>
        </div>
        <div className="sap-section-body">
          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <Brain size={18} />
              <h3>Patent Pending: Intelligent Retrieval and Assisted Code Generation System</h3>
            </div>
            <p className="project-summary">
              A patent pending system that helps engineers navigate and work with large enterprise codebases more effectively by improving
              code retrieval, understanding, and assisted generation for complex logic and cross service dependencies.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                At SAP Ariba, I worked on a patent pending system designed to help engineers navigate and work more effectively with large
                enterprise codebases. The solution focuses on improving retrieval, understanding, and structured generation of code so
                developers can get feedback, write complex logic, and understand dependencies across services more efficiently. The system
                has been used to support an internal tool aimed at improving developer productivity in environments where scale and context
                depth matter. My contributions included structuring the approach, evaluating retrieval strategies, and shaping how context is
                processed and surfaced to the engineer.
              </p>
            </details>
          </article>

          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <FileCode size={18} />
              <h3>AI-Assisted Code Understanding and Developer Acceleration Platform</h3>
            </div>
            <p className="project-summary">
              An internal platform that summarizes Java methods and full call stacks so new engineers can ramp up faster. It cut onboarding
              and review cycles from about five days to roughly two for more than fifty engineers across key product teams.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                I led the development of an internal platform that summarizes Java methods and full call stacks to help new engineers
                onboard onto SAP Ariba codebases more efficiently. The platform uses runtime traces and regenerates summaries dynamically as
                code changes. I designed and built the AI layer that retrieves context, generates method explanations, and updates datasets
                on a recurring schedule. This system reduced onboarding and review cycles from roughly five days to approximately two days
                for more than fifty engineers across key product teams, and it enabled teams to work effectively before broader access to AI
                tooling was available.
              </p>
            </details>
          </article>

          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <Search size={18} />
              <h3>Semantic Search and Personalized Recommendation Workflow</h3>
            </div>
            <p className="project-summary">
              A semantic retrieval and recommendation pipeline for Guided Buying that replaced keyword search with embeddings based search.
              It achieved around 0.9 recall for top ten results and powers a lower cost personalization system across procurement workflows.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                I worked on transitioning Guided Buying from a traditional keyword based search system to one powered by embeddings and
                semantic retrieval. My focus was evaluating embedding models, measuring performance through recall and ranking metrics, and
                optimizing the tradeoff between embedding size, model efficiency, and retrieval relevance. We achieved an average recall of
                approximately 0.9 for the top ten search results. I also built the orchestration pipeline for personalized recommendations, which
                handled secure user data ingestion, daily training jobs, and automated data deletion for opt outs. This resulted in a
                scalable and lower cost personalization system, built to last long term.
              </p>
            </details>
          </article>
        </div>
      </section>

      <section className="sap-section">
        <div className="sap-section-header">
          <h2>Additional Contributions</h2>
        </div>
        <div className="sap-section-body">
          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <Repeat size={18} />
              <h3>AML to CDS Conversion System</h3>
            </div>
            <p className="project-summary">
              An internal tool that converts Ariba Markup Language (AML) files into Core Data Services (CDS) using large language models,
              reducing a full day of manual migration work to roughly ten minutes with high field level accuracy.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                Early on, I worked on an internal tool that converts Ariba Markup Language (AML) files into Core Data Services (CDS)
                definitions using large language models. The goal was to automate a process that typically required two specialized engineers
                and a full day of work. I helped curate training and evaluation data, tested different prompting strategies, and validated
                the output against real production examples. The final system could translate AML to CDS in roughly ten minutes with around
                97.4 percent field level accuracy on markup files, making it a practical accelerator for migration work.
              </p>
            </details>
          </article>

          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <LayoutTemplate size={18} />
              <h3>Figma to UI5 Architecture Collaboration</h3>
            </div>
            <p className="project-summary">
              Architecture and design collaboration for a system that helps SAP teams turn Figma designs into SAP UI5 components by aligning
              design metadata, documentation, and AI-driven generation with existing UI patterns.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                I contributed to the design of an internal system that helps SAP web development teams convert Figma designs into SAP UI5
                components. My role focused on architecture discussions and design flows, including how design metadata, component
                documentation, and layout information should be processed and passed into AI models. I helped think through how the system
                would align Figma structures with UI5 patterns, how to store and reuse UI documentation, and which parts of the workflow
                needed human oversight to keep the generated interfaces consistent with product standards.
              </p>
            </details>
          </article>

          <article className="sap-entry project-card">
            <div className="sap-section-heading project-header">
              <Presentation size={18} />
              <h3>Demos, Internal Enablement, and Fraud Detection Exploration</h3>
            </div>
            <p className="project-summary">
              Ongoing work to champion AI tooling across SAP Ariba teams through demos of internal platforms and external tools, and early
              exploration of a fraud detection agent for Ariba invoicing based on current research and design ideas.
            </p>
            <details className="project-details">
              <summary>Read more</summary>
              <p>
                Alongside project work, I spent time championing the use of AI tools across different SAP Ariba teams. I regularly demoed
                internal systems such as the code summarization platform, as well as external tools like GitHub Copilot, to help teams
                understand how AI could support development workflows. More recently, I have been exploring the design of a fraud detection
                agent for Ariba Invoicing, starting with a literature review and early design ideas for how an agent might flag suspicious
                invoices while fitting into the existing Invoicing architecture.
              </p>
            </details>
          </article>
        </div>
      </section>
    </div>
  );
}

export default SapPage;

