import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper spiral-mask"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="about-image-placeholder" style={{ backgroundColor: 'var(--color-sand)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
              <span style={{ fontFamily: 'var(--font-heading)', color: 'rgba(0,0,0,0.1)', fontSize: '1.5rem', textTransform: 'uppercase' }}>Placeholder</span>
            </div>
            <div className="about-badge" style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-blue)' }}>
              <span>Est. 2026</span>
            </div>
          </motion.div>
          
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
              Svadhyaya means "Journey to Self." What began as a space for self-discovery has grown into a vibrant community where people of all ages come together to learn, explore, create, and connect.
            </p>
            
            <p>
              In a world that often measures success through achievements and possessions, we believe that true fulfillment comes from understanding ourselves more deeply-our values, passions, strengths, experiences, and purpose. Through reflection, meaningful conversations, and shared experiences, we create opportunities for individuals to reconnect with themselves and the world around them.
            </p>
            
            <p>
              The Climb Studio was born from a simple realization: people were seeking spaces that nurtured authentic growth, conscious living, creativity, and meaningful human connection. They were looking for environments where curiosity is encouraged, exploration is celebrated, and learning extends beyond traditional classrooms.
            </p>

            <p>
              Today, Svadhyaya is more than a learning center-it is a community space that brings together parents, children, young adults, educators, artists, and lifelong learners. It is a place where local and sustainable art forms, movement practices, music, storytelling, and mindful living can be experienced in their true essence.
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
      <div className="organic-divider-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C320,120 420,0 720,60 C1020,120 1120,0 1440,60 L1440,120 L0,120 Z" fill="var(--color-bg-alt)"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
