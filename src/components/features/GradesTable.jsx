'use client';

import { useState } from 'react';
import { updateStudentGrade } from '@/actions/teacherActions';

export default function GradesTable({ initialStudents }) {
  // استخدام البيانات القادمة من السيرفر كقيمة أولية للحالة
  const [students, setStudents] = useState(initialStudents);
  const [loadingId, setLoadingId] = useState(null); // لمعرفة أي طالب يتم حفظ درجته الآن

  const handleGradeChange = (studentId, value) => {
    // تحديث الدرجة في الشاشة فقط (مؤقتاً قبل الحفظ)
    setStudents(prev => 
      prev.map(student => 
        student.id === studentId ? { ...student, grade: value } : student
      )
    );
  };

  const handleSaveGrade = async (studentId, grade) => {
    setLoadingId(studentId); // تشغيل أيقونة التحميل لهذا الطالب فقط
    
    const response = await updateStudentGrade(studentId, grade);
    
    if (!response.success) {
      alert(response.error); // في النظام الحقيقي نستخدم Toast Notification بدلاً من alert
    }
    
    setLoadingId(null); // إيقاف التحميل
  };

  if (students.length === 0) {
    return <div className="p-8 text-center text-slate-500 bg-white rounded-xl border">لا يوجد طلاب مسجلين في النظام بعد.</div>;
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
      <table className="w-full text-right">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 text-slate-600 font-semibold">اسم الطالب</th>
            <th className="p-4 text-slate-600 font-semibold">البريد الإلكتروني</th>
            <th className="p-4 text-slate-600 font-semibold w-48">الدرجة (من 100)</th>
            <th className="p-4 text-slate-600 font-semibold w-32">الإجراء</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-slate-50 transition-colors">
              <td className="p-4 font-medium text-slate-800">{student.fullName}</td>
              <td className="p-4 text-slate-500">{student.email}</td>
              <td className="p-4">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={student.grade || ''}
                  onChange={(e) => handleGradeChange(student.id, e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none text-center"
                  placeholder="-"
                />
              </td>
              <td className="p-4">
                <button
                  onClick={() => handleSaveGrade(student.id, student.grade)}
                  disabled={loadingId === student.id || !student.grade}
                  className="px-4 py-1.5 bg-emerald-100 text-emerald-700 font-medium rounded-md hover:bg-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full"
                >
                  {loadingId === student.id ? 'يتم الحفظ...' : 'حفظ'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}