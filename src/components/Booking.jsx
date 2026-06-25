import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, ChevronRight, ChevronLeft, CheckCircle2, ShieldAlert, Award, Compass, ZoomIn, Download, X } from 'lucide-react';
import './Booking.css';
import './Schedule.css';

const sessionsData = {
  climbing_adults: {
    id: 'climbing_adults',
    title: 'Climbing (Adults)',
    duration: '2 Hours',
    color: 'var(--color-orange)',
    bgLight: 'rgba(242, 101, 34, 0.08)',
    description: 'Indoor rock climbing session at our premium bouldering wall for adults.',
    days: [1, 2, 3, 4, 5, 6], // Mon-Sat
    slots: {
      1: ['07:00 PM'], // Mon
      2: ['07:00 AM'], // Tue
      3: ['07:00 PM'], // Wed
      4: ['07:00 AM'], // Thu
      5: ['07:00 PM'], // Fri
      6: ['07:00 AM']  // Sat
    },
    packages: [
      { id: 'monthly', title: 'Monthly Membership', price: 5000, description: 'Regular access for 1 Month' },
      { id: 'walkin', title: 'Walk-In Session', price: 750, description: 'Single entry walk-in' }
    ]
  },
  climbing_kids: {
    id: 'climbing_kids',
    title: 'Climbing (Kids)',
    duration: '2 Hours',
    color: 'rgba(147, 112, 219, 0.9)',
    bgLight: 'rgba(147, 112, 219, 0.08)',
    description: 'Indoor rock climbing program designed specifically for kids.',
    days: [1, 3, 6], // Mon, Wed, Sat
    slots: {
      1: ['05:00 PM'], // Mon
      3: ['04:30 PM'], // Wed
      6: ['10:00 AM']  // Sat
    },
    packages: [
      { id: 'monthly', title: 'Monthly Membership', price: 4000, description: 'Regular access for 1 Month' },
      { id: 'walkin', title: 'Walk-In Session', price: 750, description: 'Single entry walk-in' }
    ]
  },
  kalaripayattu_adults: {
    id: 'kalaripayattu_adults',
    title: 'Kalaripayattu (Adults)',
    duration: '1 Hour',
    color: 'var(--color-teal)',
    bgLight: 'rgba(66, 193, 199, 0.08)',
    description: 'Traditional martial art session focusing on flexibility and combat postures for adults.',
    days: [1, 2, 3, 4, 5, 6], // Mon-Sat
    slots: {
      1: ['06:30 AM', '10:00 AM'], // Mon
      2: ['07:30 PM'],             // Tue
      3: ['06:30 AM', '10:00 AM'], // Wed
      4: ['07:30 PM'],             // Thu
      5: ['06:30 AM', '10:00 AM'], // Fri
      6: ['07:30 PM']              // Sat
    },
    packages: [
      { id: 'monthly', title: 'Monthly Membership', price: 4500, description: 'Access for 1 Month' }
    ]
  },
  kalaripayattu_kids: {
    id: 'kalaripayattu_kids',
    title: 'Kalaripayattu (Kids)',
    duration: '1 Hour',
    color: 'rgba(255, 182, 193, 1)',
    bgLight: 'rgba(255, 182, 193, 0.1)',
    description: 'Traditional martial art focus for young practitioners.',
    days: [2, 4, 6], // Tue, Thu, Sat
    slots: {
      2: ['06:00 PM'], // Tue
      4: ['06:00 PM'], // Thu
      6: ['06:00 PM']  // Sat
    },
    packages: [
      { id: 'monthly', title: 'Monthly Membership', price: 4500, description: 'Access for 1 Month' }
    ]
  },
  bharatanatyam: {
    id: 'bharatanatyam',
    title: 'Bharatanatyam (All)',
    duration: '1 - 1.5 Hours',
    color: 'var(--color-green)',
    bgLight: 'rgba(57, 181, 74, 0.08)',
    description: 'Classical Indian dance class emphasizing rhythmic footwork, expressions, and mudras.',
    days: [0, 3], // Sun, Wed
    slots: {
      3: ['06:30 PM'], // Wed
      0: ['07:30 AM']  // Sun
    },
    packages: [
      { id: 'monthly', title: 'Monthly Course', price: 2500, description: 'Access for 1 Month' }
    ]
  },
  mrudangam: {
    id: 'mrudangam',
    title: 'Mrudangam (All)',
    duration: '3 Hours',
    color: 'var(--color-blue)',
    bgLight: 'rgba(46, 49, 146, 0.08)',
    description: 'South Indian classical percussion training covering talas, rhythm cycles, and compositions.',
    days: [2, 5], // Tue, Fri
    slots: {
      2: ['03:30 PM'], // Tue
      5: ['03:30 PM']  // Fri
    },
    packages: [
      { id: 'monthly', title: 'Monthly Course', price: 3000, description: 'Access for 1 Month' }
    ]
  }
};

const schedules = [
  {
    id: 'climbing',
    title: 'The Climb Studio',
    subtitle: 'Bouldering (Adults & Kids)',
    image: '/images/class_schedule_1.jpg',
    color: 'var(--color-orange)',
    accentBg: 'rgba(242, 101, 34, 0.1)',
    quickLinks: [
      { label: 'Adults Climbing', sessionKey: 'climbing_adults' },
      { label: 'Kids Climbing', sessionKey: 'climbing_kids' },
      { label: 'Walk-In Entry', sessionKey: 'climbing_adults', packageId: 'walkin' }
    ]
  },
  {
    id: 'svadhyaya',
    title: 'Svadhyaya Space',
    subtitle: 'Kalari, Arts, Music & Dance',
    image: '/images/class_schedule_2.jpg',
    color: 'var(--color-teal)',
    accentBg: 'rgba(66, 193, 199, 0.1)',
    quickLinks: [
      { label: 'Kalaripayattu', sessionKey: 'kalaripayattu_adults' },
      { label: 'Bharatanatyam', sessionKey: 'bharatanatyam' },
      { label: 'Mrudangam', sessionKey: 'mrudangam' }
    ]
  }
];

const Booking = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { hash } = useLocation();

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

  // Scroll to hash anchor on load
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialSession = searchParams.get('session');
  let resolvedSession = initialSession;
  if (initialSession === 'climbing') resolvedSession = 'climbing_adults';
  else if (initialSession === 'kalaripayattu') resolvedSession = 'kalaripayattu_adults';

  const [selectedSession, setSelectedSession] = useState(
    resolvedSession && sessionsData[resolvedSession] ? resolvedSession : 'climbing_adults'
  );

  const [selectedPackageId, setSelectedPackageId] = useState(() => {
    const sessionKey = resolvedSession && sessionsData[resolvedSession] ? resolvedSession : 'climbing_adults';
    return sessionsData[sessionKey].packages[0].id;
  });

  const selectSessionAndScroll = (sessionKey, packageId = 'monthly') => {
    if (sessionsData[sessionKey]) {
      setSelectedSession(sessionKey);
      
      const foundPkg = sessionsData[sessionKey].packages.find(p => p.id === packageId);
      if (foundPkg) {
        setSelectedPackageId(packageId);
      } else {
        setSelectedPackageId(sessionsData[sessionKey].packages[0].id);
      }
      
      // Clear date and slot selection to let them select new ones
      setSelectedDate(null);
      setSelectedSlot('');
      
      // Scroll to booking form smoothly
      const element = document.getElementById('booking-form-start');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingStep, setBookingStep] = useState(1); // 1: Schedule, 2: Info, 3: Success

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Beginner',
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const session = sessionsData[selectedSession];
  const selectedPackage = session.packages.find(p => p.id === selectedPackageId) || session.packages[0];

  useEffect(() => {
    // Reset selected slot, date and package when session changes
    setSelectedDate(null);
    setSelectedSlot('');
    setBookingStep(1);
    setSelectedPackageId(sessionsData[selectedSession].packages[0].id);
  }, [selectedSession]);

  // Calendar calculations
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    
    const dayList = [];
    for (let i = 1; i <= days; i++) {
      dayList.push(new Date(year, month, i));
    }
    return dayList;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    // Don't navigate to past months
    if (newDate.getMonth() >= new Date().getMonth() || newDate.getFullYear() > new Date().getFullYear()) {
      setCurrentDate(newDate);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isDateAvailable = (date) => {
    // Disable past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return false;

    // Check if session runs on this day of the week
    const dayOfWeek = date.getDay();
    return session.days.includes(dayOfWeek);
  };

  const getAvailableSlots = (date) => {
    if (!date) return [];
    const dayOfWeek = date.getDay();
    return session.slots[dayOfWeek] || [];
  };

  const handleDateSelect = (date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      setSelectedSlot(''); // reset slot
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,14}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (bookingStep === 1) {
      if (selectedDate && selectedSlot) {
        setBookingStep(2);
      }
    } else if (bookingStep === 2) {
      if (validateForm()) {
        setBookingStep(3);
      }
    }
  };

  const formatDateString = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="booking-page container">
      {/* 1. Main Page Heading */}
      <div className="booking-title text-center" style={{ marginBottom: '3.5rem' }}>
        <h4 className="section-subtitle">TIMETABLE & RESERVATIONS</h4>
        <h2 className="section-title">Class Schedule & Booking</h2>
        <p className="subtitle-desc">
          Explore our weekly class schedules below, then select your program to reserve your membership or walk-in slot.
        </p>
      </div>

      {/* 2. Embedded Class Schedule Section */}
      <div id="schedule" className="booking-schedule-section" style={{ marginBottom: '5rem' }}>
        <div className="schedule-cards-grid">
          {schedules.map((sch, idx) => (
            <motion.div 
              key={sch.id}
              className="schedule-img-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
            >
              <div className="schedule-card-header">
                <div className="schedule-badge" style={{ backgroundColor: sch.color }}>
                  {sch.title}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', fontFamily: 'var(--font-heading)' }}>{sch.subtitle}</h3>
              </div>

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

              <div className="schedule-card-actions" style={{ display: 'flex', gap: '0.8rem' }}>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setSelectedImage(sch.image)}
                  style={{ color: sch.color, borderColor: sch.color, flex: 1 }}
                >
                  <ZoomIn size={16} /> Expand
                </button>
                
                <a 
                  href={sch.image} 
                  download={`${sch.id}_class_schedule.jpg`}
                  className="btn btn-primary"
                  style={{ backgroundColor: sch.color, borderColor: sch.color, color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px', flex: 1 }}
                >
                  <Download size={16} /> Download
                </a>
              </div>

              {/* Quick Book Actions */}
              <div className="schedule-quick-book-area" style={{ marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.6rem', fontWeight: 'bold' }}>Quick Book:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {sch.quickLinks.map((link) => (
                    <button
                      key={link.sessionKey + (link.packageId || '')}
                      className="btn btn-outline"
                      onClick={() => selectSessionAndScroll(link.sessionKey, link.packageId)}
                      style={{ 
                        padding: '0.4rem 0.8rem', 
                        fontSize: '0.85rem', 
                        borderColor: 'rgba(0,0,0,0.15)',
                        color: 'var(--color-text)',
                        backgroundColor: 'rgba(0,0,0,0.02)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = sch.color;
                        e.currentTarget.style.color = sch.color;
                        e.currentTarget.style.backgroundColor = sch.accentBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                        e.currentTarget.style.color = 'var(--color-text)';
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Booking Section Heading */}
      <div id="booking-form-start" className="booking-title text-center" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '4rem', marginBottom: '3rem' }}>
        <h4 className="section-subtitle">SESSION RESERVATION</h4>
        <h2 className="section-title">Book Your Session</h2>
        <p className="subtitle-desc">
          Select your preferred program, confirm your pricing details, and choose your slot.
        </p>
      </div>

      <div className="booking-layout">
        {/* Step Indicator */}
        <div className="booking-steps">
          <div className={`step-item ${bookingStep >= 1 ? 'active' : ''} ${bookingStep > 1 ? 'completed' : ''}`}>
            <span className="step-num">1</span>
            <span className="step-label">Select Date & Time</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step-item ${bookingStep >= 2 ? 'active' : ''} ${bookingStep > 2 ? 'completed' : ''}`}>
            <span className="step-num">2</span>
            <span className="step-label">Personal Information</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step-item ${bookingStep === 3 ? 'active' : ''}`}>
            <span className="step-num">3</span>
            <span className="step-label">Confirmation</span>
          </div>
        </div>

        <div className="booking-main-grid">
          {/* Main Area */}
          <div className="booking-card main-booking-area">
            <AnimatePresence mode="wait">
              {bookingStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="session-selector-grid">
                    {Object.values(sessionsData).map((s) => (
                      <div 
                        key={s.id}
                        className={`session-select-card ${selectedSession === s.id ? 'selected' : ''}`}
                        onClick={() => setSelectedSession(s.id)}
                        style={{ '--session-color': s.color }}
                      >
                        <div className="session-card-header">
                          <h3>{s.title}</h3>
                          <span className="session-price">
                            {s.packages.length > 1 
                              ? `From ₹${Math.min(...s.packages.map(p => p.price))}` 
                              : `₹${s.packages[0].price}`}
                          </span>
                        </div>
                        <p>{s.description}</p>
                        <div className="session-meta">
                          <span><strong>Duration:</strong> {s.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {session.packages.length > 1 && (
                    <div className="package-selector-container" style={{ marginBottom: '2.5rem' }}>
                      <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: '600', marginBottom: '1rem' }}>Select Duration / Package</h3>
                      <div className="package-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {session.packages.map((pkg) => (
                          <div
                            key={pkg.id}
                            className={`package-option-card ${selectedPackageId === pkg.id ? 'selected' : ''}`}
                            onClick={() => setSelectedPackageId(pkg.id)}
                            style={{ 
                              '--session-color': session.color,
                              border: selectedPackageId === pkg.id ? `2px solid ${session.color}` : '2px solid var(--color-bg-alt)',
                              borderRadius: 'var(--border-radius-sm)',
                              padding: '1.2rem',
                              cursor: 'pointer',
                              backgroundColor: selectedPackageId === pkg.id ? 'rgba(255, 255, 255, 0.99)' : 'var(--color-bg)',
                              transition: 'all var(--transition-fast)'
                            }}
                          >
                            <div className="package-option-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                              <h4 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-text)' }}>{pkg.title}</h4>
                              <span className="package-option-price" style={{ fontWeight: '700', color: session.color }}>₹{pkg.price}</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', margin: 0 }}>{pkg.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="calendar-slot-container">
                    {/* Custom Calendar */}
                    <div className="calendar-box">
                      <div className="calendar-header">
                        <button onClick={handlePrevMonth} className="calendar-nav-btn">
                          <ChevronLeft size={20} />
                        </button>
                        <h3>
                          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </h3>
                        <button onClick={handleNextMonth} className="calendar-nav-btn">
                          <ChevronRight size={20} />
                        </button>
                      </div>

                      <div className="calendar-grid">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                          <div key={d} className="calendar-weekday-header">{d}</div>
                        ))}
                        
                        {/* Empty spacing for first day index */}
                        {Array.from({ length: firstDayIndex }).map((_, idx) => (
                          <div key={`empty-${idx}`} className="calendar-day empty"></div>
                        ))}

                        {daysInMonth.map((date) => {
                          const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
                          const isAvailable = isDateAvailable(date);
                          
                          return (
                            <button
                              key={date.toISOString()}
                              className={`calendar-day ${isSelected ? 'selected' : ''} ${isAvailable ? 'available' : 'disabled'}`}
                              disabled={!isAvailable}
                              onClick={() => handleDateSelect(date)}
                              style={isSelected ? { backgroundColor: session.color, color: 'white' } : {}}
                            >
                              {date.getDate()}
                            </button>
                          );
                        })}
                      </div>
                      
                      <div className="calendar-legend">
                        <span className="legend-item"><span className="legend-dot available"></span> Available</span>
                        <span className="legend-item"><span className="legend-dot selected"></span> Selected</span>
                        <span className="legend-item"><span className="legend-dot disabled"></span> Unavailable</span>
                      </div>
                    </div>

                    {/* Slots Input */}
                    <div className="form-group" style={{ flex: 1 }}>
                      <label>Available Time Slots</label>
                      {selectedDate ? (
                        <div className="slots-picker-area">
                          {getAvailableSlots(selectedDate).length > 0 ? (
                            <div className="slots-grid">
                              {getAvailableSlots(selectedDate).map((slot) => (
                                <button 
                                  key={slot}
                                  className={`slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                                  onClick={() => setSelectedSlot(slot)}
                                  style={{ '--active-bg': session.color }}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div className="no-slots-box">
                              <ShieldAlert size={28} style={{ color: 'var(--color-orange)', marginBottom: '0.5rem' }} />
                              <p>No slots scheduled for this day.</p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="slots-placeholder-box">
                          <CalendarIcon size={32} style={{ opacity: 0.3, marginBottom: '0.8rem' }} />
                          <p>Please select a date on the calendar to view available time slots.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="step-actions" style={{ justifyContent: 'flex-end', marginTop: '2rem' }}>
                    <button 
                      className="btn btn-primary"
                      disabled={!selectedDate || !selectedSlot}
                      onClick={handleNextStep}
                      style={{ backgroundColor: session.color, borderColor: session.color, color: 'white' }}
                    >
                      Continue to Info <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

            {bookingStep === 2 && (
              <div className="booking-step-content">
                <h3 className="step-title">Personal Information</h3>
                
                <form onSubmit={(e) => e.preventDefault()} className="booking-info-form">
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name"><User size={16} /> Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={formErrors.name ? 'error' : ''}
                      />
                      {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email"><Mail size={16} /> Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="phone"><Phone size={16} /> Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={formErrors.phone ? 'error' : ''}
                      />
                      {formErrors.phone && <span className="error-text">{formErrors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="experience"><Award size={16} /> Experience Level</label>
                      <select 
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="Beginner">Beginner (First-timer)</option>
                        <option value="Intermediate">Intermediate (Basic training)</option>
                        <option value="Advanced">Advanced (Experienced practitioner)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes"><Compass size={16} /> Special Notes / Requests (Optional)</label>
                    <textarea 
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Share details like physical injuries, specific goals, or questions you have."
                      rows={4}
                    />
                  </div>
                </form>

                <div className="step-actions" style={{ marginTop: '2rem' }}>
                  <button 
                    className="btn btn-outline"
                    onClick={() => setBookingStep(1)}
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={handleNextStep}
                    style={{ backgroundColor: session.color, borderColor: session.color, color: 'white' }}
                  >
                    Confirm Booking <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {bookingStep === 3 && (
              <div className="booking-step-content success-step text-center">
                <CheckCircle2 size={64} style={{ color: 'var(--color-teal)', margin: '0 auto 1.5rem' }} />
                <h3 className="step-title">Booking Requested!</h3>
                <p style={{ maxWidth: '500px', margin: '0 auto 1.5rem', color: 'var(--color-text-light)' }}>
                  Thank you, <strong>{formData.name}</strong>. We have received your booking request for <strong>{session.title}</strong> on <strong>{selectedDate ? formatDateString(selectedDate) : ''}</strong> at <strong>{selectedSlot}</strong>.
                </p>
                <div className="success-details-card">
                  <h4>Request Reference: #SV-{Math.floor(100000 + Math.random() * 900000)}</h4>
                  <p>A confirmation email with the session details and guidelines has been sent to <strong>{formData.email}</strong>.</p>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setBookingStep(1);
                      setSelectedDate(null);
                      setSelectedSlot('');
                      setFormData({ name: '', email: '', phone: '', experience: 'Beginner', notes: '' });
                    }}
                    style={{ backgroundColor: 'var(--color-teal)', borderColor: 'var(--color-teal)', color: 'white' }}
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            )}
            </AnimatePresence>
          </div>

          {/* Reservation Summary (Only steps 1 & 2) */}
          {bookingStep < 3 && (
            <div className="booking-sidebar">
              <h3 className="sidebar-title">Reservation Summary</h3>
              
              <div className="sidebar-session-card" style={{ backgroundColor: session.bgLight, borderLeft: `4px solid ${session.color}` }}>
                <h4 style={{ color: session.color }}>{session.title}</h4>
                <p>{selectedPackage.title}</p>
              </div>

              <div className="sidebar-receipt-details">
                <div className="summary-row">
                  <CalendarIcon size={16} />
                  <div>
                    <span>Date:</span>
                    <strong>{selectedDate ? formatDateString(selectedDate) : 'Not selected'}</strong>
                  </div>
                </div>
                <div className="summary-row">
                  <Clock size={16} />
                  <div>
                    <span>Time:</span>
                    <strong>{selectedSlot || 'Not selected'}</strong>
                  </div>
                </div>
                <div className="summary-row">
                  <User size={16} />
                  <div>
                    <span>Duration:</span>
                    <strong>{session.duration}</strong>
                  </div>
                </div>
              </div>

              <div className="sidebar-total">
                <span>Total Due:</span>
                <span className="total-amount" style={{ color: session.color }}>₹{selectedPackage.price}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="schedule-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 3000 }}
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

export default Booking;
