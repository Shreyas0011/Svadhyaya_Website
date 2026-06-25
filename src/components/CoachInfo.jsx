import React from 'react';
import { motion } from 'framer-motion';
import './CoachInfo.css';

const CoachInfo = () => {
  return (
    <section id="coach" className="coach-info section-padding">
      <div className="container">
        <div className="coach-grid">
          <motion.div 
            className="coach-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="coach-image-placeholder" style={{ backgroundColor: 'var(--color-light-teal)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', borderRadius: 'var(--border-radius-lg)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'center' }}>
                Bhavana Nagendra<br/>Photo Placeholder
              </span>
            </div>
            <div className="coach-badge" style={{ backgroundColor: 'var(--color-orange)', color: 'white' }}>
              <span>PCC ICF Certified</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="coach-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="section-subtitle" style={{ color: 'var(--color-teal)' }}>The Visionary</h4>
            <h2 className="section-title">Her Story</h2>
            
            <div className="coach-story-text">
              <p className="coach-lead">
                Bhavana Nagendra is a Chartered Accountant with over 10 years of experience. In retrospect what she really did like about her job was the opportunity to coach and mentor those on her team to understand their calling, set goals and create an action plan to achieve their goals!
              </p>
              
              <p>
                In 2019, when she had her daughter, AJ, she knew she wanted to be a part of AJ's every growing moment. She took a break from her career and spent the days with AJ. Being with AJ had her understand her values, question her belief systems, and restructure her life based on what mattered the most – living and being in the moment. As AJ was growing, it occurred to her that the schooling system as is wouldn't do justice to help AJ continue being a curious little explorer and learn as naturally as she was.
              </p>
              
              <p>
                One of the options she came across was home-schooling and it was at this time that the founder of an NGO and an alternative education school working with underprivileged children decided to launch a program for parents to understand a child's learning journey. After her initial discussion with the founder, she was given the opportunity to co-create and co-facilitate the program. The irony of the program was that it had nothing to do with children but worked on the belief systems of the parents – something she had learnt in her journey as a parent. This experience left her wanting to do more of this.
              </p>
              
              <p>
                The success of the program inspired her to get her Professional Coach Certification (PCC) from the ICF (International Coaching Federation). Her work is based on positive psychology, spiritual growth, self-reflection, understanding values, questioning belief systems, unlearning, unconditioning, acceptance and mindfulness. She is currently a visiting faculty at one of the KFI group schools and continues home-schooling AJ. She is a minimalist and has implemented a sustainable lifestyle in her urban home.
              </p>


              <p className="coach-highlight">
                In continuation of her quest to find a learning space that promotes freedom, acceptance and the joy of learning she has now created Svadhyaya's Climb Studio.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoachInfo;
