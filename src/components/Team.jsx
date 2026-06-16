import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Star, Compass, ArrowRight, ShieldCheck, Heart, User } from 'lucide-react';
import './Team.css';

const trainersData = [
  {
    id: 'bhavana_nagendra',
    name: 'Bhavana Nagendra',
    role: 'Founder & Life Coach',
    specialty: 'Mindful Grounding, Life Coaching, Alternative Learning',
    color: 'var(--color-teal)',
    bgLight: 'rgba(66, 193, 199, 0.08)',
    experience: 'ICF PCC Certified | 10+ Years CA & Mentorship',
    bookingId: 'kalaripayattu_adults',
    bio: 'Bhavana Nagendra is a Chartered Accountant who transitioned to life coaching, earning her Professional Coach Certification (PCC) from the International Coaching Federation (ICF). Her coaching philosophy integrates positive psychology, spiritual growth, mindfulness, and unconditioning.',
    philosophy: 'Creating a safe, non-judgmental space for self-reflection, unlearning, and finding values that allow us to live fully in the moment.',
    highlights: ['PCC ICF Certified', 'Homeschooling advocate', 'Visiting faculty at KFI school', 'Practicing psychologist']
  },
  {
    id: 'climbing_coach',
    name: 'Rohan Sharma',
    role: 'Head Climbing Coach',
    specialty: 'Bouldering (Adults & Kids), Route Setting, Conditioning',
    color: 'var(--color-orange)',
    bgLight: 'rgba(242, 101, 34, 0.08)',
    experience: 'National-level Climber | 8+ Years Coaching',
    bookingId: 'climbing_adults',
    bio: 'Rohan is a passionate climber and route setter who views bouldering as a physical puzzle and moving meditation. He helps students conquer fear, develop full-body strength, and cultivate laser-like focus on the climbing wall.',
    philosophy: 'Climbing is not about muscle; it is about balance, problem-solving, and a quiet mind cooperating with gravity.',
    highlights: ['Certified Route Setter', 'Youth climbing program designer', 'First-aid & wilderness rescue certified']
  },
  {
    id: 'kalari_guru',
    name: 'Guru Suresh Kumar',
    role: 'Kalaripayattu Master',
    specialty: 'Vadakkan Style Kalari, Weaponry, Marma Chikitsa',
    color: 'var(--color-teal)',
    bgLight: 'rgba(66, 193, 199, 0.08)',
    experience: 'Kalari Gurukkal | 15+ Years Practitioner',
    bookingId: 'kalaripayattu_adults',
    bio: 'Gurukkal Suresh trained in Kerala, mastering the Vadakkan and Tekken styles of Kalaripayattu. He teaches weapon handling, bare hand combat techniques, and Marma healing to foster physical agility and inner peace.',
    philosophy: 'Kalari is a path of humility. We train the body to become all eyes, preparing the mind to meet every obstacle with calm grace.',
    highlights: ['Master of 4 stages of Kalari', 'Specialist in traditional Marma Chikitsa', 'Acrobatics specialist']
  },
  {
    id: 'bharatanatyam_guru',
    name: 'Anjali Raghavan',
    role: 'Classical Dance Guru',
    specialty: 'Bharatanatyam (Nritta, Nritya & Natya)',
    color: 'var(--color-green)',
    bgLight: 'rgba(57, 181, 74, 0.08)',
    experience: 'Kalakshetra Alumna | 10+ Years Performer',
    bookingId: 'bharatanatyam',
    bio: 'Anjali is an exponent of the Kalakshetra style of Bharatanatyam. She focuses on teaching kids and adults how to express complex emotions (bhava) through classical gestures, postures, and footwork.',
    philosophy: 'Dance is a sacred connection. It is the visual expression of melody, rhythm, and devotion combining to tell stories that transcend words.',
    highlights: ['Kalakshetra Diploma in Dance', 'Choreographer of multiple traditional productions', 'Experienced with young children']
  },
  {
    id: 'mrudangam_guru',
    name: 'Vidwan K. Venkatesh',
    role: 'Mridangam Master',
    specialty: 'Carnatic Rhythm, Mrudangam Percussion, Konnakol',
    color: 'var(--color-blue)',
    bgLight: 'rgba(46, 49, 146, 0.08)',
    experience: 'A-Grade Percussionist | 12+ Years Teaching',
    bookingId: 'mrudangam',
    bio: 'Venkatesh is a seasoned percussionist who has accompanied top Carnatic vocalists. He teaches Mrudangam, timing cycles (talas), and the rhythmic language of Konnakol to students of all levels.',
    philosophy: 'Rhythm is the pulse of the universe. Playing the mridangam is about learning to synchronize your breathing with the cosmic tempo.',
    highlights: ['Accompanying artist at major sabhas', 'All India Radio graded artist', 'Expert in rhythm theory']
  },
  {
    id: 'arts_facilitator',
    name: 'Meera Sen',
    role: 'Integrated Arts Instructor',
    specialty: 'Creative Expression, Fine Arts, Storytelling for Kids',
    color: 'rgba(186, 85, 211, 1)',
    bgLight: 'rgba(186, 85, 211, 0.08)',
    experience: 'BFA Fine Arts | 6+ Years Child Art Educator',
    bookingId: 'integrated_arts',
    bio: 'Meera runs child education workshops that integrate painting, clay modeling, and drama. She encourages children to express their inner thoughts and explore their environment creatively without rigid guidelines.',
    philosophy: 'Every child is an artist. The goal is to provide a rich space where their natural curiosity and imagination can take form.',
    highlights: ['Fine Arts graduate', 'Alternative education consultant', 'Exhibited child art curator']
  }
];

const Team = () => {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openTrainerModal = (trainer) => {
    setSelectedTrainer(trainer);
    document.body.style.overflow = 'hidden';
  };

  const closeTrainerModal = () => {
    setSelectedTrainer(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="team-page section-padding">
      <div className="container">
        {/* Page Title */}
        <div className="team-header text-center">
          <h4 className="section-subtitle">The Facilitators</h4>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="subtitle-desc">
            Guided by dedicated practitioners, mentors, and experts who hold space for your self-exploration and growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {trainersData.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              className="trainer-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openTrainerModal(trainer)}
            >
              <div className="trainer-image-wrapper">
                <div 
                  className="trainer-image-placeholder"
                  style={{ backgroundColor: trainer.color }}
                >
                  <User size={64} className="trainer-avatar-icon" />
                  <span className="placeholder-lbl">Photo Placeholder</span>
                </div>
                <div className="trainer-overlay">
                  <span>View Bio</span>
                </div>
              </div>

              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <h4 style={{ color: trainer.color }}>{trainer.role}</h4>
                <p className="trainer-specialty">{trainer.specialty}</p>
                <div className="trainer-footer-action">
                  <span>Read Profile</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trainer Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            className="trainer-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTrainerModal}
          >
            <motion.div
              className="trainer-modal-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="trainer-modal-close" onClick={closeTrainerModal}>
                <X size={24} />
              </button>

              <div className="trainer-modal-grid">
                {/* Left Side Visual */}
                <div 
                  className="trainer-modal-left"
                  style={{ backgroundColor: selectedTrainer.color }}
                >
                  <div className="modal-avatar-wrapper">
                    <User size={80} className="modal-avatar-icon" />
                  </div>
                  <h2>{selectedTrainer.name}</h2>
                  <h3>{selectedTrainer.role}</h3>
                  <span className="modal-experience">{selectedTrainer.experience}</span>
                </div>

                {/* Right Side Info */}
                <div className="trainer-modal-right">
                  <div className="modal-section">
                    <h3><User size={18} /> About Facilitator</h3>
                    <p>{selectedTrainer.bio}</p>
                  </div>

                  <div className="modal-section">
                    <h3><Compass size={18} /> Training Philosophy</h3>
                    <p className="philosophy-quote">"{selectedTrainer.philosophy}"</p>
                  </div>

                  <div className="modal-section">
                    <h3><Award size={18} /> Core Focus & Highlights</h3>
                    <ul className="modal-highlights">
                      {selectedTrainer.highlights.map((h, i) => (
                        <li key={i}>
                          <ShieldCheck size={16} style={{ color: selectedTrainer.color }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <button
                      className="btn btn-primary modal-book-btn"
                      onClick={() => {
                        closeTrainerModal();
                        navigate(`/booking?session=${selectedTrainer.bookingId}`);
                      }}
                      style={{ backgroundColor: selectedTrainer.color, color: 'white' }}
                    >
                      Book a Session <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
