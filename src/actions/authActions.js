// src/actions/auth.js
'use server'; // هذا السطر السحري يخبر النظام أن هذا الكود لا يجب أن يرسل للمتصفح أبداً

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import fs from 'fs/promises'; // مكتبة التعامل مع ملفات السيرفر
import path from 'path';                                                                                                                                                   

// src/actions/authActions.js
// ... (دالة registerUserAction السابقة تبقى كما هي في الأعلى) ...

export async function loginUserAction({ email, password }) {
  try {
    // 1. قراءة قاعدة البيانات (الملف)
    const fileContent = await fs.readFile(dbPath, 'utf-8');
    const users = JSON.parse(fileContent);

    // 2. البحث عن مستخدم يتطابق بريده وكلمة مروره
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      // سر أمني: عند إرجاع بيانات المستخدم للعميل، لا ترجع كلمة المرور أبداً!
      const { password, ...safeUserData } = validUser;
      
      return { success: true, user: safeUserData };
    } else {
      return { success: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.' };
    }
    
  } catch (error) {
    // إذا لم يكن الملف موجوداً، فهذا يعني أنه لا يوجد أي مستخدم مسجل بعد
    return { success: false, error: 'لا يوجد حسابات مسجلة في النظام بعد.' };
  }
}
// تحديد مسار ملف قاعدة البيانات الوهمية (سيتم إنشاؤه في جذر المشروع)
const dbPath = path.join(process.cwd(), 'mock_db.json');

export async function registerUserAction(userData) {
  try {
    let users = [];

    // 1. محاولة قراءة الملف إذا كان موجوداً
    try {
      const fileContent = await fs.readFile(dbPath, 'utf-8');
      users = JSON.parse(fileContent);
    } catch (error) {
      // إذا لم يكن الملف موجوداً، لا مشكلة، سننشئه لاحقاً بمصفوفة فارغة
    }
    
    // 2. التحقق مما إذا كان البريد موجوداً مسبقاً
    const isEmailUsed = users.some((user) => user.email === userData.email);
    if (isEmailUsed) {
      return { success: false, error: 'هذا البريد مسجل مسبقاً في النظام!' };
    }

    // 3. إضافة المستخدم الجديد (مع توليد ID)
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);

    // 4. حفظ البيانات الجديدة في ملف السيرفر (محاكاة قاعدة البيانات)
    // التنسيق (null, 2) يجعل الملف مرتباً وسهل القراءة عند فتحه
    await fs.writeFile(dbPath, JSON.stringify(users, null, 2));

    return { success: true, message: 'تم إنشاء الحساب بنجاح' };
    
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: 'حدث خطأ في السيرفر أثناء الحفظ' };
  }
}