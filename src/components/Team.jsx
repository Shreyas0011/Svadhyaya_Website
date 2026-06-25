import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, BookOpen, Sparkles, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import './Team.css';

const trainersData = [
  {
    id: 'bhavana_nagendra',
    name: 'Bhavana Nagendra',
    role: 'Founder - Svadhyaya Coach',
    color: 'var(--color-teal)',
    experience: 'Founder & Coach',
    bio: `Bhavana Nagendra is a Chartered Accountant who transitioned from corporate finance to life coaching and education. Her journey began with a desire to coach and mentor people to understand their calling, set goals, and create action plans to achieve them.

Following the birth of her daughter, she embarked on a journey of self-reflection, questioning belief systems, and living in the moment. This path led her to explore alternative education, co-facilitating programs for parents, and eventually completing her Professional Coach Certification (PCC) from the International Coaching Federation (ICF).

Her work is grounded in positive psychology, spiritual growth, self-reflection, unconditioning, acceptance, and mindfulness. Today, she is a minimal living advocate, a visiting faculty member at KFI schools, and the founder of Svadhyaya.`,
    highlights: [
      'PCC ICF Certified Coach',
      '10+ Years CA Experience',
      'Alternative Education Advocate',
      'Founder of Svadhyaya'
    ],
    philosophy: 'Unlearning and unconditioning are the first steps to discovering who you truly are.'
  },
  {
    id: 'janardhan',
    name: 'Janardhan',
    role: 'Co-founder',
    color: 'var(--color-orange)',
    experience: 'Co-founder',
    bio: `Janardhan is the co-founder of Svadhyaya. He is dedicated to building and sustaining a community space that fosters self-exploration, growth, and connection for learners of all ages.

He oversees operations, community building, and coordination across the various learning and movement programs, ensuring that Svadhyaya remains an inclusive and welcoming home for all.`,
    highlights: [
      'Co-founder of Svadhyaya',
      'Community Builder',
      'Operations Lead'
    ]
  },
  {
    id: 'deepthi_s_prakash',
    name: 'Deepthi S Prakash',
    role: 'Facilitator - Bharatanatyam & Natural Dyes',
    color: 'var(--color-green)',
    experience: '25+ Years Experience',
    bio: `My journey with Bharatanatyam began 25 years ago and over time, it has become an integral part of my life. I had the privilege of training under Guru Smt Narmada and continuing it with Guru Smt Nagashree in my formative years, and today I continue to learn under the tutelage of Guru Smt Poornima Gururaja. The stage and the classroom have shaped me in different ways, but it is in teaching that I discovered the joy of watching art open doors for others. For the past decade, I have been serving as an assistant faculty at Kalasindhu Academy, an experience that has deepened my conviction that art, when taught with care and intention, has the power to transform lives. This belief continues to guide me both as a student and as a teacher of Bharatanatyam.

Alongside dance, my love for textiles and sustainable clothing led me to the fascinating world of natural dyes. What began as simple curiosity has, over the past ten years, grown into a journey of constant exploration- experimenting with colors from the earth, learning from tradition, and sharing this knowledge with others through workshops, activities, and demonstrations. In 2020, I gave this passion a home by starting Jignyaasaa, a venture through which I create and sell naturally dyed products. 

For me, both Bharatanatyam and natural dyeing are not just creative practices, but living traditions- ones that root me in heritage, nurture my curiosity, and allow me to connect with people in meaningful ways.`,
    highlights: [
      '25 Years of Bharatanatyam Practice',
      '10 Years of Natural Dye Exploration',
      'Assistant Faculty at Kalasindhu Academy',
      'Founder of Jignyaasaa (Est. 2020)'
    ],
    philosophy: 'Bharatanatyam and natural dyeing are living traditions that root us in heritage, nurture curiosity, and connect people.'
  },
  {
    id: 'nikhil_fernandes',
    name: 'Nikhil Fernandes',
    role: 'Facilitator - Outdoors & Nature',
    color: 'var(--color-blue)',
    experience: 'Outdoors Guide',
    bio: `Nikhil Fernandes has been working in the education space and curating experiences for children and adults over the last couple of years. His own experience in a typical schooling system, which caters to specific types of people, has been a learning experience.

He currently facilitates urban walks, rock climbing workshops, night walks and camping trips through Wilderness Ways, an organisation whose focus is to give urban people the opportunity to reconnect with nature, learn about our surroundings and our senses through the natural world.

He designed and conducts a program called Public Space Learning that involves visiting public spaces around the city using only public transport and feel every step of the journey for the students of Abheek Academy. The goal is to allow children to experience what the meaning of their privilege is and to allow them to be out of their comfort zones. He also designed Campus time i.e. the time they spend on campus, exploring the possibilities of what can be done with the space using only the resources available around them. This includes, caring for and nurturing plants, creating spaces to engage with using only waste materials, and working on personal relationships with each child.

Art has always been an integral part of his life. He is currently a practicing freelance artist, with a focus on filmmaking and illustration work. He believes, there is no limit to exploring new possibilities, music, photography, sculpting and creating installations.

Climbing is something that he found in the past two years, to be incredible way to engage your whole mind and body in a single activity. Facing his emotions and limitations, has allowed for immense growth in his life.`,
    highlights: [
      'Guide at Wilderness Ways',
      'Creator of Public Space Learning Program',
      'Practicing Freelance Artist',
      'Nature & Outdoors Educator'
    ],
    philosophy: 'There is no limit to exploring new possibilities, and connecting with the natural world is vital to growth.'
  },
  {
    id: 'praveen_hariharan',
    name: 'Praveen Hariharan',
    role: 'Facilitator - Mridangam & Ghatam',
    color: 'rgba(186, 85, 211, 1)',
    experience: 'Graded AIR Artist',
    bio: `Praveen Hariharan is a classical percussionist who excels in the Mridangam and Ghatam. He trained under the tutelage of Vidwan Sri T.N. Shashikumar in Bengaluru and Vidwan Sri Madipakkam Murali in Chennai, following his parents' (Sri T.N. Hariharan and Smt. Mythil Hariharan of Tarakkad, Kerala) wishes.

With a track record of winning first prize in Mridangam competitions inside and outside Karnataka, he has given over 1,000 performances at various sabhas, temples, and prestigious music festivals across India. He is also a graded artist at All India Radio and has performed as a co-musician alongside numerous eminent classical musicians.

His recognized performances include the Thygaraja Araadhana festival in Thiruvaiyaru, Chembai Music Festival in Guruvayur, Sharada Sangeetha Sabha in Sringeri, the Margazhi Music Season in Chennai (including Krishna Gaana Sabha and Karthik Fine Arts), Tirupati Tirumala Devasvam (TTD), and prestigious venues across Bengaluru, Coimbatore, and Chennai.`,
    highlights: [
      'Graded Artist at All India Radio',
      'Over 1000 Performances Across India',
      'Manoranjini Award Recipient (2015)',
      'Best Mridangam Artist Award (2006)'
    ],
    philosophy: 'Rhythm is the heartbeat of classical music, connecting tradition, discipline, and performance.'
  },
  {
    id: 'akshay_kumar',
    name: 'Akshay Kumar KV',
    role: 'Facilitator - Bouldering',
    color: 'var(--color-orange)',
    experience: 'Strength & Conditioning Coach',
    bio: `Akshay Kumar KV is a dedicated outdoor enthusiast and climbing instructor who has built a career around his passion for movement. Recognizing early on that climbing and the outdoors perfectly channeled his natural energy and restlessness, he committed himself to mastering the sport.

Through his work with various climbing gyms, he had the opportunity to train directly under experienced mentors, honing his bouldering and rope skills. Today, he passes on this wealth of knowledge to both adults and children, helping them build confidence and strength on the wall.

In addition to climbing, Akshay is a certified Strength and Conditioning Coach, specializing in post-injury rehabilitation, enabling him to bring a deep understanding of body mechanics, safety, and recovery to his instruction.`,
    highlights: [
      'Certified Strength & Conditioning Coach',
      'Post-Injury Rehabilitation Specialist',
      'Professional Bouldering & Rope Instructor',
      'Mentored in Premium Climbing Gyms'
    ],
    philosophy: 'Climbing and the outdoors channel natural energy, turning physical movement into a tool for focus and growth.'
  },
  {
    id: 'om_rahul_dev',
    name: 'O.M. Rahul Dev',
    role: 'Facilitator - Kalaripayattu',
    color: 'var(--color-teal)',
    experience: 'Kalaripayattu Guru',
    bio: `Rahul Dev O. M. has over 25 years of dedicated training, practice, and teaching in the traditional martial art of Kalaripayattu. His journey began at a young age and has since evolved into a lifelong commitment to the mastery, preservation, and global promotion of this South Indian art form. He received his formal training under the esteemed guidance of Padmasree S.R.D. Prasad at Shri Bharath Kalari, Valapattanam, Kannur starting in 1999.

In 2022, he founded OMR Kalari in Karakkundu, Kannur District, Kerala, with the vision of preserving the traditional values of Kalaripayattu while making it accessible to modern learners. Over the years, he has trained numerous students across all age groups, helping them develop not only physical strength and agility but also mental focus, discipline, and a deep respect for tradition.

Rahul Dev actively promotes Kalaripayattu as a holistic practice that nurtures the body, mind, and spirit. He regularly conducts workshops, awareness programs, and cultural sessions to share the art's benefits with broader audiences—both in India and internationally, including key teaching engagements at Varkala Ranga Kala Kendram in Kerala and Sarvabhouma Gurukulam in Gokarna, Karnataka.`,
    highlights: [
      'Founder & Guru at OMR Kalari',
      '25+ Years of Dedicated Practice',
      'Trained under Padmasree S.R.D. Prasad',
      'Holistic Lifestyle Workshop Facilitator'
    ],
    philosophy: 'Kalaripayattu is a holistic practice that nurtures the body, mind, and spirit, honoring tradition in every step.'
  },
  {
    id: 'manasvini_s',
    name: 'Manasvini S',
    role: 'Facilitator: Integrated Arts',
    color: 'rgba(255, 182, 193, 1)',
    experience: 'Fine Artist & Illustrator',
    bio: `Manasvini S is a fine artist and illustrator who works primarily with inks, watercolours, pens, and other traditional media. Having practiced art for over a decade, she views visual expression as a vital way of understanding, documenting, and making sense of the world.

Her extensive experience as an illustrator and researcher includes a major collaboration with the ELICIT Foundation and Dolphin International School in Pulwama, Kashmir, where she conducted reflective drawing workshops with children to study the impact of narratives on learning. She also served as a consultant on the ground in Kashmir, compiling and illustrating a book exploring the relationship between conflict and education through stories of impact from Pulwama.

In addition, Manasvini has created illustrations, backdrops, and other visual content for "Mumbai in a Box"—an exhibit celebrating 100 years of the Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS) Museum in Mumbai, in collaboration with the Katkatha Puppet Arts Trust. She has also worked as a creative design intern at Bangalore-based Dabble, and designed and taught elective courses on visual journaling and art-making to high school students.`,
    highlights: [
      'Over a Decade of Fine Art Practice',
      'Illustrator for CSMVS Museum (Mumbai)',
      'Research & Drawing Workshops with ELICIT',
      'Art Educator at Dolphin International School'
    ],
    philosophy: 'Visual art and traditional media are powerful tools to express, connect, and make sense of the world.'
  }
];

const Team = () => {
  const navigate = useNavigate();
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openTrainerModal = (trainer) => {
    if (trainer.id === 'bhavana_nagendra') {
      navigate('/coach');
      window.scrollTo(0, 0);
      return;
    }
    setSelectedTrainer(trainer);
    document.body.style.overflow = 'hidden';
  };

  const closeTrainerModal = () => {
    setSelectedTrainer(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      // Ensure body scroll is restored on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="team-page section-padding">
      <div className="container">
        {/* Page Title */}
        <div className="team-header text-center">
          <h4 className="section-subtitle">The Facilitators</h4>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="subtitle-desc">
            Guided by dedicated practitioners, mentors, and experts who hold space for your self-exploration and growth. Click on any facilitator to view their profile.
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
              transition={{ duration: 0.5, delay: index * 0.05 }}
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
              </div>

              <div className="trainer-info">
                <div className="trainer-details-text">
                  <h3>{trainer.name}</h3>
                  <h4 style={{ color: trainer.color }}>{trainer.role}</h4>
                </div>
                <button 
                  className="trainer-card-btn" 
                  style={{ '--btn-color': trainer.color }}
                  aria-label={`Read about ${trainer.name}`}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trainer Modal Overlay */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div 
            className="trainer-modal-overlay"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTrainerModal}
          >
            <motion.div 
              className="trainer-modal-content"
              data-lenis-prevent
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100vh', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="trainer-modal-close" onClick={closeTrainerModal} aria-label="Close modal">
                <X size={24} />
              </button>

              <div className="trainer-modal-grid">
                <div className="trainer-modal-left" style={{ backgroundColor: selectedTrainer.color }}>
                  <div className="modal-avatar-wrapper">
                    <User size={64} className="modal-avatar-icon" />
                  </div>
                  <h2>{selectedTrainer.name}</h2>
                  <h3>{selectedTrainer.role}</h3>
                  {selectedTrainer.experience && (
                    <span className="modal-experience">{selectedTrainer.experience}</span>
                  )}
                </div>

                <div className="trainer-modal-right">
                  {selectedTrainer.bio && (
                    <div className="modal-section">
                      <h3><BookOpen size={18} /> About Me</h3>
                      {selectedTrainer.bio.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} style={{ marginBottom: '1.2rem' }}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {selectedTrainer.philosophy && (
                    <div className="modal-section">
                      <h3><Sparkles size={18} /> Philosophy</h3>
                      <p className="philosophy-quote">{selectedTrainer.philosophy}</p>
                    </div>
                  )}

                  {selectedTrainer.highlights && selectedTrainer.highlights.length > 0 && (
                    <div className="modal-section">
                      <h3><Award size={18} /> Highlights</h3>
                      <ul className="modal-highlights">
                        {selectedTrainer.highlights.map((highlight, idx) => (
                          <li key={idx}>
                            <CheckCircle size={18} style={{ color: selectedTrainer.color, marginRight: '8px' }} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                    <button 
                      className="btn btn-primary modal-book-btn"
                      style={{ 
                        backgroundColor: selectedTrainer.color, 
                        borderColor: selectedTrainer.color,
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onClick={() => {
                        closeTrainerModal();
                        navigate('/booking');
                      }}
                    >
                      Book a Session
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
