import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import BioSection from './components/BioSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

const HomePage: React.FC = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <IntroSection />
      <section id="about">
        <BioSection />
      </section>
      <section id="work">
        <WorkSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add future routes here, for example: */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/Projects" element={<Projects />} />

        {/* 404 catch-all route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;