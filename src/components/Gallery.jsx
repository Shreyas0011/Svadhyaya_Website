import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import './Gallery.css';

const galleryItems = [
  { id: 1, src: '', category: 'nature', alt: 'Placeholder', color: 'var(--color-blue)' },
  { id: 2, src: '', category: 'community', alt: 'Placeholder', color: 'var(--color-orange)' },
  { id: 3, src: '', category: 'art', alt: 'Placeholder', color: 'var(--color-teal)' },
  { id: 4, src: '', category: 'spaces', alt: 'Placeholder', color: 'var(--color-yellow)' },
  { id: 5, src: '', category: 'art', alt: 'Placeholder', color: 'var(--color-lavender)' },
  { id: 6, src: '', category: 'music', alt: 'Placeholder', color: 'var(--color-sand)' },
  { id: 7, src: '', category: 'spaces', alt: 'Placeholder', color: 'var(--color-light-teal)' }
];

const categories = ['all', 'spaces', 'community', 'art', 'nature', 'music'];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [index, setIndex] = useState(-1);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const slides = filteredItems.map(item => ({ src: item.src }));

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="text-center mb-md">
          <h4 className="section-subtitle">Moments in Time</h4>
          <h2 className="section-title">Visual Journey</h2>
        </div>

        <div className="gallery-filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredItems.map((item, i) => (
                <div 
                  key={item.id} 
                  className="gallery-item"
                  onClick={() => item.src ? setIndex(i) : null}
                  style={!item.src ? { backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' } : {}}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.alt} />
                  ) : (
                    <div style={{ color: 'rgba(0,0,0,0.2)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', textTransform: 'uppercase' }}>Placeholder</div>
                  )}
                  <div className="gallery-overlay">
                    <Maximize2 size={24} color="white" />
                  </div>
                </div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default Gallery;
