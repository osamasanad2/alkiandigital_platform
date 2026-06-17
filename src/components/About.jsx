function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-badge">نبذة عنا</span>
          <h2>من نحن</h2>
          <div className="divider" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal-right">
            <p>
              الكيان ديجيتال هي وكالة متخصصة في الحلول الرقمية المتكاملة، تجمع بين قوة البرمجة ودقة التصميم لنصنع حضورًا رقميًا احترافيًا يعكس هوية عملائنا ويحقق لهم نتائج ملموسة.
            </p>
            <p>
              نحوّل كل فكرة إلى حضور رقمي قوي يجذب العملاء ويحقق نتائج ملموسة، مع التركيز على الجودة والإبداع في كل مشروع.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-num" data-target="50">0</span>
                <span>مشروع مكتمل</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-target="30">0</span>
                <span>عميل سعيد</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-target="5">0</span>
                <span>سنوات خبرة</span>
              </div>
            </div>
          </div>
          <div className="about-visual reveal-left">
            <div className="about-card-glow">
              <div className="about-icon-wrapper">
                <i className="fas fa-code" />
              </div>
              <p>
                حيث يلتقي <strong>الكود</strong> بـ <strong>الإبداع</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
