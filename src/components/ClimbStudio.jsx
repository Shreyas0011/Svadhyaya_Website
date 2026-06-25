import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Users, Brain, Sparkles, Activity, Leaf, Shield, Star, Globe, Heart, Music, RefreshCw, MessageCircle } from 'lucide-react';
import './ClimbStudio.css';

const spaces = [
  {
    id: 'climbing',
    title: 'Climbing',
    image: '/images/climbing.png',
    description: 'Indoor rock climbing programs designed for both kids and adults to build strength and confidence.',
    span: 2,
    color: 'var(--color-orange)',
    content: (
      <>
        <p>Ancient civilisations often used bouldering techniques to access difficult-to-reach areas for hunting and gathering.</p>
        <p>From there on Bouldering has evolved into a free form climbing that is performed on small rock formations or artificial rock with minimal use of equipment such as climbing shoes to help secure footholds, chalk to keep their hands dry and to provide a firmer grip, and bouldering mats to prevent injuries from falls. The sport gained popularity in the late 19th and early 20th centuries, especially in places like Fontainebleau in France and the Peak District in England.</p>
        
        <div className="studio-modal-image-wrapper">
          <img src="/images/climbing_user.jpg" alt="Bouldering Wall at Svadhyaya Climb Studio" className="studio-modal-image" />
        </div>

        <p>The challenge is to climb short but challenging bouldering routes or sequences of moves using balance, technique, strength, and problem-solving abilities.</p>
        
        <p>Once considered a subset of mountaineering, bouldering has evolved into an independent sport in its own right over the last twenty years. Though a relatively young sport, due to its diverse topography, India is fast becoming a popular destination for climbers worldwide while seeing an increase in the population of Indian climbers.</p>

        <div className="studio-modal-image-placeholder">
          <span>[ Image Placeholder: IMG_4022_edited.png ]</span>
        </div>

        <h3 className="studio-content-heading mt-md">The Philosophy of Ascent</h3>
        <p>Bouldering transcends physical fitness; it is a moving meditation that merges mental stimulation, deep focus, and profound social connection into a well-rounded journey for all ages.</p>
        
        <div className="benefits-grid mt-md">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Users size={24} /></div>
            <h4>A Shared Ascent</h4>
            <p>Fosters a strong sense of community. Climbers collaborate, offer encouragement, and share tips, making camaraderie a hallmark of the experience.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Brain size={24} /></div>
            <h4>Moving Meditations</h4>
            <p>Routes are like physical puzzles requiring you to strategize movements, enhancing problem-solving skills, concentration, and focus.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Sparkles size={24} /></div>
            <h4>A Path for Everyone</h4>
            <p>Brings joy and a sense of accomplishment to all fitness levels. Conquering new routes powerfully boosts self-confidence and self-esteem.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-green)' }}><Activity size={24} /></div>
            <h4>Conquering the Physical Self</h4>
            <p>Engages the whole body—arms, shoulders, back, core, and legs—providing rigorous strengthening, conditioning, flexibility, and mobility.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-yellow)' }}><Leaf size={24} /></div>
            <h4>Mindful Grounding</h4>
            <p>An effective pathway to mindfulness. The wall demands your complete presence, naturally helping to clear the mind and reduce anxiety.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: 'kalaripayattu',
    title: 'Kalaripayattu',
    image: '/images/learning_mindful.png',
    description: 'Traditional Indian martial art focusing on physical flexibility, mental focus, and discipline for all ages.',
    span: 1,
    color: 'var(--color-teal)',
    content: (
      <>
        <p>Kalaripayattu is a personal combat training system that includes exercises to develop sharp reflexes for unarmed combat and skilful fighting using sticks, daggers, knives, spears, swords and shields, urumi etc. It is also noted for its high-flying acrobatics. So, in learning Kalaripayattu, one learns unarmed fighting, wielding weapons and acrobatics.</p>

        <p>Kalaripayattu is one of the oldest surviving martial arts in India. Known as "the mother of all martial arts," Kalaripayattu is composed of two words, Kalari means “place of combat”, and Payattu means “fighting” in Malayalam.</p>

        <p>The origin of Kalaripayattu dates back to the 3rd century BC. The saint Pasrshurama, the sixth incarnation of Vishnu, is said to be the founder of Kalaripayattu, who established 42 Kalaris and taught twenty-one masters of these Kalaris to protect the land of Kerala</p>

        <div className="studio-modal-image-placeholder">
          <span>[ Image Placeholder: Captures.JPG ]</span>
        </div>

        <p>It spread and flourished during the 100-year war period between the powerful dynasties of Cholas, Cheras & Pandyas around the 11th century until the British rule in the 19th century banned it. From the late 20th century, the practice of Kalari has gradually gained popularity as part of the initiatives to promote traditional art forms in South India.</p>

        <p>Traditionally, the Kalari centres are like a temple. The Kalari is constructed four feet dug down the ground; the interiors of the Kalari are 42 feet in length and 21 feet in width. Towards the southwest corner, the poothara is placed and houses the guardian deity of Kalari. The seven-tier step resembling a pyramid symbolises the seven qualities a Kalari practitioner must possess.</p>

        <div className="studio-modal-image-placeholder">
          <span>[ Image Placeholder: svadhyaya_About Us_1.jpg ]</span>
        </div>

        <h3 className="studio-content-heading mt-md">Styles of Kalaripayattu</h3>
        <p>There are mainly two main styles of Kalarippayattu:</p>
        <ul className="studio-list">
          <li><strong>Vadakkan or Nothern Style:</strong> The Vadakkan Kalarippayattu is predominantly practised in the Malabar region of Kerala. It emphasises more on graceful body movement and weaponry.</li>
          <li><strong>Tekken or Southern Style:</strong> The Thekken Kalarippayattu or Adi Murai is practised mainly in the Travancore region. It involves more free-armed techniques & powerful movements.</li>
        </ul>
        <p>Irrespective of the type, high emphasis is given to the oil massage at the beginning of each practice, called Kalari Uzhichil, to enhance flexibility, improve mental sharpness and stimulate the flow of prana.</p>

        <h3 className="studio-content-heading mt-md">Stages of learning in Kalaripayattu</h3>
        <p>The practice of Kalaripayattu is divided mainly into four stages:</p>
        <ul className="studio-list">
          <li><strong>Maithari:</strong> Body Control Exercises</li>
          <li><strong>Kolthari:</strong> Practise wooden weapons</li>
          <li><strong>Ankathari:</strong> Practice of metal weapons</li>
          <li><strong>Verumkai:</strong> Bare hand fighting techniques</li>
        </ul>

        <p>That’s not all! The practitioner who has mastered the martial training in all four stages will be guided on Marma Chikitsa with traditional medicines. The healing system is based on the knowledge of Marmas (Vital spots) and the body’s energy channels. Kalari Gurus mainly developed medicinal applications to heal injuries while fighting. This also helps to improve the fighting capabilities of students.</p>

        <p>Today, Kalaripayattu is practised for self-defence and as a performing art, promoting physical fitness, flexibility, discipline, and coordination. It has gained popularity in India and worldwide as a unique and captivating martial art form with deep cultural and historical significance.</p>

        <h3 className="studio-content-heading mt-md">Benefits Of Kalaripayattu</h3>

        <div className="benefits-grid mt-md">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Activity size={24} /></div>
            <h4>Physical Fitness</h4>
            <p>Kalaripayattu is an excellent form of physical exercise that promotes strength, flexibility, agility, endurance, and overall fitness. The rigorous training routines involve various body movements, postures, and techniques that engage multiple muscle groups.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Shield size={24} /></div>
            <h4>Self-Defence</h4>
            <p>Kalaripayattu equips practitioners with self-defence skills as a martial art. The training emphasises practical and efficient combat techniques for protecting oneself in dangerous situations.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Brain size={24} /></div>
            <h4>Increased Focus and Concentration</h4>
            <p>Kalaripayattu requires intense focus and concentration to execute precise movements and respond quickly to opponents. Regular practice can enhance mental acuity, concentration, balance and control.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-green)' }}><Star size={24} /></div>
            <h4>Personality Development</h4>
            <p>Kalaripayattu strongly emphasises discipline, respect, humility, perseverance, and self-control. Practitioners learn to control their emotions and reactions during training and combat scenarios.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-yellow)' }}><Leaf size={24} /></div>
            <h4>Stress Relief</h4>
            <p>Kalaripayattu incorporates meditation and specific breathing techniques (Pranayama) to develop mental clarity, focus, and a connection between body and mind. This and the rigorous physical movements help reduce stress and promote a sense of calm and relaxation.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Globe size={24} /></div>
            <h4>Cultural Heritage</h4>
            <p>Kalaripayattu carries a deep cultural significance as one of the oldest martial arts in the world. Practising it allows individuals to connect with their heritage and India's rich history.</p>
          </div>
        </div>

        <p className="mt-md">Overall, Kalaripayattu offers a comprehensive physical and mental well-being approach while fostering a deep connection to India's cultural heritage. It remains a revered and cherished martial art with benefits that extend beyond the physical realm.</p>
      </>
    )
  },
  {
    id: 'bharatanatyam',
    title: 'Bharatanatyam',
    image: '/images/learning_art.png',
    description: 'Classical Indian dance forms emphasizing storytelling, rhythm, and expressive movement.',
    span: 1,
    color: 'var(--color-green)',
    content: (
      <>
        <p>Bharatanatyam is an Indian Classical Dance form and possibly India's oldest and the mother of many other Indian classical dance forms.</p>

        <p>The name was derived by joining two words, ‘Bharata’ and Natyam’, where ‘Natyam in Sanskrit means dance and ‘Bharata’ is a mnemonic comprising ‘bha’, ‘ra’ and ‘ta’, which respectively means ‘bhava’ that is emotion and feelings; ‘raga’ that is melody; and ‘tala’ that is rhythm. Thus, traditionally the word refers to a dance form where bhava, raga and tala are expressed.</p>

        <p>The earliest mention of this dance form is found in one of the five great epics of Tamil Literature, ‘Silappatikaram’, dating back to the 2nd century CE. The Shiva temple of Kanchipuram is decorated with carvings dating from the 6th to 9th centuries CE. The eastern gopuram of the 12th century Thillai Natarajar Temple, Chidambaram, of Tamil Nadu, dedicated to Lord Shiva, bears sculptures depicting 108 poses of Bharatanatyam, referred to as karanas in ‘Natya Shastra’, that are intricately carved in small rectangular panels. Another notable sculpture can be seen in Cave 1 of Karnataka’s Badami cave temples, dating back to the 7th century, where a 5 feet tall sculpture of Lord Shiva is depicted as Nataraja doing the Tandava dance. The 18 arms of the Shiva sculpture express mudras or hand gestures that are part of this dance form.</p>

        <p>Bharata Muni’s Sanskrit text on the performing arts called ‘Natya Shastra’ is the most comprehensive text available on this dance form dating from 200 BCE to 200 CE. It is said that Lord Brahma revealed Bharatanatyam to the sage Bharata who then encoded this holy dance form in Natya Shastra.</p>

        <h3 className="studio-content-heading mt-md">The Repertoire</h3>
        <p>The repertoire of this performance art is categorised into three brackets: 'Nritta', 'Nritya' and 'Natya'.</p>
        <ul className="studio-list">
          <li><strong>Nritta:</strong> is the technical aspects of the dance, used to build intricate combinations and rhythmic patterns that do not convey any specific meaning.</li>
          <li><strong>Nritya:</strong> or expressional dance, using facial expressions, highly stylised gestures, postures and body language to describe any mood.</li>
          <li><strong>Natya:</strong> is the dramatic storytelling.</li>
        </ul>

        <h3 className="studio-content-heading mt-md">History & Evolution</h3>
        <p>Devadasis performed Bharatanatyam only in temples, with trained dancers dedicated to the divine. This tradition dates back to the period between 300 BCE to 300 CE.</p>
        <p>The four Nattuvanars, namely Ponaiyah, Vadivelu, Sivanandam and Chinnaiya, who are renowned as Tanjaore Bandhu and who thrived in the Durbar of Maratha ruler, Sarfoji-II from 1798 to 1832, shaped up the modern day Bharatanatyam.</p>
        <p>With the advent of British Colonial Rule in the 18th Century, Christian missionaries and British officials banned the dance form from being performed in temples.</p>
        <p>However, as the Indian freedom movement progressed steadily during the early 20th century, an effort to revive Indian culture and tradition seethed with excitement among Indians. Eminent Bharatanatyam dancers like Arundale and Balasaraswati expanded the dance form out of temples and established it as a mainstream dance form as we see it today.</p>
        
        <p>Today there are five styles of Bharatanatyam: Pandanallur Style, Vazhuvoor Style, Kalakshetra Style, Melattur Style, and Kalamandalam Styles.</p>
        <p>During the performance, the Bharatnatyam dancer is accompanied by a nattuvanar (or taladhari), a vocalist who generally conducts the whole performance, which the guru often executes. The person can also play the cymbals or any other instrument. The music associated with Bharatanatyam is in South India’s Carnatic style, and the instruments played comprise cymbals, the flute, nadaswaram, mridangam and veena. The verses recited during the performance are in Sanskrit, Tamil, Kannada and Telugu.</p>

        <p className="text-sm mt-2 mb-md" style={{ color: 'var(--color-text-light)' }}><a href="https://www.culturalindia.net/indian-dance/classical/bharatnatyam.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-blue)', textDecoration: 'underline' }}>Source: Cultural India</a></p>

        <h3 className="studio-content-heading mt-md">Benefits Of Bharatanatyam</h3>
        <div className="benefits-grid mt-md">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Activity size={24} /></div>
            <h4>Physical Fitness</h4>
            <p>Bharatanatyam involves intricate footwork, complex body movements, and graceful postures, which provide an excellent form of physical exercise that improves flexibility, balance, stamina, and overall body coordination, including correct body alignment and posture.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Heart size={24} /></div>
            <h4>Emotional Expression</h4>
            <p>Bharatanatyam is a highly expressive dance form that allows dancers to convey a wide range of emotions through facial expressions and hand gestures (mudras). This helps in developing emotional intelligence and communication skills.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Leaf size={24} /></div>
            <h4>Stress Relief</h4>
            <p>The rhythmic movements and the connection between the body and music can help reduce stress and promote relaxation.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-green)' }}><Brain size={24} /></div>
            <h4>Cognitive Development</h4>
            <p>Learning Bharatanatyam's intricate sequences and rhythms involves memorisation and cognitive skills. Practising these sequences can improve memory, focus, and cognitive abilities. This helps develop self-confidence and self-esteem.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-yellow)' }}><Globe size={24} /></div>
            <h4>Cultural Connection</h4>
            <p>Bharatanatyam is deeply rooted in Indian culture and history. Practising this dance form provides a profound connection to the rich cultural heritage of India.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Sparkles size={24} /></div>
            <h4>Creativity and Artistic Expression</h4>
            <p>Dancers often have the opportunity to interpret and present stories uniquely, adding their personal touch to the art form.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Users size={24} /></div>
            <h4>Social Interaction</h4>
            <p>Joining a dance class or a dance group allows individuals to meet like-minded people and build social connections, fostering community and belonging.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Star size={24} /></div>
            <h4>Discipline and Patience</h4>
            <p>Learning Bharatanatyam requires discipline, dedication, and patience. Practising regularly and working on perfecting movements instils discipline and patience in dancers.</p>
          </div>
        </div>

        <p className="mt-md">Early age practice of Bharatanatyam is not just about training children to become professional dancers. It instils valuable life skills, cultural awareness, and emotional development, making it a well-rounded and enriching experience for young learners.</p>
      </>
    )
  },
  {
    id: 'mrudangam',
    title: 'Mrudangam',
    image: '/images/learning_music.png',
    description: 'Percussion classes focusing on the rich rhythmic traditions of Carnatic music for beginners and advanced students.',
    span: 1,
    color: 'var(--color-blue)',
    content: (
      <>
        <p>The Mrudangam is a traditional South Indian percussion instrument widely used in classical Carnatic Music concerts and Bharatanatyam performances.</p>

        <p>It is believed that Nandi was a master percussionist and used to play the mridangam during the performance of the "Taandavam" dance by Lord Shiva. Another story is that the mridangam was created to recreate the sound of Indra as he moved through the heavens on his elephant Airavata. That is why mridangam is called the 'Deva Vaadyam'.</p>

        <div className="studio-modal-image-placeholder">
          <span>[ Image Placeholder: WhatsApp Image 2023-05-10 at 7.03_edited.jpg ]</span>
        </div>

        <p>The word "Mrudangam" is derived from two Sanskrit words: "mrid" (clay) and "anga" (body), an ancient instrument which dates back to the period between 1500 to 500 BCE. As the name suggests, the traditional Mrudangam was made using clay, but the modern version is crafted from jackfruit wood.</p>

        <p>The origins of the Mrudangam can be found in ancient Indian scriptures and is believed to have evolved from</p>

        <p>The Mridangam is known for its rhythmic capabilities, versatility, and ability to produce a wide range of sounds using fingers and palms to create a variety of rhythmic patterns, known as "konnakol," on the drumheads.</p>

        <div className="studio-modal-image-placeholder">
          <span>[ Image Placeholder: IMG_4158.jpg ]</span>
        </div>

        <h3 className="studio-content-heading mt-md">Benefits of Mridangam</h3>
        <div className="benefits-grid mt-md">
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Music size={24} /></div>
            <h4>Rhythmic Sense</h4>
            <p>Playing the Mridangam involves mastering intricate rhythmic patterns and cycles. Practising and performing with this instrument help develop a strong sense of rhythm and timing.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Activity size={24} /></div>
            <h4>Hand-Eye Coordination</h4>
            <p>Mridangam players use their hands to strike different parts of the drumhead, and each hand plays a distinct role in creating the rhythm. It involves continuous hand movements, finger dexterity, and controlled use of the arms. This enhances hand-eye coordination and motor skills.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Brain size={24} /></div>
            <h4>Concentration and Focus</h4>
            <p>Mastering complex rhythmic compositions on the Mridangam requires deep concentration and focus. Regular practice enhances cognitive abilities and attention span.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-green)' }}><Leaf size={24} /></div>
            <h4>Stress Relief</h4>
            <p>Like any form of music, playing the Mridangam can serve as a stress-relieving activity. The rhythmic patterns and engagement with the instrument can promote relaxation and reduce stress.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-yellow)' }}><RefreshCw size={24} /></div>
            <h4>Promotes Ambidexterity</h4>
            <p>Playing the Mridangam involves using both hands to produce distinct sounds while coordinating with the rhythmic patterns. This enhances multitasking abilities and brain agility.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-orange)' }}><Sparkles size={24} /></div>
            <h4>Creativity and Expression</h4>
            <p>While adhering to the traditional rhythmic patterns, Mridangam players have the opportunity to add their creative flair and improvisation during performances.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-teal)' }}><Globe size={24} /></div>
            <h4>Cultural Connection</h4>
            <p>The Mridangam is deeply rooted in Indian culture and tradition, especially in classical Carnatic music. Learning to play the instrument provides a profound connection to Indian heritage.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-blue)' }}><Users size={24} /></div>
            <h4>Teamwork and Collaboration</h4>
            <p>In traditional Carnatic music concerts, the Mridangam player collaborates with vocalists and other musicians. This encourages teamwork and the ability to complement and support each other's performance.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon" style={{ backgroundColor: 'var(--color-green)' }}><MessageCircle size={24} /></div>
            <h4>Social Engagement</h4>
            <p>Playing the Mridangam provides opportunities to connect with other musicians, participate in musical gatherings, and engage in the rich music community.</p>
          </div>
        </div>
      </>
    )
  }
];

const ClimbStudio = () => {
  const navigate = useNavigate();
  const [selectedSpace, setSelectedSpace] = useState(null);

  const openSpaceModal = (space) => {
    setSelectedSpace(space);
    document.body.style.overflow = 'hidden';
  };

  const closeSpaceModal = () => {
    setSelectedSpace(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleOpenSpace = (e) => {
      const spaceId = e.detail;
      const space = spaces.find(s => s.id === spaceId);
      if (space) {
        openSpaceModal(space);
      }
    };

    window.addEventListener('openStudioModal', handleOpenSpace);
    return () => window.removeEventListener('openStudioModal', handleOpenSpace);
  }, []);

  return (
    <>
      <section id="climb-studio" className="climb-studio section-padding">
        <div className="container">
          {/* Section 1: The Climb Studio */}
          <div className="studio-header">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="section-subtitle">Explore Our Offerings</h4>
              <h2 className="section-title">The Climb Studio</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="studio-header-text"
            >
              <p>
                Discover our indoor bouldering space designed to challenge and strengthen both body and mind.
              </p>
            </motion.div>
          </div>

          <div className="space-grid" style={{ marginBottom: '5rem' }}>
            {spaces.filter(s => s.id === 'climbing').map((space, index) => (
              <motion.div 
                key={space.id} 
                className="space-card span-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openSpaceModal(space)}
                style={{ cursor: 'pointer' }}
              >
                <div className="space-image-wrapper" style={{ backgroundColor: space.color }}>
                  {space.image ? (
                    <img src={space.image} alt={space.title} className="space-image" />
                  ) : (
                    <div className="placeholder-text" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                      Placeholder
                    </div>
                  )}
                  <div className="space-overlay" style={{ '--hover-color': space.color }}></div>
                </div>
                <div className="space-content">
                  <div className="space-text">
                    <h3>{space.title}</h3>
                    <p>{space.description}</p>
                  </div>
                  <button className="space-btn" style={{ '--hover-bg': space.color }}>
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section 2: Svadhyaya */}
          <div className="studio-header">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="section-subtitle">Traditional Arts & Practices</h4>
              <h2 className="section-title">Svadhyaya</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="studio-header-text"
            >
              <p>
                Immerse yourself in our holistic movement and cultural practices including Kalaripayattu, Bharatanatyam, and Mrudangam.
              </p>
            </motion.div>
          </div>

          <div className="space-grid">
            {spaces.filter(s => s.id !== 'climbing').map((space, index) => (
              <motion.div 
                key={space.id} 
                className={`space-card span-${space.span}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openSpaceModal(space)}
                style={{ cursor: 'pointer' }}
              >
                <div className="space-image-wrapper" style={{ backgroundColor: space.color }}>
                  {space.image ? (
                    <img src={space.image} alt={space.title} className="space-image" />
                  ) : (
                    <div className="placeholder-text" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5, textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                      Placeholder
                    </div>
                  )}
                  <div className="space-overlay" style={{ '--hover-color': space.color }}></div>
                </div>
                <div className="space-content">
                  <div className="space-text">
                    <h3>{space.title}</h3>
                    <p>{space.description}</p>
                  </div>
                  <button className="space-btn" style={{ '--hover-bg': space.color }}>
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Modal Overlay */}
      <AnimatePresence>
        {selectedSpace && (
          <motion.div 
            className="studio-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSpaceModal}
          >
            <motion.div 
              className="studio-modal-content"
              data-lenis-prevent
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100vh', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="studio-modal-close" onClick={closeSpaceModal}>
                <X size={24} />
              </button>
              
              <div className="studio-modal-header" style={{ borderBottom: `4px solid ${selectedSpace.color}` }}>
                <h2>{selectedSpace.title}</h2>
              </div>
              
              <div className="studio-modal-body">
                {selectedSpace.content ? (
                  selectedSpace.content
                ) : (
                  <p className="studio-coming-soon">More detailed information about {selectedSpace.title} will be available soon. Please contact us for immediate inquiries!</p>
                )}
                
                <div className="studio-modal-cta" style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px dashed rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      closeSpaceModal();
                      navigate(`/booking?session=${selectedSpace.id}`);
                    }}
                    style={{ 
                      backgroundColor: selectedSpace.color, 
                      color: 'white', 
                      border: 'none',
                      padding: '1rem 3rem', 
                      fontSize: '1.1rem', 
                      fontWeight: '600',
                      borderRadius: 'var(--border-radius-sm)',
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    Book a {selectedSpace.title} Session
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClimbStudio;
