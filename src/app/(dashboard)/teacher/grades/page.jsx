import { getStudentsList } from '@/actions/teacherActions';
import GradesTable from '@/components/features/GradesTable';

export const metadata = {
  title: 'رصد الدرجات | بوابة المعلم',
};

// هذه الصفحة تعمل كـ Server Component
export default async function GradesPage() {
  // 1. السيرفر يجلب البيانات من قاعدة البيانات قبل أن تفتح الصفحة
  const students = await getStudentsList();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">رصد درجات الطلاب</h2>
        <p className="text-slate-500 mt-1">قم بإدخال درجات الاختبار النصفي للطلاب المسجلين.</p>
      </div>

      {/* 2. السيرفر يمرر البيانات الجاهزة لمكون العميل لعرضها وتعديلها */}
      <GradesTable initialStudents={students} />
    </div>
  );
}