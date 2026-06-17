function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div className="hero-copy reveal-up">
          <span className="hero-badge">وكالة حلول رقمية متكاملة</span>
          <h1>الكيان ديجيتال<br />حيث يلتقي الكود بالإبداع</h1>
          <p>نحوّل الأفكار إلى واقع رقمي يرفع مشروعك لمستوى جديد.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">تواصل معنا</a>
            <a href="#services" className="btn btn-outline">استعرض خدماتنا</a>
          </div>
        </div>
        <div className="hero-visual reveal-up delay-1">
          <div className="hero-card hero-card-large">
            <span>برمجة متقدمة</span>
          </div>
          <div className="hero-card hero-card-small">
            <span>تصميم مبدع</span>
          </div>
          <div className="hero-card hero-card-logo">
            <img src="/logo.png" alt="الكيان ديجيتال" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
