import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, ChevronRight, ChevronLeft, CheckCircle2, ShieldAlert, Award, Compass } from 'lucide-react';
import './Booking.css';

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
      { id: 'single', title: 'Single Session', price: 500, description: 'Single entry ticket' }
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
      { id: 'single', title: 'Single Session', price: 500, description: 'Single entry ticket for kids' }
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
      { id: 'monthly', title: 'Monthly Membership', price: 4000, description: 'Access for 1 Month' },
      { id: 'threemonths', title: '3-Month Membership', price: 10500, description: 'Access for 3 Months' }
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
      { id: 'monthly', title: 'Monthly Membership', price: 4000, description: 'Access for 1 Month' },
      { id: 'threemonths', title: '3-Month Membership', price: 10500, description: 'Access for 3 Months' }
    ]
  },
  integrated_arts: {
    id: 'integrated_arts',
    title: 'Integrated Arts (Kids)',
    duration: '1 Hour',
    color: 'rgba(186, 85, 211, 1)',
    bgLight: 'rgba(186, 85, 211, 0.08)',
    description: 'Creative arts integration program combining visual arts, storytelling, and rhythm for kids.',
    days: [2, 4], // Tue, Thu
    slots: {
      2: ['05:00 PM'], // Tue
      4: ['05:00 PM']  // Thu
    },
    packages: [
      { id: 'single', title: 'Single Session', price: 350, description: 'Single entry creative session' }
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
      { id: 'single', title: 'Single Session', price: 350, description: 'Single entry ticket' }
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
      { id: 'single', title: 'Single Session', price: 450, description: 'Single entry ticket' }
    ]
  }
};

const Booking = () => {
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
      <div className="booking-title text-center">
        <h4 className="section-subtitle">Svadhyaya Bookings</h4>
        <h2 className="section-title">Reserve Your Space</h2>
        <p className="subtitle-desc">
          Begin your journey of self-discovery. Select a session, pick your slot, and lock in your reservation.
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

                    {/* Time Slot Picker */}
                    <div className="slots-box">
                      <h3>Available Time Slots</h3>
                      {selectedDate ? (
                        getAvailableSlots(selectedDate).length > 0 ? (
                          <div className="slots-grid">
                            {getAvailableSlots(selectedDate).map((slot) => (
                              <button
                                key={slot}
                                className={`slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
                                onClick={() => setSelectedSlot(slot)}
                                style={selectedSlot === slot ? { backgroundColor: session.color, borderColor: session.color, color: 'white' } : {}}
                              >
                                <Clock size={16} />
                                {slot}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="no-slots-fallback text-center">
                            <ShieldAlert size={40} style={{ color: 'var(--color-orange)', marginBottom: '1rem' }} />
                            <p>No available slots found for this day. Kalaripayattu and specific sessions operate on designated schedule days.</p>
                          </div>
                        )
                      ) : (
                        <div className="no-date-selected text-center">
                          <CalendarIcon size={40} style={{ color: 'var(--color-lavender)', marginBottom: '1rem' }} />
                          <p>Please select a date on the calendar to view available time slots.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="booking-footer">
                    <button
                      className="btn btn-primary next-step-btn"
                      disabled={!selectedDate || !selectedSlot}
                      onClick={handleNextStep}
                      style={(selectedDate && selectedSlot) ? { backgroundColor: session.color, color: 'white' } : {}}
                    >
                      Continue to Info <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {bookingStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="info-form-container">
                    <h3>Contact & Participant Information</h3>
                    <p className="form-info-text">Please provide your details below to finalize the reservation for {session.title}.</p>
                    
                    <form onSubmit={(e) => e.preventDefault()} className="booking-form">
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
                          rows="4"
                          value={formData.notes}
                          onChange={handleInputChange}
                          placeholder="Let us know of any medical conditions, safety concerns, or details to prepare for your session..."
                        ></textarea>
                      </div>
                    </form>
                  </div>

                  <div className="booking-footer step-2-footer">
                    <button 
                      className="btn btn-outline back-btn"
                      onClick={() => setBookingStep(1)}
                    >
                      Back to Schedule
                    </button>
                    <button
                      className="btn btn-primary next-step-btn"
                      onClick={handleNextStep}
                      style={{ backgroundColor: session.color, color: 'white' }}
                    >
                      Confirm Booking <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {bookingStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="booking-success text-center"
                >
                  <div className="success-icon-wrapper" style={{ color: session.color }}>
                    <CheckCircle2 size={80} />
                  </div>
                  <h2>Booking Confirmed!</h2>
                  <p className="success-message">
                    Thank you, <strong>{formData.name}</strong>. Your session for <strong>{session.title}</strong> has been successfully booked. A confirmation email with receipt and details has been sent to <strong>{formData.email}</strong>.
                  </p>

                  <div className="receipt-card" style={{ borderLeft: `6px solid ${session.color}` }}>
                    <div className="receipt-row">
                      <span>Session Type:</span>
                      <strong>{session.title} {selectedPackage.title !== 'Single Session' ? `(${selectedPackage.title})` : ''}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Date:</span>
                      <strong>{formatDateString(selectedDate)}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Time:</span>
                      <strong>{selectedSlot}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Duration:</span>
                      <strong>{session.duration}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Instructor/Coach:</span>
                      <strong>Svadhyaya Master</strong>
                    </div>
                    <div className="receipt-divider"></div>
                    <div className="receipt-row total">
                      <span>Total Paid:</span>
                      <strong style={{ color: session.color }}>₹{selectedPackage.price}</strong>
                    </div>
                  </div>

                  <div className="success-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/')}
                      style={{ backgroundColor: session.color, color: 'white' }}
                    >
                      Back to Home
                    </button>
                    <button 
                      className="btn btn-outline"
                      onClick={() => {
                        // Reset booking flow
                        setSelectedDate(null);
                        setSelectedSlot('');
                        setBookingStep(1);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          experience: 'Beginner',
                          notes: ''
                        });
                      }}
                    >
                      Book Another Session
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Receipt (For Steps 1 & 2) */}
          {bookingStep < 3 && (
            <div className="booking-card booking-summary-sidebar">
              <h3>Reservation Summary</h3>
              <div className="sidebar-session-detail" style={{ backgroundColor: session.bgLight, borderLeft: `4px solid ${session.color}` }}>
                <h4>{session.title} {selectedPackage.title !== 'Single Session' ? `(${selectedPackage.title})` : ''}</h4>
                <p>{session.description}</p>
                <div className="sidebar-pricing">
                  <span>Price:</span>
                  <span className="price-tag" style={{ color: session.color }}>₹{selectedPackage.price}</span>
                </div>
              </div>

              <div className="sidebar-receipt-details">
                <div className="summary-row">
                  <CalendarIcon size={16} />
                  <div>
                    <span>Selected Date:</span>
                    <strong>{selectedDate ? formatDateString(selectedDate) : 'Not selected yet'}</strong>
                  </div>
                </div>
                <div className="summary-row">
                  <Clock size={16} />
                  <div>
                    <span>Selected Time:</span>
                    <strong>{selectedSlot ? selectedSlot : 'Not selected yet'}</strong>
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

              <div className="sidebar-divider"></div>

              <div className="sidebar-total">
                <span>Total Due:</span>
                <span className="total-amount" style={{ color: session.color }}>₹{selectedPackage.price}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
