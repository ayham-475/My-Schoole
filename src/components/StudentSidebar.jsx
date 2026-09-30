'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StudentSidebar() {
  // هذه الأداة تخبرنا بالمسار الحالي للمتصفح لتلوين الزر النشط
  const pathname = usePathname();

  const menuItems = [
    { title: 'اللوحة الرئيسية', path: '/student', icon: '🏠' },
    { title: 'الجدول الدراسي', path: '/student/schedule', icon: '📅' },
    { title: 'الدرجات الأكاديمية', path: '/student/grades', icon: '📊' },
    { title: 'الواجبات', path: '/student/assignments', icon: '📝' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col min-h-screen sticky top-0">
      {/* رأس القائمة الجانبية */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800 bg-slate-950">
        <h2 className="text-lg font-bold text-white">بوابة الطالب</h2>
      </div>

      {/* الروابط */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-600 text-white font-semibold shadow-md' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* زر تسجيل الخروج في الأسفل */}
      <div className="p-4 border-t border-slate-800">
        <Link 
          href="/login" 
          className="flex items-center gap-3 px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
        >
          <span>🚪</span>
          <span>تسجيل الخروج</span>
        </Link>
      </div>
    </aside>
  );
}