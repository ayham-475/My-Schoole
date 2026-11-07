'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { GUEST_NAV_ITEMS } from '../data/landingData';

export default function GuestHeader() {
  return (
    <header className="w-full bg-[#051C2C] border-b border-[#0E354F] sticky top-0 z-50">
      <div className="max-w-[1360px] mx-auto px-6 h-[84px] flex items-center justify-between">
        
        {/* 1. الشعار وهوية المنصة (أقصى اليمين) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-xl bg-[#08273C] border border-[#184E70] flex items-center justify-center shadow-inner group-hover:border-[#0EA5E9] transition-colors">
            {/* أيقونة الترس/المحرك الذهبية والسماوية المطابقة للتصميم */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="12" stroke="#F59E0B" strokeWidth="2.2" strokeDasharray="4 2.5" />
              <circle cx="16" cy="16" r="8.5" fill="#0B3B59" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="3" fill="#FBBF24" />
              <circle cx="16" cy="10.5" r="1.2" fill="#FFFFFF" />
              <circle cx="16" cy="21.5" r="1.2" fill="#FFFFFF" />
              <circle cx="10.5" cy="16" r="1.2" fill="#FFFFFF" />
              <circle cx="21.5" cy="16" r="1.2" fill="#FFFFFF" />
            </svg>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[26px] font-black text-white leading-none tracking-tight">
              غِـيَـار
            </span>
            <span className="text-[9px] font-extrabold text-[#F59E0B] tracking-[0.14em] mt-1 uppercase">
              GHYAR AUTO PARTS
            </span>
          </div>
        </Link>

        {/* 2. روابط التنقل الوسطى */}
        <nav className="hidden lg:flex items-center gap-2">
          {GUEST_NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative px-5 py-2.5 rounded-lg text-[15px] transition-all ${
                item.isActive
                  ? 'bg-[#092C44] text-white font-extrabold'
                  : 'text-slate-200 hover:text-white hover:bg-[#08263A]/60 font-bold'
              }`}
            >
              {item.label}
              {item.isActive && (
                <span className="absolute bottom-0 right-3 left-3 h-[3px] bg-[#0EA5E9] rounded-t-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* 3. أزرار الحساب والسلة (أقصى اليسار) */}
        <div className="flex items-center gap-3">
          {/* زر إنشاء حساب باللون الذهبي البرتقالي */}
          <Link
            href="/register"
            className="h-[44px] px-6 rounded-xl bg-gradient-to-b from-[#FBBF24] to-[#F97316] hover:from-[#F59E0B] hover:to-[#EA580C] text-[#0F172A] font-black text-[14px] flex items-center justify-center shadow-md shadow-amber-500/15 transition-all"
          >
            إنشاء حساب
          </Link>

          {/* زر تسجيل الدخول */}
          <Link
            href="/login"
            className="h-[44px] px-6 rounded-xl bg-[#08263A] hover:bg-[#0B324C] border border-[#194B6B] text-white font-bold text-[14px] flex items-center justify-center transition-colors"
          >
            تسجيل الدخول
          </Link>

          {/* زر سلة المشتريات مع الشارة الحمراء */}
          <Link
            href="/cart"
            aria-label="سلة المشتريات"
            className="relative w-[46px] h-[44px] rounded-xl bg-[#08263A] hover:bg-[#0B324C] border border-[#194B6B] flex items-center justify-center text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-slate-100" />
            <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#EF4444] text-white font-extrabold text-[11px] flex items-center justify-center shadow">
              2
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}