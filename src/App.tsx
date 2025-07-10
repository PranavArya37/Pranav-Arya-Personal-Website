import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import BioSection from './components/BioSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
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
}

export default App;