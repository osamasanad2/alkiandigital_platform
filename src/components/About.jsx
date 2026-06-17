import { useEffect, useRef } from 'react';

function About() {
  const statsRef = useRef(null);
  const countersAnimated = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const nums = el.querySelectorAll('.stat-num');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersAnimated.current) {
          countersAnimated.current = true;
          nums.forEach((num) => {
            const target = parseInt(num.getAttribute('data-target'), 10);
            let current = 0;
            const increment = Math.max(1, Math.floor(target / 40));
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                num.textContent = target + '+';
                clearInterval(timer);
              } else {
                num.textContent = current;
              }
            }, 30);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-badge">نبذة عنا</span>
          <h2>من نحن</h2>
          <div className="divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal-right">
            <p>الكيان ديجيتال هي وكالة متخصصة في الحلول الرقمية المتكاملة، تجمع بين قوة البرمجة ودقة التصميم لنصنع حضورًا رقميًا احترافيًا يعكس هوية عملائنا ويحقق لهم نتائج ملموسة.</p>
            <p>نحوّل كل فكرة إلى حضور رقمي قوي يجذب العملاء ويحقق نتائج ملموسة، مع التركيز على الجودة والإبداع في كل مشروع.</p>
            <div className="about-stats" ref={statsRef}>
              <div className="stat">
                <span className="stat-num" data-target="50">0</span>
                <span className="stat-label">مشروع مكتمل</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-target="30">0</span>
                <span className="stat-label">عميل سعيد</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-target="5">0</span>
                <span className="stat-label">سنوات خبرة</span>
              </div>
            </div>
          </div>
          <div className="about-visual reveal-left">
            <div className="about-card-glow">
              <div className="about-icon-wrapper">
                <i className="fas fa-code"></i>
              </div>
              <p>حيث يلتقي<br /><strong>الكود</strong> بـ <strong>الإبداع</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
