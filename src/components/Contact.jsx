import { useState } from 'react';

const WHATSAPP_ORDERS = '967774561368';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    const order = '*📦 طلب جديد من الموقع - الكيان ديجيتال*\n\n' +
      '*👤 الاسم:* ' + name + '\n' +
      '*📧 البريد:* ' + email + '\n' +
      '*📌 الموضوع:* ' + (subject || 'غير محدد') + '\n' +
      '*💬 الرسالة:* ' + message;

    const url = 'https://wa.me/' + WHATSAPP_ORDERS + '?text=' + encodeURIComponent(order);
    window.open(url, '_blank');

    setStatus('✓ تم التوجيه للواتساب');
    setTimeout(() => { setStatus(''); e.target.reset(); }, 3000);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-badge">تواصل معنا</span>
          <h2>ابدأ مشروعك اليوم</h2>
          <div className="divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal-right">
            <div className="contact-item">
              <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
              <div>
                <h4>واتساب</h4>
                <a href="https://wa.me/967774561368">00967774561368</a>
                <a href="https://wa.me/967737226609">00967737226609</a>
                <a href="https://wa.me/967730777322">00967730777322</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon"><i className="far fa-envelope"></i></div>
              <div>
                <h4>البريد الإلكتروني</h4>
                <a href="mailto:alkiandigital@gmail.com">alkiandigital@gmail.com</a>
              </div>
            </div>
            <div className="contact-social">
              <a href="#" aria-label="فيسبوك"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="تويتر"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="انستغرام"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="لينكد إن"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <form className="contact-form reveal-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="الاسم" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="البريد الإلكتروني" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="الموضوع" />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="رسالتك..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">أرسل رسالتك</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
