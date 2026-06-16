import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communitySpaceOpen, setCommunitySpaceOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleStudioClick = (spaceId) => {
    if (location.pathname !== '/') {
      navigate('/#climb-studio');
      // Small delay to allow the page to render before dispatching the modal event
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('openStudioModal', { detail: spaceId }));
      }, 300);
    } else {
      window.dispatchEvent(new CustomEvent('openStudioModal', { detail: spaceId }));
    }
    setCommunitySpaceOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Svadhyaya" className="logo-image" />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="/#about" className="nav-link">About</a>
          <Link to="/booking" className="nav-link">Booking Space</Link>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setCommunitySpaceOpen(true)}
            onMouseLeave={() => setCommunitySpaceOpen(false)}
          >
            <a href="/#climb-studio" className="nav-link dropdown-toggle" onClick={(e) => e.preventDefault()}>
              Community Space <ChevronDown size={16} />
            </a>
            <AnimatePresence>
              {communitySpaceOpen && (
                <motion.div 
                  className="dropdown-menu community-dropdown"
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="dropdown-group">
                    <Link to="/#climb-studio" className="dropdown-group-header" onClick={() => setCommunitySpaceOpen(false)}>
                      The Climb Studio
                    </Link>
                    <div className="dropdown-sub-items">
                      <Link to="/#climb-studio" onClick={() => handleStudioClick('climbing')}>Climbing</Link>
                      <Link to="/#climb-studio" onClick={() => handleStudioClick('kalaripayattu')}>Kalaripayattu</Link>
                      <Link to="/#climb-studio" onClick={() => handleStudioClick('bharatanatyam')}>Bharatanatyam</Link>
                      <Link to="/#climb-studio" onClick={() => handleStudioClick('mrudangam')}>Mrudangam</Link>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <a 
                    href="https://www.themovementlab.co.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dropdown-link-external"
                    onClick={() => setCommunitySpaceOpen(false)}
                  >
                    The Movement Labs <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.7 }} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="dropdown-container"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <a href="#more" className="nav-link dropdown-toggle" onClick={(e) => e.preventDefault()}>
              More <ChevronDown size={16} />
            </a>
            <AnimatePresence>
              {moreOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/coach" onClick={() => setMoreOpen(false)}>Our Founder</Link>
                  <Link to="/team" onClick={() => setMoreOpen(false)}>The Team</Link>
                  <Link to="/blogs" onClick={() => setMoreOpen(false)}>Blogs</Link>
                  <Link to="/schedule" onClick={() => setMoreOpen(false)}>Class Schedule</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <button className="btn btn-outline nav-contact">Contact Us</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="mobile-menu-content">
              <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>Booking Space</Link>
              
              <div className="mobile-dropdown">
                <span>Community Space</span>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem', paddingLeft: '0.5rem' }}>
                  <Link to="/#climb-studio" style={{ fontWeight: 600, color: 'var(--color-blue)', fontSize: '1.1rem' }} onClick={() => setMobileMenuOpen(false)}>
                    The Climb Studio
                  </Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
                    <Link to="/#climb-studio" onClick={() => handleStudioClick('climbing')}>Climbing</Link>
                    <Link to="/#climb-studio" onClick={() => handleStudioClick('kalaripayattu')}>Kalaripayattu</Link>
                    <Link to="/#climb-studio" onClick={() => handleStudioClick('bharatanatyam')}>Bharatanatyam</Link>
                    <Link to="/#climb-studio" onClick={() => handleStudioClick('mrudangam')}>Mrudangam</Link>
                  </div>
                </div>

                <div className="dropdown-divider" style={{ margin: '0.8rem 0' }}></div>

                <a 
                  href="https://www.themovementlab.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-text)', paddingLeft: '0.5rem' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Movement Labs <ExternalLink size={14} style={{ marginLeft: '6px', opacity: 0.8 }} />
                </a>
              </div>
              
              <div className="mobile-dropdown">
                <span>More</span>
                <Link to="/coach" onClick={() => setMobileMenuOpen(false)}>Our Founder</Link>
                <Link to="/team" onClick={() => setMobileMenuOpen(false)}>The Team</Link>
                <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                <Link to="/schedule" onClick={() => setMobileMenuOpen(false)}>Class Schedule</Link>
              </div>
              
              <button className="btn btn-outline" style={{marginTop: '1rem', color: 'var(--color-blue)', borderColor: 'var(--color-blue)'}}>Contact Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
