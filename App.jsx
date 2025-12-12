import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FourPillars from './components/Pillars';
import Schedule from './components/Schedule';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'; // Import komponen Footer

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FourPillars />
      <Schedule />
      <Showcase />
      <Testimonials />
      <Footer /> {/* Tambahkan komponen Footer di sini */}
    </div>
  );
}

export default App;