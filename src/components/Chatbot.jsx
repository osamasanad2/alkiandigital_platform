import { useState, useRef, useEffect } from 'react';

const knowledgeBase = {
  services: {
    keywords: ['خدمات', 'خدمة', 'شو تقدم', 'شو بتقدم', 'اعمالكم', 'مجالات', ' activity ', 'نشاطات', 'شغل', 'business'],
    response: 'نقدم في **الكيان ديجيتال** 6 خدمات رئيسية:\n\n' +
      '1️⃣ **البرمجة وتطوير الأنظمة** — مواقع، متاجر إلكترونية، أنظمة محاسبية\n' +
      '2️⃣ **التصميم الجرافيكي والهوية البصرية** — شعارات، سوشيال ميديا، موشن جرافيك\n' +
      '3️⃣ **الإنتاج المرئي** — تصوير، مونتاج، ريلز، فيديوهات تسويقية\n' +
      '4️⃣ **إدارة السوشيال ميديا** — محتوى، تفاعل، هوية رقمية\n' +
      '5️⃣ **التسويق الإلكتروني** — حملات إعلانية، استهداف، تحليل أداء\n' +
      '6️⃣ **كتابة المحتوى** — محتوى تسويقي، إعلانات، صياغة هوية العلامة\n\n' +
      'تقدر تتصفح قسم "خدماتنا" بالأعلى لمزيد من التفاصيل!'
  },
  programming: {
    keywords: ['برمجة', 'تطوير', 'برنامج', 'موقع', 'system', 'software', 'web', 'app', 'تطبيق',
      'متجر', 'ecommerce', 'متاجر', 'محاسبة', 'محاسبي', 'نظام'],
    response: '💻 **البرمجة وتطوير الأنظمة** — من أقوى خدماتنا!\n\n' +
      '• تصميم وتطوير مواقع إلكترونية (HTML/CSS/JS - React - Next.js)\n' +
      '• إنشاء متاجر إلكترونية متكاملة\n' +
      '• برمجة أنظمة محاسبية وإدارية ذكية\n' +
      '• تطوير حلول مخصصة حسب احتياج مشروعك\n\n' +
      'نستخدم أحدث التقنيات لضمان أداء عالٍ وتجربة مستخدم ممتازة.'
  },
  design: {
    keywords: ['تصميم', 'design', 'جرافيك', 'graphic', 'شعار', 'logo', 'identity', 'هوية',
      'سوشيال ميديا', 'موشن', 'motion', 'بروشور', 'إعلان'],
    response: '🎨 **التصميم الجرافيكي والهوية البصرية**\n\n' +
      '• تصميم الشعارات والهويات البصرية الكاملة\n' +
      '• تصاميم السوشيال ميديا\n' +
      '• الإعلانات والبروشورات\n' +
      '• الموشن جرافيك\n\n' +
      'نصمم هوية بصرية تعكس شخصية علامتك التجارية وتترك انطباع لا يُنسى!'
  },
  video: {
    keywords: ['تصوير', 'video', 'مونتاج', 'edit', 'ريلز', 'reels', 'تيك توك', 'tiktok',
      'فيديو', 'إنتاج', 'منتج', 'إعلان', 'production', 'مرئي'],
    response: '🎬 **الإنتاج المرئي**\n\n' +
      '• تصوير منتجات وإعلانات بجودة احترافية\n' +
      '• مونتاج فيديوهات احترافية\n' +
      '• صناعة محتوى قصير (ريلز / تيك توك)\n' +
      '• فيديوهات تسويقية\n\n' +
      'نحوّل أفكارك إلى فيديوهات جذابة تلفت الانتباه!'
  },
  social: {
    keywords: ['سوشيال', 'social', 'ميديا', 'media', 'انستغرام', 'instagram', 'فيسبوك', 'facebook',
      'حسابات', 'إدارة', 'تفاعل', 'نشر', 'هوية رقمية'],
    response: '📱 **إدارة السوشيال ميديا**\n\n' +
      '• إدارة حسابات الشركات على جميع المنصات\n' +
      '• صناعة ونشر المحتوى اليومي\n' +
      '• التفاعل مع الجمهور وبناء مجتمع\n' +
      '• بناء هوية رقمية قوية ومتسقة\n\n' +
      'خلّي علامتك التجارية تكون موجودة دايمًا قدام جمهورك!'
  },
  marketing: {
    keywords: ['تسويق', 'marketing', 'حملات', 'campaign', 'إعلانات', 'ads', 'استهداف',
      'target', 'عائد', 'roi', 'مبيعات', 'sales', 'إلكتروني'],
    response: '📢 **التسويق الإلكتروني**\n\n' +
      '• إدارة الحملات الإعلانية (Google/Facebook/Instagram)\n' +
      '• استهداف دقيق للعملاء المحتملين\n' +
      '• تحليل دقيق للأداء مع تحسين مستمر\n' +
      '• زيادة الوصول والمبيعات بأعلى عائد على الاستثمار\n\n' +
      'نوصّل علامتك التجارية للجمهور المناسب في الوقت المناسب!'
  },
  writing: {
    keywords: ['كتابة', 'كتابة محتوى', 'writing', 'محتوى', 'content', 'نصوص', 'copy',
      'إعلانات', 'صياغة', 'تسويقي'],
    response: '✍️ **كتابة المحتوى**\n\n' +
      '• محتوى تسويقي احترافي\n' +
      '• كتابة إعلانات جذابة\n' +
      '• صياغة تعكس هوية العلامة التجارية\n' +
      '• محتوى للمواقع والسوشيال ميديا\n\n' +
      'الكلمة الصح تفرق — وخبرتنا في الصياغة تضمن وصول رسالتك بقوة!'
  },
  pricing: {
    keywords: ['سعر', 'السعر', 'price', 'pricing', 'كم', 'كم سعر', 'التكلفة', 'تكلفة',
      'بكم', 'شحن', 'أسعار', 'عروض', 'offer', 'باقة', 'باقات', 'سوم', 'الميزانية', 'ميزانية'],
    response: '💰 **عروض الأسعار**\n\n' +
      'أسعارنا تنافسية وتختلف حسب حجم ونطاق المشروع. أفضل نبدأ بمكالمة سريعة نفهم فيها:\n' +
      '• نوع الخدمة المطلوبة\n' +
      '• حجم ونطاق العمل\n' +
      '• المتطلبات التقنية\n\n' +
      '📞 **تواصل معنا عالواتساب** عشان نقدم لك عرض سعر مخصص:\n' +
      '00967737226609'
  },
  contact: {
    keywords: ['تواصل', 'اتصال', 'contact', 'رقم', 'phone', 'واتساب', 'whatsapp', 'ايميل',
      'email', 'بريد', 'الموقع', 'موقعكم', 'وين', 'أين'],
    response: '📞 **معلومات التواصل**\n\n' +
      '📍 **اليمن**\n' +
      '📱 واتساب: 00967737226609  أو  00967730777322\n' +
      '📧 بريد إلكتروني: alkiandigital@gmail.com\n\n' +
      'تقدر تتواصل معنا مباشرة من الزر الأخضر في الزاوية 👈'
  },
  vision: {
    keywords: ['رؤية', 'رؤيتنا', 'vision', 'رسالة', 'رسالتنا', 'mission', 'هدف', 'هدفنا',
      'طموح', 'المستقبل', 'future'],
    response: '🚀 **رؤيتنا**\n' +
      'أن نكون الخيار الأول في اليمن في تقديم الحلول الرقمية المتكاملة، وأن نمثل معيارًا للجودة والاحترافية في عالم البرمجة والتصميم.\n\n' +
      '💡 **رسالتنا**\n' +
      'نساعد عملاءنا على النمو والتميّز من خلال حلول رقمية مبتكرة، تجمع بين الإبداع، التقنية، والنتائج الفعلية.'
  },
  about: {
    keywords: ['نبذة', 'about', 'من أنتم', 'من انتو', 'عنا', 'تعريف', 'من نحن', 'نشاطكم',
      'الشركة', 'شركة', 'وكالة', 'agency'],
    response: '✨ **الكيان ديجيتال** — وكالة حلول رقمية متكاملة، نجمع بين قوة البرمجة ودقة التصميم لنصنع حضورًا رقميًا احترافيًا.\n\n' +
      'نحوّل كل فكرة إلى حضور رقمي قوي يجذب العملاء ويحقق نتائج ملموسة، مع التركيز على الجودة والإبداع في كل مشروع.\n\n' +
      'شعارنا: **"حيث يلتقي الكود بالإبداع"**'
  },
  greeting: {
    keywords: ['مرحبا', 'السلام', 'سلام', 'hi', 'hello', 'مرحبتين', 'أهلا', 'hey',
      'مساء', 'صباح', 'good morning', 'good evening'],
    response: 'مرحباً بك! 👋\nكيف أقدر أساعدك اليوم؟ تقدر تسألني عن خدماتنا، الأسعار، أو أي استفسار آخر.'
  },
  thanks: {
    keywords: ['شكرا', 'thank', 'thanks', 'مشكور', 'الله يعطيك', 'يعطيك العافية', 'تسلم',
      'نشكر', 'appreciate'],
    response: 'العفو! 🌟 دائمًا موجودين لأي استفسار. إذا حاب تبدأ مشروع، تقدر تتواصل معنا مباشرة عالواتساب!'
  },
  default: {
    response: 'شكراً لسؤالك! 😊\n\n' +
      'للأسف ما عندي معلومات كافية عن هذا الموضوع. لكن تقدر:\n' +
      '• تكتب كلمة مفتاحية من الخدمات اللي تهمك\n' +
      '• تتواصل معنا مباشرة عالواتساب: 00967737226609\n\n' +
      'أو اختر من الأسئلة السريعة بالأعلى 👆'
  }
};

function findBestResponse(input) {
  const normalized = input.replace(/[^\w\s]/g, '').trim().toLowerCase();
  let bestCategory = 'default';
  let bestScore = 0;

  for (const category in knowledgeBase) {
    if (category === 'default') continue;
    let score = 0;
    knowledgeBase[category].keywords.forEach((keyword) => {
      const kw = keyword.toLowerCase().replace(/[^\w\s]/g, '');
      if (normalized.includes(kw)) score += kw.length;
    });
    if (score > bestScore) { bestScore = score; bestCategory = category; }
  }

  return knowledgeBase[bestCategory].response;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'مرحباً بك في **الكيان ديجيتال** 👋\nأنا مساعدك الذكي، كيف أقدر أساعدك اليوم؟' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing]);

  const handleSend = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: msg }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { sender: 'bot', text: findBestResponse(msg) }]);
    }, 600 + Math.random() * 800);
  };

  const quickReplies = [
    { query: 'services', label: 'خدماتكم' },
    { query: 'pricing', label: 'عروض الأسعار' },
    { query: 'contact', label: 'طرق التواصل' },
    { query: 'vision', label: 'رؤيتنا ورسالتنا' },
  ];

  const quickLabels = {
    services: 'أخبرني عن خدماتكم',
    pricing: 'كم الأسعار؟',
    contact: 'كيف أتواصل معكم؟',
    vision: 'ما هي رؤيتكم ورسالتكم؟'
  };

  const formatText = (text) => {
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  };

  return (
    <div className={'chatbot' + (open ? ' open' : '')} id="chatbot">
      <div className="chatbot-window" id="chatbotWindow">
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar"><i className="fas fa-robot"></i></div>
            <div>
              <h4>مساعد الكيان</h4>
              <span className="chatbot-status">متصل</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="إغلاق">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="chatbot-body" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={'chatbot-msg ' + msg.sender}>
              <div className="msg-content">
                <p dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
              </div>
            </div>
          ))}
          {typing && (
            <div className="chatbot-msg bot">
              <div className="msg-content">
                <div className="chatbot-typing"><span></span><span></span><span></span></div>
              </div>
            </div>
          )}
          {!typing && messages.length === 1 && (
            <div className="chatbot-quick-replies">
              {quickReplies.map((qr) => (
                <button
                  key={qr.query}
                  className="quick-reply"
                  onClick={() => handleSend(quickLabels[qr.query])}
                >
                  {qr.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="chatbot-footer">
          <form className="chatbot-form" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <input
              type="text"
              placeholder="اكتب رسالتك..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit" aria-label="إرسال"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
      <button className="chatbot-toggle" onClick={() => setOpen((p) => !p)} aria-label="فتح المحادثة">
        <i className="fas fa-comment-dots"></i>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default Chatbot;
