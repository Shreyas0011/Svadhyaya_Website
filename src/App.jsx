import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClimbStudio from './components/ClimbStudio';
import MissionValues from './components/MissionValues';
import CoachInfo from './components/CoachInfo';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Schedule from './components/Schedule';
import Team from './components/Team';

const Home = () => (
  <main>
    <Hero />
    <About />
    <ClimbStudio />
    <MissionValues />
    <FAQ />
  </main>
);

const CoachPage = () => (
  <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
    <CoachInfo />
  </main>
);

const BlogsPage = () => (
  <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
    <Blogs />
  </main>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to hash on load or route change if hash exists
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          lenis.scrollTo(target);
        }
      }, 100);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach" element={<CoachPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
