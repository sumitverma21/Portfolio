import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Best Presentation Award — Smartworld 2025 International Conference',
    detail:
      'Second place for the peer-reviewed research paper "PresenceIQ: AI-Driven Web-Based Automated Attendance System".',
  },
  {
    title: 'Co-Inventor, Patent Application',
    detail:
      'Cloud-Based Software Maintenance and Version Control Management System and Method.',
  },
];

const certifications = [
  { name: 'Data Science with GenAI', org: 'Innomatics Research Labs' },
  { name: 'Generative AI for Everyone', org: 'DeepLearning.AI' },
  { name: 'Introduction to Industry 4.0 and IIoT', org: 'NPTEL (Elite)' },
  { name: 'Machine Learning Fundamentals', org: 'Coursera' },
];

const headingCls =
  'font-mono text-[0.78rem] tracking-[0.08em] uppercase text-text-faint mb-4 mt-9 first:mt-0';
const itemCls =
  'flex flex-col gap-1 py-4 border-t border-border first:border-t-0 first:pt-0';

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="section-pad bg-raised border-y border-border"
    >
      <div className="container-x">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recognition
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Achievements, education, and certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className={headingCls}>Achievements</h3>
            <ul>
              {achievements.map((a) => (
                <li className={itemCls} key={a.title}>
                  <span className="text-text font-medium text-[1rem]">{a.title}</span>
                  <span className="text-text-muted text-[0.92rem]">{a.detail}</span>
                </li>
              ))}
            </ul>

            <h3 className={headingCls}>Education</h3>
            <ul>
              <li className={itemCls}>
                <span className="text-text font-medium text-[1rem]">
                  B.E. in Artificial Intelligence &amp; Machine Learning
                </span>
                <span className="text-text-muted text-[0.92rem]">
                  Visvesvaraya Technological University, Bengaluru · Expected 2027
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className={headingCls}>Certifications</h3>
            <ul>
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col gap-0.5 py-3.5 border-t border-border first:border-t-0 first:pt-0"
                >
                  <span className="text-text text-[0.98rem]">{c.name}</span>
                  <span className="font-mono text-[0.8rem] text-text-faint">{c.org}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
