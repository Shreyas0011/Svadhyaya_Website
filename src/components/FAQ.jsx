import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What age groups are your programs for?",
    answer: "Our core programs, including Bouldering, Kalaripayattu, Bharatanatyam, and Mrudangam, are designed for both kids and adults. Children as young as 4 years old can join our programs. Children younger than 4 are welcome when accompanied by a parent for a shared child-and-parent experience. We tailor all sessions to suit the learning pace and physical capabilities of different age groups."
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
    question: "What should I wear for the sessions?",
    answer: "We recommend wearing comfortable, breathable clothing that allows for easy movement. For movement and physical sessions, athletic wear is best, while loose-fitting or traditional clothing is ideal for arts and music programs. Specific guidelines will be shared upon registration."
  },
  {
    question: "What is your pricing and fee structure?",
    answer: "We offer both monthly and quarterly fee structures. Enrolling in our Quarterly Fee Structure provides a discounted rate compared to the monthly membership. Walk-in slots are also available for specific activities like bouldering. You can view standard monthly prices on the booking form or contact us for detailed quarterly packages."
  },
  {
    question: "What is the policy for missed sessions?",
    answer: "If a learner misses a scheduled session, refunds are not provided; however, you are welcome to attend another active ongoing session of the same program as a make-up class. If Svadhyaya cancels or misses a session, we will either compensate the fee in your next cycle or schedule an extra session."
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
