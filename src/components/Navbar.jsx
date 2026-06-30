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

  const isAboutActive = location.hash === '#about' || (location.pathname === '/' && location.hash === '#about');
  const isBookingActive = location.pathname.startsWith('/booking');
  const isCommunityActive = location.hash === '#climb-studio' || (location.pathname === '/' && location.hash === '#climb-studio');
  const isMoreActive = ['/coach', '/team', '/blogs'].some(path => location.pathname.startsWith(path));

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

  const handleContactClick = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
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

  useEffect(() => {
    if (mobileMenuOpen) {
      window.lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      window.lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      window.lenis?.start();
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <motion.div 
          className="logo-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="Svadhyaya" className="logo-image" />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <a href="/#about" className={`nav-link ${isAboutActive ? 'active' : ''}`}>About</a>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link to="/booking" className={`nav-link ${isBookingActive ? 'active' : ''}`}>Booking Space</Link>
          </motion.div>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setCommunitySpaceOpen(true)}
            onMouseLeave={() => setCommunitySpaceOpen(false)}
          >
            <motion.div whileHover={{ y: -2 }}>
              <a href="/#climb-studio" className={`nav-link dropdown-toggle ${isCommunityActive ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                Community Space <ChevronDown size={14} className={`chevron-icon ${communitySpaceOpen ? 'rotated' : ''}`} />
              </a>
            </motion.div>
            <AnimatePresence>
              {communitySpaceOpen && (
                <motion.div 
                   className="dropdown-menu community-dropdown"
                  initial={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                  exit={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <div className="dropdown-group">
                    <Link to="/#climb-studio" className="dropdown-group-header" onClick={() => setCommunitySpaceOpen(false)}>
                      The Climb Studio
                    </Link>
                    <div className="dropdown-sub-items">
                      <Link to="/#climb-studio" onClick={() => handleStudioClick('bouldering')}>Bouldering</Link>
                    </div>
                  </div>
                  <div className="dropdown-group">
                    <Link to="/#climb-studio" className="dropdown-group-header" onClick={() => setCommunitySpaceOpen(false)}>
                      Svadhyaya
                    </Link>
                    <div className="dropdown-sub-items">
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
            <motion.div whileHover={{ y: -2 }}>
              <a href="#more" className={`nav-link dropdown-toggle ${isMoreActive ? 'active' : ''}`} onClick={(e) => e.preventDefault()}>
                More <ChevronDown size={14} className={`chevron-icon ${moreOpen ? 'rotated' : ''}`} />
              </a>
            </motion.div>
            <AnimatePresence>
              {moreOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                  exit={{ opacity: 0, y: 15, x: "-50%", scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                >
                  <Link to="/coach" onClick={() => setMoreOpen(false)}>Our Founder</Link>
                  <Link to="/team" onClick={() => setMoreOpen(false)}>The Team</Link>
                  <Link to="/blogs" onClick={() => setMoreOpen(false)}>Blogs</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.button 
            className="btn btn-outline nav-contact"
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 20 }}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
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
                    <Link to="/#climb-studio" onClick={() => handleStudioClick('bouldering')}>Bouldering</Link>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.8rem', paddingLeft: '0.5rem' }}>
                  <Link to="/#climb-studio" style={{ fontWeight: 600, color: 'var(--color-blue)', fontSize: '1.1rem' }} onClick={() => setMobileMenuOpen(false)}>
                    Svadhyaya
                  </Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
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
              </div>
              
              <button 
                className="btn btn-outline" 
                onClick={handleContactClick}
                style={{marginTop: '1rem', color: 'var(--color-blue)', borderColor: 'var(--color-blue)'}}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
