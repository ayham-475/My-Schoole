// هذه الصفحة تعمل بالكامل على الخادم (Server Component)

export const metadata = {
  title: 'من نحن | مدارس القمة',
  description: 'تعرف على رؤيتنا، رسالتنا، وتاريخنا في بناء جيل واعد.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">من نحن</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          نحن صرح تعليمي رائد يهدف إلى تقديم تعليم نوعي يجمع بين الأصالة والمعاصرة. 
          نسعى لبناء شخصية الطالب المتكاملة من خلال بيئة تفاعلية محفزة على الابتكار.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* قسم الرؤية */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
            👁️
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">رؤيتنا</h2>
          <p className="text-slate-600 leading-relaxed">
            أن نكون المؤسسة التعليمية الأولى التي تخرج قادة المستقبل، متسلحين بالعلم والمعرفة، وقادرين على مواكبة التطورات التكنولوجية وصناعة الأثر الإيجابي في المجتمع.
          </p>
        </div>

        {/* قسم الرسالة */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">رسالتنا</h2>
          <p className="text-slate-600 leading-relaxed">
            تقديم تعليم متميز يعتمد على أحدث المناهج التربوية والتقنية، وتنمية مهارات التفكير الناقد والإبداعي لدى الطلاب في بيئة آمنة وداعمة.
          </p>
        </div>
      </div>
    </div>
  );
}