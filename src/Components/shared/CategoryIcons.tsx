import React from 'react';
import { CategoryId } from "../../features/data/landingData"

export function CategoryIcon({ id }: { id: CategoryId }) {
  switch (id) {
    case 'engines':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="22" fill="#0B2940" />
          <circle
            cx="28"
            cy="28"
            r="16"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeDasharray="4 3"
          />
          <circle cx="28" cy="28" r="10" fill="#071C2C" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="28" cy="28" r="4" fill="#FBBF24" />
        </svg>
      );

    case 'electrical':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="24" y="8" width="8" height="8" rx="2" fill="#0284C7" />
          <rect x="20" y="15" width="16" height="8" rx="2" fill="#0F172A" />
          <rect x="16" y="23" width="24" height="22" rx="5" fill="#0B2940" />
          <circle cx="28" cy="31" r="3.5" fill="#FBBF24" />
          <rect x="21" y="38" width="5" height="2.5" rx="1" fill="#94A3B8" />
          <rect x="30" y="38" width="5" height="2.5" rx="1" fill="#94A3B8" />
        </svg>
      );

    case 'oils':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M28 9C28 9 13 26.5 13 36C13 44.2843 19.7157 51 28 51C36.2843 51 43 44.2843 43 36C43 26.5 28 9 28 9Z"
            fill="#0B2940"
          />
          <circle cx="28" cy="36" r="8" fill="#F59E0B" />
          <circle cx="28" cy="36" r="3" fill="#0B2940" />
          <circle cx="38" cy="18" r="2.5" fill="#0EA5E9" />
        </svg>
      );

    case 'brakes':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="21" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <circle cx="28" cy="28" r="15" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="28" cy="28" r="8" fill="#0B2940" />
          <circle cx="28" cy="28" r="3.5" fill="#CBD5E1" />
          {/* الكليبر الأحمر */}
          <path
            d="M35 13C41 16.5 44 23 43 30C42 35 38 40 34 42"
            stroke="#EF4444"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'batteries':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="15" y="15" width="7" height="5" rx="1" fill="#0EA5E9" />
          <rect x="34" y="15" width="7" height="5" rx="1" fill="#EF4444" />
          <rect x="10" y="20" width="36" height="26" rx="5" fill="#0B2940" />
          <path
            d="M29 25L23 33H28L27 41L33 33H28L29 25Z"
            fill="#FBBF24"
          />
        </svg>
      );

    case 'tires':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <ellipse cx="28" cy="28" rx="15" ry="21" fill="#0B2940" />
          <ellipse cx="28" cy="28" rx="8" ry="12" fill="#E2E8F0" />
          <ellipse cx="28" cy="28" rx="4" ry="6" fill="#0284C7" />
        </svg>
      );

    case 'accessories':
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="20" stroke="#0B2940" strokeWidth="2.2" fill="#F8FAFC" />
          <circle cx="24" cy="25" r="7" stroke="#0B2940" strokeWidth="2.2" fill="white" />
          <circle cx="24" cy="25" r="2.5" fill="#0B2940" />
          <circle cx="33" cy="33" r="6" fill="#F59E0B" stroke="#0B2940" strokeWidth="2" />
          <circle cx="33" cy="33" r="2" fill="white" />
        </svg>
      );
  }
}