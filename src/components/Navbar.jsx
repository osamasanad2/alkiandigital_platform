import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'نبذة عنا' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'vision', label: 'رؤيتنا' },
  { id: 'contact', label: 'تواصل معنا' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 140;
      let current = 'hero';
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) current = link.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={'navbar' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          <img src="/logo.png" alt="الكيان ديجيتال" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="logo-text">الكيان ديجيتال</span>
            <span className="logo-sub">AlKian Digital</span>
          </div>
        </a>

        <button className={'nav-toggle' + (open ? ' active' : '')} onClick={() => setOpen((p) => !p)} aria-label="القائمة">
          <span></span><span></span><span></span>
        </button>

        <nav className={'nav-menu' + (open ? ' active' : '')}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={'nav-link' + (activeSection === link.id ? ' active' : '')}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
