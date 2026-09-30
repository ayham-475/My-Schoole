export default function AuthLayout({ children }) {
  return (
    // خلفية متدرجة وحاوية تجعل المحتوى في منتصف الشاشة تماماً
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        {/* صفحة الـ login ستُعرض هنا */}
        {children}
      </div>
    </div>
  );
}