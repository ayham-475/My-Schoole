import RegisterForm from '@/components/features/RegisterForm';

export const metadata = { title: 'إنشاء حساب | منصة المدرسة' };

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">إنشاء حساب جديد</h2>
      </div>
      
      {/* استدعاء المكون الذكي */}
      <RegisterForm />
    </div>
  );
}