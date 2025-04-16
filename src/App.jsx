// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/home'; 
import AboutSection from './components/about';  
import ProjectsSection from './components/projects'; 
import ContactSection from './components/contact'; 
import Footer from './components/Footer'; 
import './index.css'

function App() {
  return (
    <div>
    
      <Navbar />
      
      {/* Sections */}
      <section id="home">
        <HomeSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
