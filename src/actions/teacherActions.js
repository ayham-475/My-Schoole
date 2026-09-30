'use server';

import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'mock_db.json');

// 1. دالة لجلب الطلاب فقط (للعرض)
export async function getStudentsList() {
  try {
    const fileContent = await fs.readFile(dbPath, 'utf-8');
    const users = JSON.parse(fileContent);
    
    // تصفية المستخدمين لاستخراج الطلاب فقط
    return users.filter(user => user.role === 'student');
  } catch (error) {
    return []; // إرجاع مصفوفة فارغة في حال لم يوجد طلاب بعد
  }
}

// 2. دالة لتحديث وحفظ درجة الطالب
export async function updateStudentGrade(studentId, grade) {
  try {
    const fileContent = await fs.readFile(dbPath, 'utf-8');
    let users = JSON.parse(fileContent);
    
    // البحث عن الطالب وتحديث درجته
    const studentIndex = users.findIndex(user => user.id === studentId);
    if (studentIndex > -1) {
      users[studentIndex].grade = grade; // إضافة أو تحديث حقل الدرجة
      
      // حفظ التعديلات في الملف
      await fs.writeFile(dbPath, JSON.stringify(users, null, 2));
      return { success: true };
    }
    return { success: false, error: 'لم يتم العثور على الطالب.' };
  } catch (error) {
    return { success: false, error: 'حدث خطأ في السيرفر أثناء الحفظ.' };
  }
}