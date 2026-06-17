import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Vision from './components/Vision.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Chatbot from './components/Chatbot.jsx';
import './styles.css';

function App() {
  useEffect(() => {
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

    const reveals = document.querySelectorAll('.reveal-up, .reveal-right, .reveal-left');
    reveals.forEach((el) => observer.observe(el));

    // Re-run after a short delay to catch any late-mounted elements
    setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-right, .reveal-left').forEach((el) => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    }, 300);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
}

export default App;
