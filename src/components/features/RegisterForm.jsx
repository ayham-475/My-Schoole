'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerUserAction } from '@/actions/authActions'; // استدعاء دالة السيرفر

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'student', // القيمة الافتراضية
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // دالة تحديث البيانات عند الكتابة
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // دالة معالجة الإرسال
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // إرسال البيانات إلى السيرفر (actions)
      const response = await registerUserAction(formData);

      if (response.success) {
        // إذا نجح الحفظ في السيرفر، انتقل لصفحة الدخول
        router.push('/login');
      } else {
        // إذا رفض السيرفر (مثلاً البريد مكرر)، اعرض رسالة الخطأ
        setError(response.error);
        setIsLoading(false);
      }
    } catch (err) {
      setError('حدث خطأ في الاتصال بالسيرفر.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4">
      
      {/* عرض الأخطاء إن وجدت */}
      {error && (
        <div className="bg-rose-50 text-rose-600 p-3 rounded-lg text-sm border border-rose-200 text-center">
          {error}
        </div>
      )}

      {/* حقل تحديد الدور (Role) */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">نوع الحساب (الدور)</label>
        <div className="grid grid-cols-2 gap-3">
          <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${
            formData.role === 'student' ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold shadow-sm' : 'border-slate-200 hover:bg-slate-50 text-slate-600'
          }`}>
            <input type="radio" name="role" value="student" className="hidden" checked={formData.role === 'student'} onChange={handleChange} />
            👨‍🎓 طالب
          </label>
          <label className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${
            formData.role === 'teacher' ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold shadow-sm' : 'border-slate-200 hover:bg-slate-50 text-slate-600'
          }`}>
            <input type="radio" name="role" value="teacher" className="hidden" checked={formData.role === 'teacher'} onChange={handleChange} />
            👨‍🏫 معلم
          </label>
        </div>
      </div>

      {/* حقل الاسم الرباعي */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          placeholder="مثال: أحمد محمد علي"
        />
      </div>

      {/* حقل البريد الإلكتروني */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-left"
          placeholder="name@school.com"
          dir="ltr"
        />
      </div>

      {/* حقل كلمة المرور */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">كلمة المرور</label>
        <input
          type="password"
          name="password"
          required
          minLength={6}
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-left"
          placeholder="••••••••"
          dir="ltr"
        />
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full mt-4 bg-indigo-600 text-white font-medium py-2.5 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 flex justify-center"
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        ) : (
          'إنشاء الحساب'
        )}
      </button>

      {/* رابط للعودة لتسجيل الدخول */}
      <p className="text-center text-sm text-slate-500 mt-2 border-t pt-4 border-slate-100">
        لديك حساب بالفعل؟{' '}
        <Link href="/login" className="text-indigo-600 font-semibold hover:underline transition-all">
          تسجيل الدخول
        </Link>
      </p>
    </form>
  );
}               