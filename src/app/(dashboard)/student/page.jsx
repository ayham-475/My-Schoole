

// هذه الصفحة Server Component تجلب البيانات فوراً قبل عرضها

export default function StudentOverviewPage() {
  return (
    <div className="space-y-6">
      
      {/* قسم الترحيب */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">مرحباً، أحمد محمد 👋</h2>
          <p className="text-slate-500 mt-1">الصف الثالث الثانوي - قسم نظم المعلومات</p>
        </div>
        <div className="text-right">
          <span className="block text-sm text-slate-500">معدل الحضور</span>
          <span className="text-3xl font-bold text-emerald-500">95%</span>
        </div>
      </div>

      {/* شبكة الإحصائيات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100 border-t-4 border-t-indigo-500">
          <h3 className="text-slate-500 font-medium">الواجبات المعلقة</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">3</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 border-t-4 border-t-amber-500">
          <h3 className="text-slate-500 font-medium">الاختبارات القادمة</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">1</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 border-t-4 border-t-emerald-500">
          <h3 className="text-slate-500 font-medium">المعدل التراكمي</h3>
          <p className="text-3xl font-bold text-slate-800 mt-2">4.8/5.0</p>
        </div>
      </div>

    </div>
  );
}