import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Deep Learning & ML',
    items: [
      'PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'CNNs',
      'Transfer Learning', 'Model Training', 'Fine-Tuning', 'Perception',
      'Model Evaluation', 'Data Pipelines',
    ],
  },
  {
    title: 'Generative AI & NLP',
    items: [
      'NLP', 'LLM Integration', 'LangGraph', 'Multi-Agent Systems',
      'RAG Systems', 'Prompt Engineering', 'Transformers', 'Groq API',
    ],
  },
  {
    title: 'API Development & Tools',
    items: [
      'REST APIs', 'FastAPI', 'Express.js', 'Docker',
      'WebSockets (Socket.io)', 'Git', 'MongoDB', 'Streamlit',
    ],
  },
  {
    title: 'Languages & Data',
    items: [
      'Python', 'C++', 'SQL (PostgreSQL, MySQL)', 'JavaScript',
      'Pandas', 'NumPy', 'Data Structures & Algorithms',
    ],
  },
  {
    title: 'Statistical & Core AI',
    items: [
      'Statistical Analysis', 'Linear Models', 'Multimodal AI',
      'System Design', 'Data Transformation', 'Model Optimization',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-pad bg-raised border-y border-border">
      <div className="container-x">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Tools and techniques I work with
        </motion.h2>

        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-3.5 sm:gap-8 py-7 border-t border-border first:border-t-0"
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="text-[1.05rem] font-semibold text-text -tracking-[0.01em]">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[0.82rem] text-text-muted px-3 py-1.5 border border-border-strong rounded-md bg-elevated transition-colors duration-200 ease-smooth hover:border-accent hover:text-accent-strong"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
