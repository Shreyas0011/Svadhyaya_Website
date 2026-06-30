import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo-link">
              <img src="/images/logo.png" alt="Svadhyaya Learning Space" className="footer-logo-image" />
            </a>
            <p className="footer-desc">
              A sanctuary for inner growth, creative expression, and conscious living. Your journey to self begins here.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/svadhyaya.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Explore</h3>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#climb-studio">The Climb Studio</a></li>
              <li><a href="https://www.themovementlab.co.in/" target="_blank" rel="noopener noreferrer">The Movement Labs</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <MapPin size={18} />
                <span>No. 27, 47th A Cross, 5th Block, Jayanagar, Bangalore – 560041</span>
              </li>
              <li>
                <Mail size={18} />
                <span>hello@svadhyaya.space</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+91 99000 12345</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for upcoming events and community stories.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Svadhyaya. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
