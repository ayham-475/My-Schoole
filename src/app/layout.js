import './globals.css';

export const metadata = {
  title: 'نظام الإدارة المدرسية',
  description: 'منصة ذكية متكاملة لإدارة الطلاب والمعلمين والجداول الدراسية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col">
        {/* سيتم عرض محتوى الصفحات المختلفة هنا */}
        {children}
        
      </body>
    </html>
  );
}