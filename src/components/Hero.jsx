function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="circuit-bg"></div>
      <div className="container hero-content">
        <div className="hero-badge reveal-up">وكالة حلول رقمية متكاملة</div>
        <h1 className="hero-title reveal-up">
          <span className="logo-icon" aria-label="KD logo">
            <span className="logo-letter">K</span>
            <span className="logo-letter">D</span>
          </span>
          <span>الكيان ديجيتال</span>
          <span className="hero-title-en">AlKian Digital</span>
        </h1>
        <p className="hero-tagline reveal-up">حيث يلتقي الكود بالإبداع</p>
        <p className="hero-desc reveal-up">نحوّل الأفكار إلى واقع رقمي يرفع مشروعك لمستوى جديد</p>
        <div className="hero-actions reveal-up">
          <a href="#contact" className="btn btn-primary">تواصل معنا</a>
          <a href="#services" className="btn btn-outline">استعرض خدماتنا</a>
        </div>
      </div>
      <div className="hero-glow"></div>
    </section>
  );
}

export default Hero;
