export type CategoryId =
  | 'engines'
  | 'electrical'
  | 'oils'
  | 'brakes'
  | 'batteries'
  | 'tires'
  | 'accessories';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface VehicleFilterOption {
  id: 'make' | 'model' | 'year' | 'condition';
  label: string;
  defaultValue: string;
  options: string[];
}

export interface TrustFeature {
  id: string;
  title: string;
  iconType: 'verified' | 'compare' | 'delivery' | 'support';
}

export interface PartCategoryItem {
  id: CategoryId;
  title: string;
  countText: string;
  isFeatured?: boolean;
}


export type PartIllustrationType =
  | 'orange-filter'
  | 'brake-disc'
  | 'battery'
  | 'black-filter'
  | 'spark-plug';

export interface ProductCardItem {
  id: string;
  title: string;
  storeName: string;
  storeVerified?: boolean;
  rating: number;
  reviewsCount: number;
  price: number;
  partNumber?: string;
  conditionBadge?: string;
  illustration: PartIllustrationType;
  isHotTrending?: boolean;
}

export interface FooterLinkGroup {
  id: string;
  title: string;
  links: { label: string; href: string }[];
}