"use server";

/**
 * 🎓 دكتورك يتحدث:
 * مجلد الـ actions:
 * هذا هو سحر Next.js الجديد (App Router)!
 * بفضل توجيه "use server" في أعلى الملف، جميع الدوال هنا ستعمل على السيرفر فقط.
 * 
 * الفائدة:
 * 1. لا حاجة لكتابة API Routes منفصلة (مثل /api/students).
 * 2. يمكنك استدعاء هذه الدوال مباشرة من مكونات الواجهة (Client Components).
 * 3. أمان عالٍ: الكود هنا لا يصل للمتصفح، فيمكنك كتابة استعلامات قاعدة البيانات مباشرة!
 */

import { revalidatePath } from 'next/cache';

/**
 * دالة وهمية لإضافة طالب جديد
 */
export async function addStudent(formData) {
  // 1. استخراج البيانات من الـ formData
  const name = formData.get('name');
  const grade = formData.get('grade');

  // 2. التحقق من البيانات (Validation)
  if (!name || !grade) {
    return { error: 'يرجى تعبئة جميع الحقول' };
  }

  // 3. الاتصال بقاعدة البيانات (محاكاة)
  console.log(`[السيرفر يقول]: جاري إضافة الطالب ${name} في ${grade} لقاعدة البيانات...`);
  await new Promise(resolve => setTimeout(resolve, 1500));

  // 4. إعادة بناء مسار الصفحة لتحديث البيانات المعروضة فوراً
  // revalidatePath('/dashboard/students');

  return { success: true, message: 'تم إضافة الطالب بنجاح' };
}
