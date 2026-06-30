import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import './Blogs.css';

const blogPosts = [
  {
    id: 1,
    title: "Happy Birthday!",
    link: "#",
    color: "var(--color-orange)",
    date: "May 7, 2023",
    readTime: "3 min read",
    content: (
      <>
        <p>When I was younger, on birthdays, we’d get one set of new clothes and occasionally Mom would cook our favourite meal for close family members extending to grandparents, siblings of the parents and first cousins. There was yet another tradition – wearing new clothes to school and distributing chocolates to about 40 odd classmates!</p>
        <p>At the age of 10, I finally decided that I wasn’t going to dress differently to school and distribute chocolates to my classmates. My mind reasoned very simply that it made no sense to waste money on or celebrate the day with those privileged, bratty classmates for whom my sole purpose of my existence was to be bullied.</p>
        <p>The following year, I decided there was no point getting those special clothes because we rarely had occasions after that, to wear them. So, at this point I told my parents to donate, if they could, all the money they would otherwise have spent on the clothes and chocolates, to underprivileged children. My parents and grandparents decided that they would instead give me money every year and I could do what I wanted with it. Two things came from this freedom, one respect for money and the value it brings with it and responsibility to make sure it was used wisely.</p>
        <p>With the material attachment from this event being removed, I finally understood what we were really meaning to celebrate was the life that we lived so far and a chance to live, love and laugh through another year!</p>
        <p>Fast forward to today, thanks to AJ’s friends circle I have been attending multiple Birthday Parties of young children with elaborate themes, photoshoots, cakes, decorations, food options, clothing and not to mention the return gifts. The reason – to celebrate the child, make them feel special and show them how much they mean! I am also the pseudo villain for not celebrating AJ’s Birthday in a similar way. At least till she voices out her opinion on how she wants to celebrate it!</p>
        <p>Here’s my perspective, I choose to celebrate life and AJ every moment of every day. On a side note, being socially awkward makes it really hard to host and front end an event 🙈.</p>
        <p>In this blog I have decided to pen down my feelings and perspectives for the path chosen for when AJ grows up and ever wonders, why Birthdays were different for her till she asked for it, if she does!</p>
        <h4 className="blog-content-heading mt-md">My Dear AJ,</h4>
        <p>This is how I intend on celebrating you and life all day everyday till the end of time because you, for me are way too special to be celebrated only on certain days a year!</p>
        <ul className="blog-list">
          <li>I promise to respect you as an individual,</li>
          <li>I promise to build a meaningful connection with you,</li>
          <li>I promise to re-establish the connection every time you need it,</li>
          <li>I promise to cherish every moment & create beautiful memories with you,</li>
          <li>I promise to constantly work on myself to be a better person,</li>
          <li>I promise to model forgiveness, gratitude and empathy,</li>
          <li>I promise to follow your lead for your life,</li>
          <li>I promise that your only boundaries will be a strong value system,</li>
          <li>I promise to rather be the cushion that breaks your fall than the force that stops you,</li>
          <li>I promise to be present, watch every single move that you want me to, & listen to every story that you have to narrate,</li>
          <li>I promise to be brutally honest & congruent with my intent & actions,</li>
          <li>I promise to be your mirror as you are mine,</li>
          <li>I promise to be clear about my boundaries,</li>
          <li>I promise my dear child that I will endeavour to live these promises every day.</li>
        </ul>
        <h4 className="blog-content-heading mt-md">Here are a few questions I would reflect on while planning on hosting an event:</h4>
        <ul className="blog-list">
          <li>What is the intent behind hosting the event?</li>
          <li>Can the event be designed to be zero-waste and sustainable?</li>
          <li>Can the event be celebrated without processed, junk and unhealthy food?</li>
          <li>Can some portion of the money being spent on the event be used to help the under-privileged?</li>
          <li>Can we incorporate local culture and practices in the event?</li>
          <li>What are your thoughts on celebrating certain days of the year?</li>
        </ul>
      </>
    )
  },
  {
    id: 2,
    title: "Superwoman – To Be Or Not To Be!",
    link: "https://www.svadhyayaco.in/post/superwoman-to-be-or-not-to-be",
    color: "var(--color-teal)"
  },
  {
    id: 3,
    title: "My Parenting Pet Peeves - Indulgence!",
    link: "https://www.svadhyayaco.in/post/my-parenting-pet-peeves-indulgence",
    color: "var(--color-blue)"
  },
  {
    id: 4,
    title: "My Parenting Pet Peeves – Plastic!",
    link: "https://www.svadhyayaco.in/post/my-parenting-pet-peeves-plastic",
    color: "var(--color-green)"
  },
  {
    id: 5,
    title: "My Parenting Pet Peeves – Screen Time",
    link: "https://www.svadhyayaco.in/post/my-parenting-pet-peeves-screen-time",
    color: "var(--color-yellow)"
  },
  {
    id: 6,
    title: "My Parenting Pet Peeves – Junk Food",
    link: "https://www.svadhyayaco.in/post/my-parenting-pet-peeves-junk-food",
    color: "var(--color-orange)"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (e, post) => {
    if (post.content) {
      e.preventDefault();
      setSelectedPost(post);
      window.lenis?.stop();
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedPost(null);
    window.lenis?.start();
    // Enable body scroll
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      window.lenis?.start();
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <section id="blogs" className="blogs section-padding">
        <div className="container">
          <div className="blogs-header text-center mb-lg">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
              style={{ color: 'var(--color-teal)' }}
            >
              Insights & Musings
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Journey To Self!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ maxWidth: '700px', margin: '0 auto' }}
            >
              We are all told, "live your life to the fullest"; I am here to do just that while partnering, learning, growing and transforming with you in your journey to achieve your purpose! We are in this together!
            </motion.p>
          </div>

          <motion.div 
            className="blogs-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {blogPosts.map((post) => (
              <motion.a 
                key={post.id} 
                href={post.link}
                onClick={(e) => handleCardClick(e, post)}
                target={post.content ? "_self" : "_blank"}
                rel={post.content ? "" : "noopener noreferrer"}
                className="blog-card"
                variants={cardVariants}
              >
                <div className="blog-card-accent" style={{ backgroundColor: post.color }}></div>
                <div className="blog-card-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-read-more" style={{ color: post.color }}>
                    <span>{post.content ? "Read Article" : "Read on Medium"}</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            className="blog-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="blog-modal-content"
              data-lenis-prevent
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100vh', opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="blog-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="blog-modal-header" style={{ borderBottom: `4px solid ${selectedPost.color}` }}>
                <h2>{selectedPost.title}</h2>
                <div className="blog-meta">
                  <span className="blog-author">By Svadhyaya</span>
                  <span className="blog-date">{selectedPost.date}</span>
                  <span className="blog-read-time">{selectedPost.readTime}</span>
                </div>
              </div>
              
              <div className="blog-modal-body">
                {selectedPost.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blogs;
