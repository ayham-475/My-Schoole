export const metadata = {
  title: 'ماذا نقدم | خدماتنا التعليمية',
};

const SERVICES = [
  {
    id: 1,
    title: 'أنظمة إدارة التعلم (LMS)',
    desc: 'منصة ذكية تتيح للطلاب الوصول للدروس، الواجبات، والمكتبة الرقمية في أي وقت.',
    icon: '💻',
  },
  {
    id: 2,
    title: 'تتبع الأداء والتقييم',
    desc: 'تقارير دورية دقيقة لأولياء الأمور لمتابعة التطور الأكاديمي والسلوكي لأبنائهم.',
    icon: '📈',
  },
  {
    id: 3,
    title: 'فصول افتراضية مدمجة',
    desc: 'دمج تقنيات البث المباشر مع التعليم الوجاهي لضمان استمرارية العملية التعليمية.',
    icon: '🎥',
  },
  {
    id: 4,
    title: 'أنشطة لاصفية تطويرية',
    desc: 'أندية للبرمجة، الروبوتكس، وتنمية المهارات القيادية لاكتشاف مواهب الطلاب.',
    icon: '🏆',
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">ماذا نقدم؟</h1>
        <p className="text-slate-600">نظام بيئي تعليمي متكامل يتجاوز حدود الفصول التقليدية.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}