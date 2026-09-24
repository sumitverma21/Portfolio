import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-[88px]">
      <div className="container-x max-w-[820px]">
        <motion.p
          className="font-mono text-[0.85rem] tracking-[0.1em] uppercase text-accent mb-5"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
        >
          AI/ML Engineer &amp; Full-Stack Software Engineer
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(2.8rem,8vw,5rem)] font-[650] leading-[1.02] -tracking-[0.03em] text-text mb-5"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
        >
          Sumit Verma
        </motion.h1>

        <motion.p
          className="text-[clamp(1rem,2.5vw,1.25rem)] text-text font-medium mb-6"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
        >
          Generative AI &nbsp;·&nbsp; Computer Vision &nbsp;·&nbsp; Multi-Agent Systems
        </motion.p>

        <motion.p
          className="text-[1.05rem] text-text-muted max-w-[58ch] mb-10"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
        >
          I build intelligent, scalable applications by combining Artificial
          Intelligence, Machine Learning, and modern software engineering. From
          AI-powered systems and multi-agent solutions to production-ready
          full-stack applications, I turn complex ideas into practical digital
          products.
        </motion.p>

        <motion.div
          className="flex gap-3.5 flex-wrap mb-11"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
        >
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-secondary">Get in Touch</a>
        </motion.div>

        <motion.div
          className="flex gap-[22px]"
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
        >
          <a
            href="https://github.com/sumitverma21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-faint text-[1.25rem] transition-all duration-200 ease-smooth hover:text-accent-strong hover:-translate-y-0.5"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/sumitverma04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-faint text-[1.25rem] transition-all duration-200 ease-smooth hover:text-accent-strong hover:-translate-y-0.5"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:sumitverma.workspace@mail.com"
            aria-label="Email"
            className="text-text-faint text-[1.25rem] transition-all duration-200 ease-smooth hover:text-accent-strong hover:-translate-y-0.5"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
