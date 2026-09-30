import React from 'react';

/**
 * 🎓 دكتورك يتحدث:
 * هذا المكون هو ما نسميه "مكون غبي" (Dumb Component) أو "مكون واجهة" (UI Component).
 * لماذا غبي؟ لأنه لا يفكر! لا يتصل بقاعدة البيانات، ولا يجلب بيانات من السيرفر.
 * مهمته الوحيدة هي: "أعطني الخصائص (props) وسأقوم برسم زر جميل على الشاشة".
 * 
 * الفائدة: يمكننا استخدام هذا الزر في كل مكان في التطبيق (في تسجيل الدخول، في إضافة طالب، الخ)
 * دون الحاجة لإعادة كتابة كود الزر وتنسيقه في كل مرة. هذا هو الاحتراف ومبدأ DRY (Don't Repeat Yourself)!
 */

export const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  // هنا نحدد الألوان بناءً على نوع الزر (primary أو secondary)
  // لاحقاً سنتعلم كيف نستخدم Tailwind بشكل متقدم 
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
