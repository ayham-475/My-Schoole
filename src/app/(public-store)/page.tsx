import React from 'react';
import GuestHeader from '../../Components/shared/GuestHeader';
import HeroSearchSection from '../HeroSearchSection';
import MainCategoriesSection from '../MainCategoriesSection';
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