import React from 'react';
import GuestHeader from '../../features/landing/components/GuestHeader';
import HeroSearchSection from '../../features/landing/components/HeroSearchSection';
import MainCategoriesSection from '../../features/landing/components/MainCategoriesSection';
export default function GuestLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9]">
      {/* الهيدر العلوي للزائر */}
      <GuestHeader />

      {/* المحتوى الرئيسي */}
      <main className="flex-1">
        <HeroSearchSection />
        <MainCategoriesSection />
      </main>
    </div>
  );
}