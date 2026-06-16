import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What age groups are your programs for?",
    answer: "Our core programs, including Climbing, Kalaripayattu, Bharatanatyam, and Mrudangam, are designed for both kids and adults. We tailor the sessions to suit the learning pace and physical capabilities of different age groups."
  },
  {
    question: "Do I need prior experience to join?",
    answer: "Not at all! All our spaces are welcoming to beginners. Our experienced facilitators will guide you from the ground up, whether you're scaling a wall for the first time or taking your first steps in Bharatanatyam."
  },
  {
    question: "How do I book a session or class?",
    answer: "You can easily book a session by clicking the 'Book Now' button in our navigation menu, or by reaching out to us directly via the 'Contact Us' page."
  },
  {
    question: "What should I wear to the Climb Studio?",
    answer: "We recommend comfortable, breathable athletic wear for Climbing and Kalaripayattu. For Bharatanatyam and Mrudangam, traditional or comfortable loose clothing is ideal. Specific guidelines will be provided upon registration."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <div className="faq-header">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Got Questions?
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotate' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
