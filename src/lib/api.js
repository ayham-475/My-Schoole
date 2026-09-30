/**
 * 🎓 دكتورك يتحدث:
 * مجلد الـ lib: كلمة lib هي اختصار لـ Library (مكتبة).
 * هنا نضع الإعدادات الخاصة بالمكتبات الخارجية التي يتصل بها تطبيقنا.
 * 
 * أمثلة:
 * - إعدادات الاتصال بقاعدة البيانات (مثل Prisma Client).
 * - إعدادات مكتبة جلب البيانات (مثل Axios instance).
 * - إعدادات بوابات الدفع (Stripe).
 * 
 * الفائدة: مركزية الإعدادات. إذا تغير رابط السيرفر أو كلمة سر الداتابيز، 
 * نغيرها في ملف واحد هنا فقط بدلاً من البحث عنها في كل التطبيق.
 */

// مثال وهمي لاتصال بقاعدة البيانات سنقوم بتفعيله لاحقاً عند استخدام Prisma
/*
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
*/

// حالياً سنضع دالة بسيطة تحاكي جلب البيانات من السيرفر للتجربة
export const api = {
  fetchStudents: async () => {
    // محاكاة تأخير السيرفر
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      { id: 1, name: "أحمد محمد", grade: "الصف العاشر" },
      { id: 2, name: "سارة خالد", grade: "الصف التاسع" },
    ];
  }
};
