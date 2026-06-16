import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "Svadhyaya has become my sanctuary. In a world that constantly demands our outward attention, this space gave me the permission and the tools to finally look inward.",
    author: "Elena M.",
    role: "Lifelong Learner"
  },
  {
    id: 2,
    quote: "As an artist, finding a community that values the process of creation over the final product has been incredibly liberating. It's transformed how I approach my work.",
    author: "David K.",
    role: "Visual Artist"
  },
  {
    id: 3,
    quote: "The mindful parenting circles have fundamentally changed my relationship with my children. We now have a shared language for our emotions and a deeper connection.",
    author: "Sarah J.",
    role: "Parent"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="testimonials-wrapper"
        >
          <div className="quote-icon-large">
            <Quote size={80} strokeWidth={1} />
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.author}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
