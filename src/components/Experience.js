import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

// Education and experience data based on resume
const experienceData = [
  {
    id: 1,
    company: 'Visvesvaraya Technological University — Bengaluru, Karnataka',
    position: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
    duration: 'Aug 2023 – May 2027',
    description: '5th-semester student with focus on backend systems and full-stack development. Relevant Coursework: Data Structures & Algorithms, Database Systems, Computer Networks, Theory of Computation, Artificial Intelligence, Software Engineering.',
  },
  {
    id: 2,
    company: 'Udemy',
    position: 'Full Stack Web Development Certification',
    duration: 'Completed',
    description: 'Comprehensive certification covering modern web development technologies and best practices.',
  },
  {
    id: 3,
    company: 'Coursera',
    position: 'Machine Learning Fundamentals Certification',
    duration: 'Completed',
    description: 'Fundamentals of machine learning algorithms and practical applications.',
  },
  {
    id: 4,
    company: 'Scaler',
    position: 'Java Course: Mastering the Fundamentals',
    duration: 'Completed (11/01/2024)',
    description: 'Comprehensive Java programming course covering core concepts and advanced topics.',
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.position}</h3>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;