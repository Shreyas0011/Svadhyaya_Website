import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ZoomIn, X, Sparkles, ArrowRight } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const schedules = [
    {
      id: 'climbing',
      title: 'The Climb Studio',
      subtitle: 'Bouldering (Adults & Kids)',
      image: '/images/class_schedule_1.jpg',
      color: 'var(--color-orange)',
      accentBg: 'rgba(242, 101, 34, 0.1)'
    },
    {
      id: 'svadhyaya',
      title: 'Svadhyaya Space',
      subtitle: 'Kalari, Arts, Music & Dance',
      image: '/images/class_schedule_2.jpg',
      color: 'var(--color-teal)',
      accentBg: 'rgba(66, 193, 199, 0.1)'
    }
  ];

  return (
    <div className="schedule-page">
      {/* Background Graphic Elements */}
      <div className="schedule-bg-elements">
        {/* Floating Clouds */}
        <div className="cloud-element cloud-1">
          <svg viewBox="0 0 100 60" fill="currentColor">
            <path d="M20,40 A15,15 0 0,1 35,25 A20,20 0 0,1 70,25 A15,15 0 0,1 85,40 A10,10 0 0,1 75,50 L25,50 A10,10 0 0,1 20,40 Z" />
          </svg>
        </div>
        <div className="cloud-element cloud-2">
          <svg viewBox="0 0 100 60" fill="currentColor">
            <path d="M20,40 A15,15 0 0,1 35,25 A20,20 0 0,1 70,25 A15,15 0 0,1 85,40 A10,10 0 0,1 75,50 L25,50 A10,10 0 0,1 20,40 Z" />
          </svg>
        </div>

        {/* Floating Shell Outline */}
        <div className="shell-logo-element">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50" strokeLinecap="round"/>
            <path d="M50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50" strokeLinecap="round"/>
            <path d="M50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50" strokeLinecap="round"/>
            <path d="M50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40" strokeLinecap="round"/>
            <path d="M50 90V80M50 20V10M10 50H20M80 50H90" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Magic Stars */}
        <div className="star-element star-1"><Sparkles size={24} /></div>
        <div className="star-element star-2"><Sparkles size={18} /></div>
        <div className="star-element star-3"><Sparkles size={20} /></div>

        {/* Illustrations (Faded in Background) */}
        <div className="character-element dancer-illustration">
          <svg viewBox="0 0 200 300" fill="currentColor">
            <circle cx="100" cy="50" r="15" />
            <path d="M100 65 L100 130 L60 180 L40 170 M100 130 L140 180 L160 170" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M100 85 L60 75 L40 50 M100 85 L140 75 L160 100" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M100 130 C100 190 60 210 55 270 M100 130 C100 190 140 210 145 270" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="character-element drum-illustration">
          <svg viewBox="0 0 100 160" fill="currentColor">
            <ellipse cx="50" cy="20" rx="30" ry="12" />
            <path d="M20 20 L20 140 A30 12 0 0 0 80 140 L80 20 Z" />
            <ellipse cx="50" cy="140" rx="30" ry="12" fill="#EAEAEA" />
            <line x1="30" y1="25" x2="30" y2="135" stroke="#444" strokeWidth="2" />
            <line x1="50" y1="32" x2="50" y2="148" stroke="#444" strokeWidth="2" />
            <line x1="70" y1="25" x2="70" y2="135" stroke="#444" strokeWidth="2" />
          </svg>
        </div>

        <div className="character-element palette-illustration">
          <svg viewBox="0 0 120 100" fill="currentColor">
            <path d="M20 50 C20 25 50 10 80 20 C100 28 110 50 100 70 C90 85 60 90 40 85 C25 80 20 65 20 50 Z" />
            <circle cx="35" cy="50" r="10" fill="var(--color-bg)" />
            <circle cx="45" cy="30" r="8" fill="var(--color-orange)" />
            <circle cx="65" cy="25" r="8" fill="var(--color-teal)" />
            <circle cx="85" cy="35" r="8" fill="var(--color-blue)" />
            <circle cx="85" cy="60" r="8" fill="var(--color-green)" />
          </svg>
        </div>

        <div className="character-element climbing-illustration">
          <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M10 110 L40 70 L60 90 L90 30 L110 50" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="90" cy="20" r="5" fill="currentColor" />
            <circle cx="40" cy="60" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="schedule-container container">
        {/* Title Block */}
        <div className="schedule-title-area text-center">
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Svadhyaya Spaces
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Weekly Class Schedule
          </motion.h2>
          <motion.p 
            className="subtitle-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Click on any schedule card to expand for full detail, or download it to save.
          </motion.p>
        </div>

        {/* Schedule Cards Grid */}
        <div className="schedule-cards-grid">
          {schedules.map((sch, idx) => (
            <motion.div 
              key={sch.id}
              className="schedule-img-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
            >
              <div className="schedule-card-header">
                <div className="schedule-badge" style={{ backgroundColor: sch.color }}>
                  {sch.title}
                </div>
                <h3>{sch.subtitle}</h3>
              </div>

              {/* Image Preview Panel */}
              <div 
                className="schedule-img-preview-container"
                onClick={() => setSelectedImage(sch.image)}
              >
                <img 
                  src={sch.image} 
                  alt={sch.subtitle} 
                  className="schedule-preview-img"
                />
                <div className="schedule-img-overlay">
                  <ZoomIn size={28} className="zoom-icon" />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Card actions */}
              <div className="schedule-card-actions">
                <button 
                  className="btn btn-outline" 
                  onClick={() => setSelectedImage(sch.image)}
                  style={{ color: sch.color, borderColor: sch.color }}
                >
                  <ZoomIn size={16} /> Expand
                </button>
                
                <a 
                  href={sch.image} 
                  download={`${sch.id}_class_schedule.jpg`}
                  className="btn btn-primary"
                  style={{ backgroundColor: sch.color, borderColor: sch.color, color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div 
          className="schedule-cta-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="schedule-cta-card">
            <h3>Ready to join us in the spaces?</h3>
            <p>Select your session, pick your slot, and secure your place today.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/booking')}
            >
              Book Class Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="schedule-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div 
              className="lightbox-img-wrapper"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Class Schedule Expanded View" 
                className="lightbox-image"
              />
              <div className="lightbox-actions">
                <a 
                  href={selectedImage} 
                  download="svadhyaya_class_schedule.jpg"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Download size={18} /> Download High Quality
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Schedule;
