'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UsersIcon, 
  BookOpenIcon, 
  Cog6ToothIcon 
} from '@heroicons/react/24/outline'; // سنفترض وجود مكتبة الأيقونات، إن لم تكن سنستخدمها كنصوص

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'الرئيسية', href: '/admin', icon: '📊' },
    { name: 'إدارة الطلاب', href: '/admin/students', icon: '🎓' },
    { name: 'إدارة المعلمين', href: '/admin/teachers', icon: '👨‍🏫' },
    { name: 'الإعدادات', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col transition-all">
      <div className="h-16 flex items-center justify-center border-b border-slate-800">
        <h2 className="text-xl font-bold tracking-wide">الإدارة العليا</h2>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full py-2 px-4 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors font-medium">
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
