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
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Sumit Verma. All rights reserved.</p>
            <p className="footer-location">Bangalore, India</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/sumitverma04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sumitverma04" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:sumitverma@example.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>Built with React & ❤️</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;