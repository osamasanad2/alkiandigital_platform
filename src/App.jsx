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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'vision', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + 140;
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-right, .reveal-left');
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar activeSection={activeSection} scrolled={scrolled} />
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
