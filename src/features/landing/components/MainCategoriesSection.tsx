'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { MAIN_CATEGORIES } from '../data/landingData';
import { CategoryId } from '../data/landingData'
import { CategoryIcon } from './CategoryIcons';

export default function MainCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('engines');

  return (
    <section className="relative z-20 max-w-[1320px] mx-auto px-6 -mt-16 pb-16">
      <div className="bg-white rounded-[28px] shadow-xl border border-slate-100 p-7 md:p-9">
        
        {/* ترويسة القسم */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* العنوان والوصف (يمين) */}
          <div className="flex items-start gap-3.5 text-right">
            <span className="w-1.5 h-11 rounded-full bg-[#F59E0B] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-[24px] font-black text-[#0F172A] leading-tight">
                تصفح الأقسام الرئيسية
              </h2>
              <p className="text-[13.5px] font-semibold text-slate-500 mt-1">
                اختر القسم المطلوب للوصول السريع إلى آلاف قطع الغيار الأصلية
              </p>
            </div>
          </div>

          {/* زر عرض كل الأقسام (يسار) */}
          <Link
            href="/categories"
            className="self-start sm:self-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <span className="text-[12.5px] font-extrabold text-[#0F172A]">
              عرض كل الأقسام
            </span>
            <span className="w-5 h-5 rounded-full bg-[#0EA5E9] text-white flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            </span>
          </Link>
        </div>

        {/* شبكة البطاقات السبع */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {MAIN_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex flex-col items-center justify-between p-5 rounded-2xl transition-all cursor-pointer text-center ${
                  isSelected
                    ? 'bg-[#F0F9FF]/70 border-2 border-[#0EA5E9] shadow-md shadow-sky-500/5'
                    : 'bg-white border border-slate-200/90 hover:border-[#0EA5E9]/60 hover:shadow-sm'
                }`}
              >
                {/* الأيقونة المخصصة */}
                <div className="my-2 group-hover:scale-105 transition-transform">
                  <CategoryIcon id={cat.id} />
                </div>

                {/* اسم القسم */}
                <h3 className="text-[15.5px] font-black text-[#0F172A] mt-3 mb-2">
                  {cat.title}
                </h3>

                {/* شارة عدد القطع */}
                <span
                  dir="ltr"
                  className={`px-3 py-1 rounded-full text-[11.5px] font-extrabold transition-colors ${
                    isSelected
                      ? 'bg-[#E0F2FE] text-[#0284C7]'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
                  }`}
                >
                  {cat.countText}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}