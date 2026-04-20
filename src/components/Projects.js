import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Projects data based on resume
const projectsData = [
  {
    id: 1,
    title: 'PresenceIQ – AI-Driven Automated Attendance System',
    description: 'Developed a full-stack web application for automated attendance using facial recognition. Implemented secure backend services using Django, REST APIs, and JWT authentication. Built real-time face recognition pipeline using OpenCV and LBPH. Optimized database queries and API response times for scalability.',
    technologies: ['Python', 'Django', 'OpenCV', 'LBPH', 'Haar Cascade', 'REST APIs', 'JWT'],
    image: '/src/assets/project1.jpg',
    demoLink: '#',
    githubLink: '#',
    features: [
      'Facial Recognition Pipeline',
      'Secure Authentication',
      'Real-time Processing',
      'Database Optimization'
    ]
  },
  {
    id: 2,
    title: 'Hospital Management System – Full-Stack Application',
    description: 'Built backend services for patient records, appointments, billing, and authentication. Designed and implemented RESTful APIs using Node.js and MySQL. Frontend built with React.js and Bootstrap. Integrated frontend with backend services following MVC architecture.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap', 'MVC'],
    image: '/src/assets/project2.jpg',
    demoLink: '#',
    githubLink: '#',
    features: [
      'Patient Records Management',
      'Appointment Scheduling',
      'Billing System',
      'RESTful API Integration'
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-type">Full Stack</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="btn small">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubLink} className="btn small secondary">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>Want to see more of my work?</p>
          <a href="#contact" className="btn primary">View All Projects</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;