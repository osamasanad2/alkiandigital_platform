import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Vision from './components/Vision.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 120;
      let current = 'hero';

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        if (el.offsetTop <= scrollPosition) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
