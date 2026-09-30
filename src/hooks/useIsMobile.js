"use client";

import { useState, useEffect } from 'react';

/**
 * 🎓 دكتورك يتحدث:
 * مجلد الـ hooks (الخطافات المخصصة):
 * عندما تجد نفسك تكرر نفس المنطق (Logic) المرتبط بحالة (State) 
 * في أكثر من مكون، فهذا هو الوقت المناسب لإنشاء Custom Hook!
 * 
 * الفائدة: إعادة استخدام الكود البرمجي (Code Reusability).
 * بدلاً من كتابة كود مراقبة عرض الشاشة أو جلب بيانات في كل صفحة، 
 * نكتبه هنا ونستدعيه بسطر واحد!
 */

/**
 * خطاف مخصص لمعرفة ما إذا كانت الشاشة الحالية هي شاشة هاتف أم لا
 * مفيد جداً في إخفاء وإظهار القائمة الجانبية (Sidebar)
 */
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // التحقق المبدئي
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    checkIsMobile();
    
    // الاستماع لتغيير حجم الشاشة
    window.addEventListener('resize', checkIsMobile);
    
    // التنظيف عند تدمير المكون
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
