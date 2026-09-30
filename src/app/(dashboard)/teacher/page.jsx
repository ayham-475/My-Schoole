import { getStudentsList } from '@/actions/teacherActions';
import Link from 'next/link';
import { FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa';

export const metadata = {
  title: 'لوحة التحكم | بوابة المعلم',
};

// هذه الصفحة Server Component 100% (سريعة جداً ومؤمنة)
export default async function TeacherDashboardPage() {
  // 1. جلب البيانات من السيرفر مباشرة قبل عرض الصفحة
  const students = await getStudentsList();

  // 2. العمليات الحسابية (تتم في السيرفر ولا تثقل هاتف المستخدم)
  const totalStudents = students.length;
  const gradedStudents = students.filter(student => student.grade !== undefined && student.grade !== "").length;
  const pendingStudents = totalStudents - gradedStudents;
  
  // حساب متوسط درجات الفصل
  const totalGrades = students.reduce((sum, student) => sum + (Number(student.grade) || 0), 0);
  const classAverage = gradedStudents > 0 ? (totalGrades / gradedStudents).toFixed(1) : 0;

  // استخراج أفضل 3 طلاب تم رصد درجاتهم
  const topStudents = [...students]
    .filter(student => student.grade)
    .sort((a, b) => Number(b.grade) - Number(a.grade))
    .slice(0, 3);

  return (
    <div className="space-y-8">
      {/* الترحيب السريع */}
      <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-lg bg-gradient-to-l from-indigo-600 to-indigo-800">
        <h2 className="text-3xl font-bold">مرحباً بك، أستاذ! 👨‍🏫</h2>
        <p className="mt-2 text-indigo-100 text-lg">إليك ملخص أداء فصولك الدراسية لهذا اليوم.</p>
      </div>

      {/* بطاقات الإحصائيات (Stats Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">
            <FaUsers />
          </div>
          <div>
            <h3 className="text-slate-500 font-medium text-sm">إجمالي الطلاب</h3>
            <p className="text-3xl font-bold text-slate-800 mt-1">{totalStudents}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl">
            <FaCheckCircle />
          </div>
          <div>
            <h3 className="text-slate-500 font-medium text-sm">طلاب تم تقييمهم</h3>
            <p className="text-3xl font-bold text-slate-800 mt-1">{gradedStudents}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-2xl">
            <FaStar />
          </div>
          <div>
            <h3 className="text-slate-500 font-medium text-sm">متوسط درجات الفصل</h3>
            <p className="text-3xl font-bold text-slate-800 mt-1">{classAverage}%</p>
          </div>
        </div>
      </div>

      {/* قسم عرض أفضل الطلاب وإجراءات سريعة */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* لوحة أفضل الطلاب */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800">🏆 لوحة الشرف (أفضل 3 طلاب)</h3>
          </div>
          <div className="p-0">
            {topStudents.length > 0 ? (
              <ul className="divide-y divide-slate-100">
                {topStudents.map((student, index) => (
                  <li key={student.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-amber-100 text-amber-600' : index === 1 ? 'bg-slate-100 text-slate-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-slate-700">{student.fullName}</span>
                    </div>
                    <span className="font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                      {student.grade} درجة
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-6 text-center text-slate-500">لا توجد درجات مرصودة حتى الآن.</div>
            )}
          </div>
        </div>

        {/* التنبيهات والمهام */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-4">📋 المهام الحالية</h3>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            {pendingStudents > 0 ? (
              <>
                <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  !
                </div>
                <h4 className="font-bold text-slate-800 mb-2">لديك {pendingStudents} طلاب بلا درجات</h4>
                <p className="text-sm text-slate-500 mb-4">قم برصد درجات الاختبار النصفي لتكتمل الإحصائيات.</p>
                <Link href="/teacher/grades" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  الذهاب لرصد الدرجات
                </Link>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-4">
                  <FaCheckCircle />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">عمل رائع!</h4>
                <p className="text-sm text-slate-500">لقد قمت برصد جميع درجات الطلاب بنجاح.</p>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}