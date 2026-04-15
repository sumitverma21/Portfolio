import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Sumit Verma. All rights reserved.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://linkedin.com/in/sumitverma04" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;