// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';  // Import Navbar component
import HomeSection from './components/home';  // Import Home section component
import AboutSection from './components/about';  // Import About section component
import ProjectsSection from './components/projects';  // Import Projects section component
import ContactSection from './components/contact';  // Import Contact section component
import Footer from './components/Footer';  // Import Footer component
import './index.css'

function App() {
  return (
    <div>
      {/* Navbar will be fixed at the top */}
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
