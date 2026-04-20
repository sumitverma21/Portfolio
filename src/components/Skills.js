import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Skills.css';

// Skills data based on resume
const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'OpenCV', level: 85 },
      { name: 'LBPH', level: 80 },
      { name: 'Haar Cascade', level: 75 },
    ],
  },
  {
    category: 'Tools & Concepts',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Postman', level: 85 },
      { name: 'Linux', level: 80 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'Computer Networks', level: 80 },
      { name: 'Software Engineering', level: 85 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Flatten skills data for the grid view
  const allSkills = skillsData.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      category: category.category
    }))
  );

  // Get unique categories for filtering
  const categories = ['all', ...new Set(skillsData.map(item => item.category.toLowerCase()))];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category.toLowerCase() === activeCategory);

  return (
    <section id="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        {/* Category filter buttons for grid view */}
        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Grid view for skills */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        {/* Original swiper view for detailed categories */}
        <div className="skills-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {skillsData.map((category, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="skill-category"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{category.category}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="skill-item" key={skillIndex}>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (index + skillIndex) * 0.1 }}
                            style={{ width: `${skill.level}%` }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;