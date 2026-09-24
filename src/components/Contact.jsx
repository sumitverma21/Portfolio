import React from 'react';
import { motion } from 'framer-motion';

const channels = [
  {
    label: 'Email',
    value: 'sumitverma.workspace@mail.com',
    href: 'mailto:sumitverma.workspace@mail.com',
    icon: 'fas fa-envelope',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sumitverma04',
    href: 'https://linkedin.com/in/sumitverma04',
    icon: 'fab fa-linkedin-in',
  },
  {
    label: 'GitHub',
    value: 'github.com/sumitverma21',
    href: 'https://github.com/sumitverma21',
    icon: 'fab fa-github',
  },
  {
    label: 'Location',
    value: 'Bengaluru, Karnataka, India',
    href: null,
    icon: 'fas fa-location-dot',
  },
];

const cardBase =
  'flex items-center gap-4 px-5 py-[18px] border border-border rounded-[10px] bg-raised transition-all duration-200 ease-smooth';

const Contact = () => {
  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Open to AI/ML roles, research collaborations, and interesting problems
        </motion.h2>

        <motion.p
          className="text-text-muted text-[1.05rem] max-w-[56ch] mb-11"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The fastest way to reach me is email. I'm happy to talk about Generative AI,
          computer vision, or building AI systems for production.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {channels.map((c, i) => {
            const content = (
              <>
                <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-md bg-accent-dim text-accent-strong text-[1rem]">
                  <i className={c.icon}></i>
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="font-mono text-[0.72rem] tracking-[0.06em] uppercase text-text-faint">
                    {c.label}
                  </span>
                  <span className="text-text text-[0.96rem] overflow-hidden text-ellipsis whitespace-nowrap">
                    {c.value}
                  </span>
                </span>
              </>
            );
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {c.href ? (
                  <a
                    className={`${cardBase} hover:border-accent hover:-translate-y-0.5`}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={`${cardBase} cursor-default`}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.a
          href="mailto:sumitverma.workspace@mail.com"
          className="btn btn-primary"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <i className="fas fa-envelope"></i> Send me an email
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
