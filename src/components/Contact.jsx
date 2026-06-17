import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const subject = e.target.subject.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setStatus('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }

    setStatus('جاري التوجيه إلى واتساب...');
    const order = `*📦 طلب جديد من الموقع - الكيان ديجيتال*\n\n*👤 الاسم:* ${name}\n*📧 البريد:* ${email}\n*📌 الموضوع:* ${subject || 'غير محدد'}\n*💬 الرسالة:* ${message}`;
    const whatsappUrl = `https://wa.me/96737226609?text=${encodeURIComponent(order)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setStatus('تم فتح واتساب بنجاح!');
      e.target.reset();
    }, 1200);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-badge">تواصل معنا</span>
          <h2>ابدأ مشروعك اليوم</h2>
          <div className="divider" />
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-right">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fab fa-whatsapp" />
              </div>
              <div>
                <h4>واتساب</h4>
                <a href="https://wa.me/96737226609">00967737226609</a>
                <a href="https://wa.me/96730777322">00967730777322</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="far fa-envelope" />
              </div>
              <div>
                <h4>البريد الإلكتروني</h4>
                <a href="mailto:alkiandigital@gmail.com">alkiandigital@gmail.com</a>
              </div>
            </div>
            <div className="contact-social">
              <a href="#" aria-label="فيسبوك"><i className="fab fa-facebook-f" /></a>
              <a href="#" aria-label="تويتر"><i className="fab fa-x-twitter" /></a>
              <a href="#" aria-label="انستغرام"><i className="fab fa-instagram" /></a>
              <a href="#" aria-label="لينكد إن"><i className="fab fa-linkedin-in" /></a>
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
              <textarea name="message" rows="5" placeholder="رسالتك..." required />
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
