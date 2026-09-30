import Link from 'next/link';
export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* شريط التنقل العام (Navbar) */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-indigo-700">
            مدارس<span className="text-slate-800">القمة</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-slate-600 hover:text-indigo-600 font-medium transition">الرئيسية</Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600 font-medium transition">من نحن</Link>
            <Link href="/services" className="text-slate-600 hover:text-indigo-600 font-medium transition">ماذا نقدم</Link>
          </nav>

          <Link href="/login" className="px-5 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition">
            دخول النظام
          </Link>

        </div>
       
      </header>

      {/* محتوى الصفحات */}
      <main className="flex-1">
        {children}
      </main>

      {/* الفوتر العام */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center mt-auto">
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمدارس القمة الأهلية.</p>
      </footer>
    </div>
  );
}