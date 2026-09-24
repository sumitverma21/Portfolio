import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'CodeGenie',
    stack: ['Python', 'LangGraph', 'Groq API', 'Streamlit'],
    points: [
      'Architected an autonomous multi-agent Generative AI platform using LangGraph and NLP pipelines to turn natural-language requirements into complete software projects.',
      'Configured four specialized LLM agents (Planner, Architect, Coder, Reviewer) with structured prompt engineering and iterative feedback loops for automated code validation.',
      'Orchestrated an agentic RAG and context-management workflow via Groq API, accelerating generation speed 4× with high-throughput inference.',
      'Automated multi-file dependency resolution, runtime error fixing, and interactive export through a responsive Streamlit UI.',
    ],
  },
  {
    id: 2,
    title: 'PresenceIQ',
    stack: ['Python', 'OpenCV', 'Computer Vision', 'Django', 'MySQL'],
    points: [
      'Researched and developed an automated computer vision and perception platform using facial recognition and digital image preprocessing.',
      'Optimized a real-time face detection and feature-extraction pipeline with OpenCV and LBPH, achieving sub-second verification at 95%+ accuracy.',
      'Constructed an automated inference pipeline backed by Django and MySQL, managing facial feature embeddings and attendance records.',
      'Presented peer-reviewed research at the Smartworld 2025 International Conference, earning the Best Presentation Award.',
    ],
  },
  {
    id: 3,
    title: 'Samyukt',
    stack: ['Node.js', 'Express', 'Tree-sitter AST', 'LLM/NLP', 'Docker'],
    points: [
      'Spearheaded the AI engine and backend architecture for an intelligent version-control platform, underlying a filed patent application as Co-Inventor.',
      'Formulated a 3-layer merge engine combining Tree-sitter AST structural parsing with LLM-driven semantic behavioral analysis for automated conflict resolution.',
      'Engineered enterprise REST APIs in Node.js and Express with AI confidence scoring (>85% auto-merge threshold) to detect side-effect mutations with zero regressions.',
    ],
  },
  {
    id: 4,
    title: 'SyncSpace',
    stack: ['React', 'Node.js', 'Socket.io', 'Yjs CRDT', 'Monaco', 'MongoDB'],
    points: [
      'Developed a real-time collaborative workspace with a multi-user whiteboard canvas and concurrent code editing as part of an internship program.',
      'Integrated Yjs CRDTs and Socket.io WebSockets for conflict-free, sub-50ms document synchronization across distributed client sessions.',
      'Implemented an isolated backend code-execution sandbox in Node.js supporting Python, C++, and JavaScript with runtime timeouts and process isolation.',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Work
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Projects across Generative AI, computer vision, and systems
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.article
              className="grid grid-cols-1 sm:grid-cols-[72px_1fr] gap-2 py-10 border-t border-border last:border-b"
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <div className="font-mono text-[0.95rem] text-text-faint sm:pt-1">
                {String(project.id).padStart(2, '0')}
              </div>
              <div>
                <div className="flex items-baseline gap-3.5 flex-wrap mb-[18px]">
                  <h3 className="text-[1.5rem] sm:text-[1.5rem] font-semibold -tracking-[0.02em] text-text">
                    {project.title}
                  </h3>
                </div>

                <ul className="mb-5">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 text-text-muted text-[0.98rem] mb-2.5 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:bg-border-strong before:rounded-full"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="font-mono text-[0.78rem] text-text-faint px-2.5 py-1 border border-border rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
