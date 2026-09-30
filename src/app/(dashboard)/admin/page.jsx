'use client';

import React from 'react';

/**
 * 🎓 دكتورك يتحدث:
 * هذه الصفحة الرئيسية للوحة الإدارة (Dashboard).
 * قمنا باستخدام Grid Layout لعرض البطاقات الإحصائية بشكل جميل.
 */

export default function AdminDashboardPage() {
  const stats = [
    { title: 'إجمالي الطلاب', value: '1,240', change: '+12%', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { title: 'إجمالي المعلمين', value: '84', change: '+2', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { title: 'الفصول النشطة', value: '32', change: '0', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
    { title: 'نسبة الحضور اليوم', value: '96%', change: '+1.2%', color: 'bg-amber-50 text-amber-600 border-amber-200' },
  ];

  return (
    <div className="flex flex-col gap-6">
      
      <div>
        <h2 className="text-2xl font-bold text-slate-800">نظرة عامة</h2>
        <p className="text-sm text-slate-500 mt-1">إحصائيات المدرسة لليوم الحالي</p>
      </div>

      {/* قسم البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-6 rounded-xl border ${stat.color} flex flex-col justify-between shadow-sm`}>
            <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className="text-sm font-semibold opacity-70 bg-white/50 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* قسم إضافي مثل جدول أحدث النشاطات */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800">أحدث التسجيلات</h3>
        </div>
        <div className="p-6 flex items-center justify-center text-slate-400 min-h-[200px]">
          سيتم ربط هذا الجدول بقاعدة البيانات قريباً...
        </div>
      </div>

    </div>
  );
}
