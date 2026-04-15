import React from 'react';
import { motion } from 'framer-motion';
import simpleParallax from 'simple-parallax-js';
import './About.css';

const About = () => {
  // Initialize parallax effect
  React.useEffect(() => {
    const image = document.getElementsByClassName('parallax-image');
    if (image.length > 0) {
      new simpleParallax(image, {
        scale: 1.3,
        delay: 0.1,
      });
    }
  }, []);

  return (
    <section id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/src/assets/profile.jpg"
              alt="Sumit Verma"
              className="parallax-image"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Welcome to my portfolio! I'm a Full-Stack and Backend-focused undergraduate with hands-on experience in building scalable web applications, RESTful APIs, and AI-driven systems. Strong foundation in Python, JavaScript, databases, and system design.
            </p>

            <p>
              Currently pursuing my Bachelor of Engineering in Artificial Intelligence and Machine Learning at Visvesvaraya Technological University, I'm passionate about creating efficient and scalable web applications with a focus on backend systems.
            </p>

            <p>
              I'm seeking a Full-Stack / Backend Intern role to contribute to production-grade software systems and further develop my skills in building robust applications.
            </p>

            <a
              href="/src/assets/Sumit_Resume.pdf"
              className="btn tertiary"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;