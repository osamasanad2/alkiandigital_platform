function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/logo.png" alt="الكيان ديجيتال" className="footer-logo-img" />
          <div>
            <span className="logo-text">الكيان ديجيتال</span>
            <span className="logo-sub">AlKian Digital</span>
          </div>
          <p>حيث يلتقي الكود بالإبداع — نحوّل الأفكار إلى واقع رقمي.</p>
        </div>
        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="#hero">الرئيسية</a></li>
            <li><a href="#about">نبذة عنا</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#vision">رؤيتنا</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </div>
        <div className="footer-services">
          <h4>خدماتنا</h4>
          <ul>
            <li><a href="#services">البرمجة والتطوير</a></li>
            <li><a href="#services">التصميم الجرافيكي</a></li>
            <li><a href="#services">الإنتاج المرئي</a></li>
            <li><a href="#services">التسويق الإلكتروني</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>تواصل معنا</h4>
          <a href="https://wa.me/96737226609">00967737226609</a>
          <a href="https://wa.me/96730777322">00967730777322</a>
          <a href="mailto:alkiandigital@gmail.com">alkiandigital@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 الكيان ديجيتال | AlKian Digital. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;
