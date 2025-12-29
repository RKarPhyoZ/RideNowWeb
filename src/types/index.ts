export type VehicleCategory = 'Sedan' | 'SUV' | 'Sports' | 'Exotic' | 'Luxury' | 'Ultra-Luxury';
export interface Host {
  id: string;
  name: string;
  image: string;
  verified: boolean;
  rating: number;
  reviewsCount: number;
  joinedDate: string;
}
export interface Feature {
  id: string;
  name: string;
}
export interface Vehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  category: VehicleCategory;
  pricePerDay: number;
  verified: boolean;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  features: string[]; // Keeping string[] for backward compatibility, but could be Feature[]
  description: string;
  host: Host;
  location: string;
  available: boolean;
}
export interface Booking {
  id: string;
  vehicleId: string;
  vehicleName: string;
  vehicleImage: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  rating?: number;
}
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified: boolean;
  memberSince: string;
  phone_cc?: string;
  phone_subscriber_number?: string;
  verification_approved?: boolean;
}
export interface Review {
  id: string;
  user_id: string;
  vehicle_id: string;
  rating: number;
  review: string;
  created_at: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  helpful_count: number;
}
export interface ShopReview {
  id: string;
  user_id: string;
  shop_id: string;
  rating: number;
  review: string;
  created_at: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
}
export interface Notification {
  id: string;
  type: 'booking' | 'review' | 'system' | 'promotion';
  title: string;
  body: string;
  read_at: string | null;
  created_at: string;
  action_url?: string;
}
export interface Country {
  id: string;
  name: string;
  phone_prefix: string;
}