import { useState } from 'react';

const navLinks = [
  { id: 'hero', label: 'الرئيسية' },
  { id: 'about', label: 'نبذة عنا' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'vision', label: 'رؤيتنا' },
  { id: 'contact', label: 'تواصل معنا' },
];

function Navbar({ activeSection, scrolled }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 90, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#hero" className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img src="/logo.png" alt="الكيان ديجيتال" className="nav-logo-img" />
          <div className="nav-logo-text">
            <span className="logo-text">الكيان ديجيتال</span>
            <span className="logo-sub">AlKian Digital</span>
          </div>
        </a>

        <button className={`nav-toggle ${open ? 'active' : ''}`} onClick={() => setOpen((prev) => !prev)} aria-label="القائمة">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${open ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
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
