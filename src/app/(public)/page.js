import Link from 'next/link';

export default function SchoolLandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-6">
        مرحباً بك في المنصة التعليمية الذكية
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mb-10">
        نظام متكامل يربط الإدارة، المعلمين، والطلاب لتجربة تعليمية سلسة، تفاعلية، ومتقدمة.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/login" 
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
        >
          تسجيل الدخول للطلاب
        </Link>
        <Link 
          href="/about" 
          className="px-6 py-3 bg-white text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition"
        >
          عن المدرسة
        </Link>
      </div>
    </main>
  );
}