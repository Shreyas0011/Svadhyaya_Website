import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Palette, Link, Users, Sparkles } from 'lucide-react';
import './MissionValues.css';

const values = [
  { id: 1, title: 'Self Discovery', icon: <Compass size={28} />, color: 'var(--color-blue)' },
  { id: 2, title: 'Curiosity', icon: <Lightbulb size={28} />, color: 'var(--color-teal)' },
  { id: 3, title: 'Creativity', icon: <Palette size={28} />, color: 'var(--color-orange)' },
  { id: 4, title: 'Connection', icon: <Link size={28} />, color: 'var(--color-yellow)' },
  { id: 5, title: 'Community', icon: <Users size={28} />, color: 'var(--color-green)' },
  { id: 6, title: 'Growth', icon: <Sparkles size={28} />, color: 'var(--color-blue)' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const MissionValues = () => {
  return (
    <section className="mission-values section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h4 className="section-subtitle" style={{ color: 'var(--color-orange)' }}>The Spiral Path</h4>
          <h2 className="section-title">Our Philosophy</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Following the natural progression of the Nautilus shell, our philosophy embraces continuous outward expansion rooted in deep inner awareness.
          </p>
        </div>

        <motion.div 
          className="philosophy-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <React.Fragment key={value.id}>
              <motion.div className="philosophy-step" variants={cardVariants}>
                <div className="step-icon" style={{ backgroundColor: value.color, color: 'white' }}>
                  {value.icon}
                </div>
                <h3 className="step-title">{value.title}</h3>
              </motion.div>
              
              {index < values.length - 1 && (
                <div className="step-connector">
                  <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,20 100,10" fill="none" stroke={value.color} strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValues;
