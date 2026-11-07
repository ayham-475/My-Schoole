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