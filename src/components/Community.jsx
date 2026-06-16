import React from 'react';
import { motion } from 'framer-motion';
import './Community.css';

const roles = [
  { id: 1, title: "Children", desc: "Discovering through play", color: 'var(--color-teal)' },
  { id: 2, title: "Parents", desc: "Mindful parenting", color: 'var(--color-orange)' },
  { id: 3, title: "Educators", desc: "Holistic approaches", color: 'var(--color-yellow)' },
  { id: 4, title: "Artists", desc: "Co-creating inspiration", color: 'var(--color-green)' },
  { id: 5, title: "Young Adults", desc: "Finding purpose", color: 'var(--color-blue)' },
  { id: 6, title: "Lifelong Learners", desc: "Continuous growth", color: 'var(--color-lavender)' }
];

const Community = () => {
  return (
    <section id="community" className="community section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h4 className="section-subtitle" style={{ color: 'var(--color-teal)' }}>Our Ecosystem</h4>
          <h2 className="section-title">A Tapestry of Souls</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            At Svadhyaya, we believe that true growth happens in communion. Our ecosystem thrives on diversity, bringing together individuals from all walks of life.
          </p>
        </div>

        <div className="ecosystem-container">
          <div className="ecosystem-center">
            <h3>Svadhyaya</h3>
            <span>Community</span>
          </div>
          
          {roles.map((role, index) => {
            const angle = (index * 360) / roles.length;
            return (
              <motion.div 
                key={role.id}
                className="ecosystem-node"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{
                  '--angle': `${angle}deg`,
                  backgroundColor: role.color
                }}
              >
                <div className="node-content">
                  <h4>{role.title}</h4>
                  <p>{role.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-lg">
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-blue)' }}>Join the Community</button>
        </div>
      </div>
    </section>
  );
};

export default Community;
