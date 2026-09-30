import AdminSidebar from '@/components/AdminSidebar';

export const metadata = {
  title: 'لوحة الإدارة | منصة المدرسة',
};

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50" dir="rtl">
      
      {/* القائمة الجانبية الخاصة بالمدير */}
      <AdminSidebar />

      {/* منطقة المحتوى المتغير (الصفحات الداخلية للمدير) */}
      <main className="flex-1 flex flex-col overflow-x-hidden">
        {/* شريط علوي للمدير */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-lg font-medium text-slate-700">نظام الإدارة الشامل</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">مدير النظام</span>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              م
            </div>
          </div>
        </header>

        {/* محتوى الصفحة */}
        <div className="p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
