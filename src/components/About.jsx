import React from 'react';
import { motion } from 'framer-motion';

const facts = [
  { label: 'Focus', value: 'Generative AI, NLP & Computer Vision' },
  { label: 'Education', value: 'B.E. AI & ML, VTU (2027)' },
  { label: 'Location', value: 'Bengaluru, Karnataka, India' },
  { label: 'Core stack', value: 'Python · PyTorch · TensorFlow · LangGraph' },
];

const About = () => {
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-text-muted text-[1.05rem] mb-5">
              I'm Sumit Verma, an Artificial Intelligence &amp; Machine Learning
              undergraduate passionate about building intelligent systems and
              real-world software. My work spans Machine Learning, Deep Learning,
              Computer Vision, Generative AI, LLMs, and Full-Stack Development.
            </p>
            <p className="text-text-muted text-[1.05rem] mb-5">
              I enjoy working across the entire development lifecycle — from designing
              interfaces and APIs to developing AI models, integrating intelligent
              features, and deploying complete applications. I'm particularly
              interested in building AI-powered products that are useful, scalable,
              and thoughtfully engineered, while continuously exploring new
              technologies and solving challenging problems.
            </p>

            <a href="/Sumit_Verma_Resume.pdf" className="btn btn-secondary mt-3" download>
              Download Resume
            </a>
          </motion.div>

          <motion.dl
            className="flex flex-col"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {facts.map((f) => (
              <div
                className="py-[18px] border-t border-border last:border-b"
                key={f.label}
              >
                <dt className="font-mono text-[0.75rem] tracking-[0.06em] uppercase text-text-faint mb-1.5">
                  {f.label}
                </dt>
                <dd className="text-text text-[0.98rem]">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default About;
