import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import PersonalLife from './components/PersonalLife';
import TimeCapsule from './components/TimeCapsule';
import TributeWall from './components/TributeWall';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const HomePage = () => (
    <div className="min-h-screen bg-snow dark:bg-navy-primary transition-colors duration-500">
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Timeline />
      <Story />
      <Gallery />
      <Testimonials />
      <Achievements />
      <PersonalLife />
      <TimeCapsule />
      <TributeWall />
      <Footer />
    </div>
  );

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;