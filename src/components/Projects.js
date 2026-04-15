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
  },
  {
    id: 2,
    title: 'Hospital Management System – Full-Stack Application',
    description: 'Built backend services for patient records, appointments, billing, and authentication. Designed and implemented RESTful APIs using Node.js and MySQL. Frontend built with React.js and Bootstrap. Integrated frontend with backend services following MVC architecture.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap', 'MVC'],
    image: '/src/assets/project2.jpg',
    demoLink: '#',
    githubLink: '#',
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
          Projects
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
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="btn small">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="btn small secondary">
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;