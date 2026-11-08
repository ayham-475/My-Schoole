'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, Plus, Check, Tag, Headphones } from 'lucide-react';
import { VEHICLE_FILTERS, TRUST_FEATURES } from '../features/data/landingData'

export default function HeroSearchSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({
    make: 'تويوتا (Toyota)',
    model: 'كامري (Camry)',
    year: '2020 - 2026',
    condition: 'أصلي وكالة',
  });

  const handleFilterChange = (id: string, value: string) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section className="relative w-full min-h-[640px] md:min-h-[720px] overflow-hidden pt-12 pb-24 lg:py-32 flex items-center">
      
      {/* ================================================================= */}
      {/* الصورة الواقعية كخلفية (Background) مع دمجها بالتدرجات والظلال     */}
      {/* ================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* الصورة الأساسية مع تحسين دقة التموضع (تموضع الرجل والسيارة على اليمين) */}
        <Image
          src="/غيلر.webp" 
          alt="ورشة صيانة غيار لقطع السيارات"
          fill
          priority
          quality={100}
          className="object-cover object-center lg:object-[right_35%] transform scale-x-100 transition-transform duration-700" 
        />
        
        {/* التراكب المظلم والملون (Overlays) لضمان تباين النصوص وتكامل الهوية البصرية */}
        {/* 1. تراكب كحلي غامق متدرج لليسار واليمين */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051B2B]/95 via-[#07263C]/80 to-[#051B2B]/70" />
        
        {/* 2. تدرج سفلي داكن لدمج السيكشن مع بقية الصفحة بسلاسة */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#051B2B]/20 to-[#051B2B]" />
        
        {/* 3. شبكة الخطوط الهندسية الرقمية الخفيفة لتعزيز الطابع التقني للمنصة */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ================================================================= */}
      {/* المحتوى الرئيسي لقسم الـ Hero                                      */}
      {/* ================================================================= */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-6">
        
        {/* 1. الشارة العلوية والعنوان الرئيسي (محاذاة لليمين) */}
        <div className="flex flex-col items-start text-right mb-8">
          {/* شارة الانطلاق والريادة */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#092D46]/85 border border-[#19537A] mb-5 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[12.5px] font-extrabold text-slate-100 tracking-wide">
              المنصة الأولى لقطع غيار السيارات في اليمن
            </span>
          </div>

          {/* العنوان الرئيسي العريض */}
          <h1 className="text-[36px] sm:text-[46px] md:text-[54px] font-black text-white leading-[1.2] tracking-tight">
            كل ما تحتاجه لسيارتك
            <br />
            <span className="relative inline-block text-[#FBBF24] mt-1.5 drop-shadow-md">
              في مكان واحد
              <span className="absolute -bottom-2 right-0 w-full h-[3.5px] bg-gradient-to-l from-[#F59E0B] to-transparent rounded-full" />
            </span>
          </h1>

          {/* الوصف القصير والجاذب */}
          <p className="text-[15.5px] md:text-[17px] font-bold text-slate-200 mt-5 max-w-2xl leading-relaxed drop-shadow-sm">
            قطع غيار أصلية ومضمونة من أفضل المتاجر المعتمدة في صنعاء وجميع المحافظات.
          </p>
        </div>

        {/* 2. شريط البحث الهجين الرئيسي */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full bg-white/95 hover:bg-white rounded-2xl p-2 shadow-2xl shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-2.5 mb-5 backdrop-blur-sm border border-white/10 transition-all"
        >
          {/* حقل إدخال النص */}
          <div className="w-full flex-1 flex items-center gap-3 pr-3.5">
            <Search className="w-5.5 h-5.5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم القطعة، الرقم التسلسلي، أو رقم الشاصي (مثال: فلاتر زيت، فحمات كامري...)"
              className="w-full h-12 bg-transparent text-[#0F172A] placeholder:text-slate-400 font-extrabold text-[14.5px] focus:outline-none text-right"
            />
          </div>

          {/* زر البحث الملون والنشط */}
          <button
            type="submit"
            className="w-full md:w-auto h-[52px] px-8 rounded-xl bg-gradient-to-b from-[#FBBF24] to-[#EAB308] hover:from-[#F59E0B] hover:to-[#D97706] text-[#0F172A] font-black text-[15.5px] flex items-center justify-center gap-2.5 shrink-0 shadow-lg shadow-amber-500/10 transition-all cursor-pointer transform active:scale-[0.98]"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>ابحث الآن</span>
          </button>
        </form>

        {/* 3. فاصل التحديد المباشر للسيارة */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[13px] font-black text-[#7DD3FC] shrink-0 drop-shadow-sm">
            أو حدد سيارتك للفلترة المباشرة من القوائم:
          </span>
          <div className="flex-1 border-b border-dashed border-[#1B5278] opacity-60" />
        </div>

        {/* 4. شبكة قوائم فلترة السيارة (4 قوائم + زر اطلب قطعة الآن) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          {VEHICLE_FILTERS.map((filter) => (
            <div
              key={filter.id}
              className="relative bg-white/95 rounded-xl px-4 py-2.5 shadow-md border border-slate-100 flex flex-col justify-center hover:border-[#0EA5E9] hover:bg-white transition-all group"
            >
              {/* تسمية الحقل مع الأيقونة الملونة الصغيرة */}
              <div className="flex items-center justify-between text-[11px] font-extrabold text-slate-400 mb-0.5">
                <div className="flex items-center gap-1.5">
                  {filter.id === 'make' && (
                    <span className="w-3.5 h-2.5 rounded-sm bg-[#0EA5E9] inline-block" />
                  )}
                  {filter.id === 'model' && (
                    <span className="w-3 h-3 rounded-full border-2 border-[#0EA5E9] inline-block" />
                  )}
                  {filter.id === 'year' && (
                    <span className="w-3 h-3 rounded-sm border-2 border-[#F59E0B] inline-block" />
                  )}
                  {filter.id === 'condition' && (
                    <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block" />
                  )}
                  <span>{filter.label}</span>
                </div>
              </div>

              {/* القائمة المنسدلة التفاعلية */}
              <div className="relative flex items-center justify-between">
                <select
                  aria-label={filter.label}
                  value={selectedFilters[filter.id]}
                  onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                  className="w-full appearance-none bg-transparent text-[#0F172A] font-black text-[13.5px] focus:outline-none cursor-pointer pr-0 pl-5 text-right"
                >
                  {filter.options.map((opt) => (
                    <option key={opt} value={opt} className="font-bold text-[#0F172A]">
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute left-0" />
              </div>
            </div>
          ))}

          {/* البطاقة الخامسة: زر اطلب قطعة الآن (غير متوفرة بالبحث؟) */}
          <button
            type="button"
            className="h-full min-h-[60px] rounded-xl bg-gradient-to-b from-[#FBBF24] to-[#EAB308] hover:from-[#F59E0B] hover:to-[#D97706] px-4 py-2.5 shadow-lg flex items-center justify-between text-[#0F172A] transition-all cursor-pointer group"
          >
            <span className="w-7 h-7 rounded-lg bg-black/10 flex items-center justify-center font-black text-lg group-hover:scale-105 transition-transform">
              <Plus className="w-4 h-4 stroke-[3]" />
            </span>
            <div className="flex flex-col text-right flex-1 mr-2.5">
              <span className="text-[14px] font-black leading-tight text-[#0F172A]">
                اطلب قطعة الآن
              </span>
              <span className="text-[11px] font-extrabold text-[#78350F] mt-0.5">
                غير متوفرة بالبحث؟
              </span>
            </div>
          </button>
        </div>

        {/* 5. شريط المزايا والموثوقية (4 مزايا) */}
        <div className="w-full bg-[#041521]/75 border border-[#123E5C]/70 rounded-2xl py-3.5 px-6 backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#123E5C]/60">
            {TRUST_FEATURES.map((feat) => (
              <div
                key={feat.id}
                className="flex items-center justify-center gap-3 pt-2 lg:pt-0 first:pt-0"
              >
                <div className="w-8 h-8 rounded-full bg-[#092B42]/80 border border-[#194E70]/80 flex items-center justify-center shrink-0">
                  {feat.iconType === 'verified' && (
                    <Check className="w-4 h-4 text-[#FBBF24] stroke-[2.5]" />
                  )}
                  {feat.iconType === 'compare' && (
                    <Tag className="w-4 h-4 text-[#38BDF8]" />
                  )}
                  {feat.iconType === 'delivery' && (
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-[#FBBF24] block" />
                  )}
                  {feat.iconType === 'support' && (
                    <Headphones className="w-4 h-4 text-[#38BDF8]" />
                  )}
                </div>
                <span className="text-[13.5px] font-extrabold text-slate-100">
                  {feat.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}