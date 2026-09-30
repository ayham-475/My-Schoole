'use client'; // لمعالجة التفاعل والنقرات

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginUserAction } from '@/actions/authActions'; // استدعاء الأكشن الجديد

export default function LoginForm() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // === إرسال البيانات للسيرفر للتحقق منها ===
    const response = await loginUserAction({ email, password });

    if (response.success) {
      // التوجيه الديناميكي بناءً على الدور (Role) القادم من السيرفر
      if (response.user.role === 'student') {
        router.push('/student');
      } else if (response.user.role === 'teacher') {
        router.push('/teacher');
      }
    } else {
      // إظهار الخطأ القادم من السيرفر
      setError(response.error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      {/* عرض رسالة الخطأ */}
      {error && (
        <div className="bg-rose-50 text-rose-600 p-3 rounded-lg text-sm border border-rose-200 text-center">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-left"
          placeholder="name@school.com"
          dir="ltr"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">كلمة المرور</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-left"
          placeholder="••••••••"
          dir="ltr"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-2 bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 flex justify-center"
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          'دخول'
        )}
      </button>

      <div className="mt-4 text-center text-sm text-slate-500 border-t pt-4 border-slate-100">
        ليس لديك حساب؟{' '}
        <Link href="/register" className="text-indigo-600 font-semibold hover:underline">
          إنشاء حساب جديد
        </Link>
      </div>
    </form>
  );
}