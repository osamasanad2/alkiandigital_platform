const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'البرمجة وتطوير الأنظمة',
    description: 'تصميم وتطوير مواقع إلكترونية احترافية، متاجر إلكترونية، أنظمة محاسبية وإدارية ذكية، وحلول مخصصة حسب احتياج مشروعك.',
  },
  {
    icon: 'fas fa-palette',
    title: 'التصميم الجرافيكي والهوية البصرية',
    description: 'تصميم الشعارات والهويات البصرية، تصاميم السوشيال ميديا، الإعلانات والبروشورات، والموشن جرافيك.',
  },
  {
    icon: 'fas fa-video',
    title: 'الإنتاج المرئي',
    description: 'تصوير منتجات وإعلانات، مونتاج فيديوهات احترافية، صناعة محتوى قصير (ريلز / تيك توك)، فيديوهات تسويقية.',
  },
  {
    icon: 'fas fa-hashtag',
    title: 'إدارة السوشيال ميديا',
    description: 'إدارة حسابات الشركات، صناعة ونشر المحتوى، التفاعل مع الجمهور، بناء هوية رقمية قوية.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'التسويق الإلكتروني',
    description: 'إدارة الحملات الإعلانية، استهداف دقيق للعملاء، تحليل أداء مع تحسين مستمر لضمان أعلى عائد على الاستثمار.',
  },
  {
    icon: 'fas fa-feather-alt',
    title: 'كتابة المحتوى',
    description: 'محتوى تسويقي احترافي، كتابة إعلانات جذابة، صياغة تعكس هوية العلامة التجارية.',
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-badge">خدماتنا</span>
          <h2>ماذا نقدم لك؟</h2>
          <div className="divider" />
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card reveal-up" key={service.title}>
              <div className="service-icon">
                <i className={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
