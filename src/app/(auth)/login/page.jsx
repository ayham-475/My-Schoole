import LoginForm from '@/components/features/LoginForm';

// تحسين محركات البحث SEO
export const metadata = {
  title: 'تسجيل الدخول | منصة المدرسة',
  description: 'قم بتسجيل الدخول للوصول إلى لوحة التحكم الخاصة بك',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* القسم الثابت من الصفحة */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">تسجيل الدخول</h2>
        <p className="text-sm text-slate-500 mt-2">مرحباً بعودتك إلى منصة المدرسة</p>
      </div>

      {/* استدعاء المكون الذكي */}
      <LoginForm />
    </div>
  );
}