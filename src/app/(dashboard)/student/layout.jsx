import StudentSidebar from '@/components/StudentSidebar';

export const metadata = {
  title: 'بوابة الطالب | منصة المدرسة',
};

export default function StudentDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      
      {/* القائمة الجانبية الثابتة */}
      <StudentSidebar />

      {/* منطقة المحتوى المتغير (الصفحات الداخلية) */}
      <main className="flex-1 flex flex-col">
        {/* هيدر بسيط للوحة التحكم (ثابت أيضاً) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 shadow-sm">
          <h1 className="text-lg font-medium text-slate-700">الفصل الدراسي الأول 2026</h1>
        </header>

        {/* هنا سيتم عرض محتوى صفحة "الجدول" أو "الدرجات" */}
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}