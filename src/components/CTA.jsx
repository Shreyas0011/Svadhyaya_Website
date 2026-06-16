import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section-padding">
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2>Your Journey Awaits</h2>
            <p>
              Step into a space designed for your growth, creativity, and connection. Like the nautilus shell, every new experience here adds another beautiful chamber to the structure of your life.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-orange)' }}>Begin Exploring</button>
              <button className="btn btn-outline" style={{ color: 'var(--color-bg)', borderColor: 'var(--color-bg)' }}>Join the Community</button>
            </div>
          </div>
          
          <div className="cta-shape-1"></div>
          <div className="cta-shape-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
