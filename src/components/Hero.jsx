import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Parallax } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: "Journey to Self",
    subtitle: "A community space for learning, creativity, connection and conscious living.",
    image: "/images/hero_1.png"
  },
  {
    id: 2,
    title: "Embrace the Spiral",
    subtitle: "Growth is a continuous journey of returning to your center with new perspective.",
    image: "/images/hero_2.png"
  },
  {
    id: 3,
    title: "Nurture Your Being",
    subtitle: "Discover mindful practices that ground you deeply in the present moment.",
    image: "/images/hero_3.png"
  }
];

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        effect="fade"
        speed={1500}
        parallax={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"><span class="progress"></span></span>';
          },
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-20%"
            ></div>
            <div className="slide-overlay-premium"></div>
            
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hero-text-wrapper"
              >
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle-text">{slide.subtitle}</p>
                
                <div className="hero-ctas">
                  <a href="#climb-studio" className="btn btn-primary hero-btn-main">Explore Spaces</a>
                  <a href="#about" className="btn btn-outline hero-btn-outline">Our Story</a>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
