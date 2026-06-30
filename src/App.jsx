import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import BackgroundDecorations from './components/BackgroundDecorations';

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
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          window.lenis?.scrollTo(element);
        }
      }, 100);
    } else {
      window.lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <BackgroundDecorations />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach" element={<CoachPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/schedule" element={<Navigate to="/booking#schedule" replace />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
