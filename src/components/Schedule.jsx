import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, Sparkles, ArrowRight } from 'lucide-react';
import './Schedule.css';

const scheduleData = [
  {
    id: 'bouldering_adults',
    category: 'bouldering',
    title: 'Bouldering (Adults)',
    ageGroup: 'Adults',
    color: 'var(--color-orange)',
    bgLight: 'rgba(242, 101, 34, 0.05)',
    sessions: [
      { times: '07:00 AM to 09:00 AM', days: 'Tue / Thu / Sat' },
      { times: '07:00 PM to 09:00 PM', days: 'Mon / Wed / Fri' }
    ],
    bookingId: 'climbing_adults'
  },
  {
    id: 'bouldering_kids',
    category: 'bouldering',
    title: 'Bouldering (Kids)',
    ageGroup: 'Kids',
    color: 'rgba(147, 112, 219, 0.15)',
    rowBg: 'rgba(147, 112, 219, 0.08)',
    sessions: [
      { times: '05:00 PM to 07:00 PM', days: 'Mon' },
      { times: '04:30 PM to 06:30 PM', days: 'Wed' },
      { times: '10:00 AM to 12:00 PM', days: 'Sat' }
    ],
    bookingId: 'climbing_kids'
  },
  {
    id: 'kalari_adults',
    category: 'kalari',
    title: 'Kalari (Adults)',
    ageGroup: 'Adults',
    color: 'var(--color-teal)',
    bgLight: 'rgba(66, 193, 199, 0.05)',
    sessions: [
      { times: '06:30 AM to 07:30 AM', days: 'Mon / Wed / Fri' },
      { times: '10:00 AM to 11:00 AM', days: 'Mon / Wed / Fri' },
      { times: '07:30 PM to 08:30 PM', days: 'Tue / Thu / Sat' }
    ],
    bookingId: 'kalaripayattu_adults'
  },
  {
    id: 'kalari_kids',
    category: 'kalari',
    title: 'Kalari (Kids)',
    ageGroup: 'Kids',
    color: 'rgba(255, 182, 193, 0.2)',
    rowBg: 'rgba(255, 182, 193, 0.1)',
    sessions: [
      { times: '06:00 PM to 07:00 PM', days: 'Tue / Thu / Sat' }
    ],
    bookingId: 'kalaripayattu_kids'
  },
  {
    id: 'integrated_arts_kids',
    category: 'arts',
    title: 'Integrated Arts (Kids)',
    ageGroup: 'Kids',
    color: 'rgba(186, 85, 211, 0.2)',
    rowBg: 'rgba(186, 85, 211, 0.1)',
    sessions: [
      { times: '05:00 PM to 06:00 PM', days: 'Tue / Thu' }
    ],
    bookingId: 'integrated_arts'
  },
  {
    id: 'mridangam_all',
    category: 'mrudangam',
    title: 'Mridangam (All)',
    ageGroup: 'All',
    color: 'var(--color-blue)',
    bgLight: 'rgba(46, 49, 146, 0.05)',
    sessions: [
      { times: '03:30 PM to 06:30 PM', days: 'Tue / Fri' }
    ],
    bookingId: 'mrudangam'
  },
  {
    id: 'bharatanatyam_all',
    category: 'bharatanatyam',
    title: 'Bharatnatyam (All)',
    ageGroup: 'All',
    color: 'rgba(255, 239, 204, 0.5)',
    rowBg: 'rgba(255, 239, 204, 0.25)',
    sessions: [
      { times: '06:30 PM to 07:30 PM', days: 'Wed' },
      { times: '07:30 AM to 09:00 AM', days: 'Sun' }
    ],
    bookingId: 'bharatanatyam'
  }
];

const Schedule = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All'); // All, Adults, Kids

  const filteredData = scheduleData.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Adults') return item.ageGroup === 'Adults' || item.ageGroup === 'All';
    if (activeTab === 'Kids') return item.ageGroup === 'Kids' || item.ageGroup === 'All';
    return true;
  });

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

        {/* Floating Shell Logo (Svadhyaya Brand Outline) */}
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

        {/* Bharatnatyam Dancer Illustration (Bottom Left) */}
        <div className="character-element dancer-illustration">
          <svg viewBox="0 0 200 300" fill="currentColor">
            {/* Minimalist stylized dancer representation */}
            <circle cx="100" cy="50" r="15" />
            <path d="M100 65 L100 130 L60 180 L40 170 M100 130 L140 180 L160 170" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <path d="M100 85 L60 75 L40 50 M100 85 L140 75 L160 100" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M100 130 C100 190 60 210 55 270 M100 130 C100 190 140 210 145 270" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Mridangam / Drum (Right Floating) */}
        <div className="character-element drum-illustration">
          <svg viewBox="0 0 100 160" fill="currentColor">
            <ellipse cx="50" cy="20" rx="30" ry="12" />
            <path d="M20 20 L20 140 A30 12 0 0 0 80 140 L80 20 Z" />
            <ellipse cx="50" cy="140" rx="30" ry="12" fill="#EAEAEA" />
            {/* Drum stripes */}
            <line x1="30" y1="25" x2="30" y2="135" stroke="#444" strokeWidth="2" />
            <line x1="50" y1="32" x2="50" y2="148" stroke="#444" strokeWidth="2" />
            <line x1="70" y1="25" x2="70" y2="135" stroke="#444" strokeWidth="2" />
          </svg>
        </div>

        {/* Art Palette (Bottom Right) */}
        <div className="character-element palette-illustration">
          <svg viewBox="0 0 120 100" fill="currentColor">
            <path d="M20 50 C20 25 50 10 80 20 C100 28 110 50 100 70 C90 85 60 90 40 85 C25 80 20 65 20 50 Z" />
            <circle cx="35" cy="50" r="10" fill="var(--color-bg)" />
            {/* Paint colors */}
            <circle cx="45" cy="30" r="8" fill="var(--color-orange)" />
            <circle cx="65" cy="25" r="8" fill="var(--color-teal)" />
            <circle cx="85" cy="35" r="8" fill="var(--color-blue)" />
            <circle cx="85" cy="60" r="8" fill="var(--color-green)" />
          </svg>
        </div>

        {/* Climbing illustration */}
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
            Svadhyaya Classes
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
            Find your rhythm, pick your program, and join our community spaces.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="schedule-tabs-container">
          <div className="schedule-tabs">
            {['All', 'Adults', 'Kids'].map((tab) => (
              <button
                key={tab}
                className={`schedule-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'All' ? 'All Classes' : `${tab} Classes`}
              </button>
            ))}
          </div>
        </div>

        {/* Notebook Notebook Layout */}
        <motion.div 
          className="notebook-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Top Spiral Rings */}
          <div className="notebook-spiral-rings">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="spiral-ring"></div>
            ))}
          </div>

          <div className="notebook-paper">
            {/* Paper Lined Effect */}
            <div className="paper-margin-line"></div>
            
            <div className="notebook-header">
              <h3 className="notebook-heading">Class Schedule</h3>
              <span className="notebook-date">Active Term 2026</span>
            </div>

            <div className="notebook-schedule-table">
              <div className="table-header-row">
                <div className="th-class">Program / Category</div>
                <div className="th-time">Class Timings & Days</div>
                <div className="th-action">Action</div>
              </div>

              {filteredData.map((item) => (
                <div 
                  key={item.id} 
                  className="table-body-row" 
                  style={{ 
                    borderLeft: `5px solid ${item.color}`,
                    backgroundColor: item.rowBg || item.bgLight || 'transparent'
                  }}
                >
                  <div className="td-class">
                    <span className="program-title">{item.title}</span>
                    <span className="program-badge" style={{ backgroundColor: item.color }}>
                      {item.ageGroup}
                    </span>
                  </div>
                  
                  <div className="td-time">
                    {item.sessions.map((sess, idx) => (
                      <div key={idx} className="timing-slot">
                        <Clock size={14} className="timing-icon" />
                        <span className="timing-text"><strong>{sess.times}</strong> — {sess.days}</span>
                      </div>
                    ))}
                  </div>

                  <div className="td-action">
                    <button 
                      className="notebook-book-btn"
                      onClick={() => navigate(`/booking?session=${item.bookingId}`)}
                      style={{ '--btn-hover-color': item.color }}
                    >
                      Book Class <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Schedule;
