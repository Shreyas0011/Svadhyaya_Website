import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-container" style={{ position: 'relative' }}>
            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img 
                src="/images/about_image.png" 
                alt="Svadhyaya Community Space" 
                className="about-image" 
              />
            </motion.div>
            
            <motion.div 
              className="about-badge" 
              style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-blue)', zIndex: 10 }}
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            >
              <span>Est. 2023</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="section-subtitle" style={{ color: 'var(--color-teal)' }}>Our Story</h4>
            <h2 className="section-title">A Journey to Self</h2>
            
            <p className="about-lead">
              Svadhyaya means "Journey to Self." What began as a space for self-discovery has grown into a vibrant community where people of all ages come together to explore, create, and connect. In a world that often measures success through achievements and possessions, we believe that true fulfillment comes from understanding ourselves more deeply-our values, passions, strengths, experiences, and purpose.
            </p>
            
            <p>
              Today, Svadhyaya is more than a learning space - it is a community space that brings together parents, children, young adults, educators, artists, and lifelong learners. It is a place where local and sustainable art forms, movement practices, music, storytelling, and mindful living can be experienced in their true essence.
            </p>
            
            <p>
              We believe that learning happens not only through structured programs but also through conversations, collaboration, play, creativity, and shared experiences. Whether you come here to learn a new skill, explore your interests, connect with like-minded people, or simply spend time in an inspiring environment, you become a part of a community that values growth, authenticity, and conscious living.
            </p>

            <p style={{ fontWeight: 600, color: 'var(--color-blue)', marginTop: '1.5rem' }}>
              At Svadhyaya, we are building a space where learning is lifelong, community is intentional, and every journey begins with discovering yourself.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Organic divider */}
      <div className="organic-divider-bottom" style={{ pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60" 
            fill="none" 
            stroke="var(--color-teal)" 
            strokeWidth="3" 
            strokeOpacity="0.12"
            strokeLinecap="round"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
