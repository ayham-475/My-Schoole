import {
  NavItem,
  VehicleFilterOption,
  TrustFeature,
  PartCategoryItem,
} from '@/types/landing';

export const GUEST_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'الرئيسية', href: '/', isActive: true },
  { id: 'parts', label: 'قطع الغيار', href: '/parts' },
  { id: 'stores', label: 'المتاجر', href: '/stores' },
  { id: 'offers', label: 'العروض', href: '/offers' },
  { id: 'about', label: 'من نحن', href: '/about' },
  { id: 'contact', label: 'التواصل', href: '/contact' },
];

export const VEHICLE_FILTERS: VehicleFilterOption[] = [
  {
    id: 'make',
    label: 'الشركة المصنعة',
    defaultValue: 'تويوتا (Toyota)',
    options: ['تويوتا (Toyota)', 'هيونداي (Hyundai)', 'كيا (Kia)', 'لكزس (Lexus)', 'نيسان (Nissan)'],
  },
  {
    id: 'model',
    label: 'موديل السيارة',
    defaultValue: 'كامري (Camry)',
    options: ['كامري (Camry)', 'شاص (Land Cruiser 70)', 'هايلوكس (Hilux)', 'كورولا (Corolla)', 'راف فور (RAV4)'],
  },
  {
    id: 'year',
    label: 'سنة الصنع',
    defaultValue: '2020 - 2026',
    options: ['2020 - 2026', '2015 - 2019', '2010 - 2014', '2005 - 2009'],
  },
  {
    id: 'condition',
    label: 'حالة القطعة',
    defaultValue: 'أصلي وكالة',
    options: ['أصلي وكالة', 'تجاري ياباني درجة أولى', 'مستعمل نظيف (تشليح)'],
  },
];

export const TRUST_FEATURES: TrustFeature[] = [
  { id: 'verified', title: 'قطع أصلية ومضمونة', iconType: 'verified' },
  { id: 'compare', title: 'مقارنة وأسعار تنافسية', iconType: 'compare' },
  { id: 'delivery', title: 'توصيل سريع للمحافظات', iconType: 'delivery' },
  { id: 'support', title: 'دعم فني وميكانيكي', iconType: 'support' },
];

export const MAIN_CATEGORIES: PartCategoryItem[] = [
  { id: 'engines', title: 'المحركات', countText: '+1,450 قطعة', isFeatured: true },
  { id: 'electrical', title: 'الكهرباء', countText: '+980 قطعة' },
  { id: 'oils', title: 'الزيوت والسوائل', countText: '+640 قطعة' },
  { id: 'brakes', title: 'أنظمة الفرامل', countText: '+1,120 قطعة' },
  { id: 'batteries', title: 'البطاريات', countText: '+320 قطعة' },
  { id: 'tires', title: 'الإطارات', countText: '+490 قطعة' },
  { id: 'accessories', title: 'الملحقات', countText: '+830 قطعة' },
];
// types/landing.ts

// تعريف الأنواع المسموح بها للفئات (يمكنك تعديلها بناءً على أقسام مشروعك)
export type CategoryId = 'engines' | 'brakes' | 'suspension' | 'transmission' | 'filters';

// واجهة بيانات الفئة الواحدة (Interface)
export interface CategoryItem {
  id: CategoryId;
  name: string;
  slug: string;
  description?: string;
  iconName?: string;
}

// واجهة بيانات عناصر شريط التنقل (Navigation)
export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

