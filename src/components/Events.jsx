import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './Events.css';

const events = [
  {
    id: 1,
    title: "Silence & Sound: A Weekend Retreat",
    date: "Aug 15 - 17, 2026",
    time: "Starts 4:00 PM",
    location: "Svadhyaya Main Campus",
    type: "Upcoming",
    description: "Immerse yourself in two days of guided meditation, sound healing, and noble silence to recalibrate your nervous system."
  },
  {
    id: 2,
    title: "The Art of Mindful Pottery",
    date: "Aug 22, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "The Clay Studio",
    type: "Upcoming",
    description: "Learn to center yourself while centering clay. A beginner-friendly workshop combining mindfulness practices with ceramics."
  },
  {
    id: 3,
    title: "Community Harvest Dinner",
    date: "Aug 30, 2026",
    time: "6:30 PM",
    location: "The Organic Garden",
    type: "Upcoming",
    description: "Join us for a farm-to-table dinner celebrating the summer harvest. Open to all community members."
  },
  {
    id: 4,
    title: "Philosophy Circle: Eastern Wisdom",
    date: "Sep 05, 2026",
    time: "5:00 PM - 7:00 PM",
    location: "The Library",
    type: "Upcoming",
    description: "An open dialogue exploring key concepts from Advaita Vedanta and their application in modern life."
  }
];

const Events = () => {
  return (
    <section id="events" className="events section-padding">
      <div className="container">
        <div className="text-center mb-lg">
          <h4 className="section-subtitle">Gatherings</h4>
          <h2 className="section-title">Upcoming Events</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Join our curated sessions designed to foster learning, creativity, and deep connection.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="event-card">
                <div className="event-date-badge">
                  <span className="month">{event.date.split(' ')[0]}</span>
                  <span className="day">{event.date.split(' ')[1]}</span>
                </div>
                
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span><Clock size={16} /> {event.time}</span>
                    <span><MapPin size={16} /> {event.location}</span>
                  </div>
                  <p>{event.description}</p>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', marginTop: '1rem' }}>
                    Reserve Spot
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-lg">
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-orange)' }}>View Full Calendar</button>
        </div>
      </div>

      {/* Organic divider top */}
      <div className="organic-divider-top">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 C320,60 420,120 720,60 C1020,0 1120,60 1440,0 L1440,0 L0,0 Z" fill="var(--color-bg-alt)"></path>
        </svg>
      </div>
    </section>
  );
};

export default Events;
