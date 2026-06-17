(function () {
  'use strict';

  // ─── Mobile Nav Toggle ───
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ─── Scroll Events ───
  var navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    var reveals = document.querySelectorAll('.reveal-up, .reveal-right, .reveal-left');
    var windowHeight = window.innerHeight;
    var revealPoint = 100;

    reveals.forEach(function (el) {
      var revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  // ─── Counter Animation ───
  var countersAnimated = false;
  var statNumbers = document.querySelectorAll('.stat-num');

  function animateCounters() {
    if (countersAnimated) return;
    var scrollPos = window.scrollY + window.innerHeight;
    var aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    var aboutTop = aboutSection.offsetTop;
    var aboutHeight = aboutSection.offsetHeight;

    if (scrollPos > aboutTop + aboutHeight / 2) {
      countersAnimated = true;
      statNumbers.forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var current = 0;
        var increment = Math.max(1, Math.floor(target / 40));
        var timer = setInterval(function () {
          current += increment;
          if (current >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
            return;
          }
          el.textContent = current;
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  window.addEventListener('load', animateCounters);

  // ─── Smooth Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 80;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ─── Contact Form ───
  var contactForm = document.getElementById('contactForm');
  var WHATSAPP_ORDERS = '967774561368';

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value.trim();
      var message = document.getElementById('message').value.trim();

      var order = '*📦 طلب جديد من الموقع - الكيان ديجيتال*\n\n' +
        '*👤 الاسم:* ' + name + '\n' +
        '*📧 البريد:* ' + email + '\n' +
        '*📌 الموضوع:* ' + (subject || 'غير محدد') + '\n' +
        '*💬 الرسالة:* ' + message;

      var url = 'https://wa.me/' + WHATSAPP_ORDERS + '?text=' + encodeURIComponent(order);

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = '✓ جاري التوجيه للواتساب...';
      btn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';
      btn.disabled = true;

      window.open(url, '_blank');

      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  // ═══════════════════════════════════════════
  //  CHATBOT - الذكاء الاصطناعي
  // ═══════════════════════════════════════════

  var chatbot = document.getElementById('chatbot');
  var chatbotToggle = document.getElementById('chatbotToggle');
  var chatbotClose = document.getElementById('chatbotClose');
  var chatbotWindow = document.getElementById('chatbotWindow');
  var chatbotBody = document.getElementById('chatbotBody');
  var chatbotForm = document.getElementById('chatbotForm');
  var chatbotInput = document.getElementById('chatbotInput');
  var quickReplies = document.getElementById('quickReplies');

  // ─── Knowledge Base ───
  var knowledgeBase = {
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
      keywords: ['برمجة', 'تطوير', 'برنامج', 'موقع', 'system', 'software', 'we dev', 'web', 'app', 'تطبيق',
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
      keywords: ['مرحبا', 'السلام', 'سلام', 'hi', 'hello', 'مرحبتين', 'أهلا', 'hello', 'hey',
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

  // ─── Bot Logic ───
  function findBestResponse(input) {
    var normalized = input.replace(/[^\w\s]/g, '').trim().toLowerCase();

    // Score each category
    var bestCategory = 'default';
    var bestScore = 0;

    for (var category in knowledgeBase) {
      if (category === 'default') continue;
      var kb = knowledgeBase[category];
      var score = 0;
      kb.keywords.forEach(function (keyword) {
        var kw = keyword.toLowerCase().replace(/[^\w\s]/g, '');
        if (normalized.includes(kw)) {
          score += kw.length;
        }
      });
      if (score > bestScore) {
        bestScore = score;
        bestCategory = category;
      }
    }

    return knowledgeBase[bestCategory].response;
  }

  // ─── Render Message ───
  function addMessage(text, sender) {
    var msgDiv = document.createElement('div');
    msgDiv.className = 'chatbot-msg ' + sender;

    var contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';

    // Support markdown-like bold with ** **
    var formatted = text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    contentDiv.innerHTML = '<p>' + formatted + '</p>';
    msgDiv.appendChild(contentDiv);
    chatbotBody.appendChild(msgDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }

  function showTyping() {
    var typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-msg bot';
    typingDiv.id = 'chatbotTyping';
    var contentDiv = document.createElement('div');
    contentDiv.className = 'msg-content';
    contentDiv.innerHTML = '<div class="chatbot-typing"><span></span><span></span><span></span></div>';
    typingDiv.appendChild(contentDiv);
    chatbotBody.appendChild(typingDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }

  function hideTyping() {
    var typing = document.getElementById('chatbotTyping');
    if (typing) typing.remove();
  }

  function botResponse(input) {
    showTyping();

    var delay = 600 + Math.random() * 800;

    setTimeout(function () {
      hideTyping();
      var response = findBestResponse(input);
      addMessage(response, 'bot');

      // Show quick replies again after bot response
      showQuickReplies();
    }, delay);
  }

  function showQuickReplies() {
    if (quickReplies) {
      quickReplies.style.display = 'flex';
    }
  }

  function hideQuickReplies() {
    if (quickReplies) {
      quickReplies.style.display = 'none';
    }
  }

  // ─── Handle Send ───
  function handleSend(message) {
    var text = message || chatbotInput.value.trim();
    if (!text) return;

    hideQuickReplies();
    addMessage(text, 'user');
    chatbotInput.value = '';
    chatbotInput.focus();

    botResponse(text);
  }

  if (chatbotForm) {
    chatbotForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handleSend();
    });
  }

  if (chatbotInput) {
    chatbotInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // ─── Quick Replies ───
  document.querySelectorAll('.quick-reply').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var query = this.getAttribute('data-query');
      var labels = {
        'services': 'أخبرني عن خدماتكم',
        'pricing': 'كم الأسعار؟',
        'contact': 'كيف أتواصل معكم؟',
        'vision': 'ما هي رؤيتكم ورسالتكم؟'
      };
      var message = labels[query] || query;
      hideQuickReplies();
      addMessage(message, 'user');
      botResponse(message);
    });
  });

  // ─── Toggle Chatbot ───
  if (chatbotToggle) {
    chatbotToggle.addEventListener('click', function () {
      chatbot.classList.toggle('open');
      if (chatbot.classList.contains('open')) {
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
        chatbotInput.focus();
      }
    });
  }

  if (chatbotClose) {
    chatbotClose.addEventListener('click', function () {
      chatbot.classList.remove('open');
    });
  }

})();
