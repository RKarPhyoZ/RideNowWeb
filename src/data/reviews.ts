import { Review, ShopReview } from '../types';
export const vehicleReviews: Review[] = [{
  id: 'r1',
  user_id: 'u2',
  vehicle_id: '1',
  rating: 5,
  review: 'Absolutely stunning vehicle. The S-Class is in a league of its own. The host was professional and the car was spotless.',
  created_at: '2023-10-15T10:00:00Z',
  user: {
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    verified: true
  },
  helpful_count: 12
}, {
  id: 'r2',
  user_id: 'u3',
  vehicle_id: '1',
  rating: 4,
  review: 'Great car, very comfortable. Pickup was slightly delayed but otherwise a perfect experience.',
  created_at: '2023-09-28T14:30:00Z',
  user: {
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    verified: true
  },
  helpful_count: 3
}, {
  id: 'r3',
  user_id: 'u4',
  vehicle_id: '1',
  rating: 5,
  review: 'The massage seats are a game changer for long drives. Highly recommend this specific vehicle.',
  created_at: '2023-09-10T09:15:00Z',
  user: {
    name: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    verified: false
  },
  helpful_count: 8
}];
export const shopReviews: ShopReview[] = [{
  id: 'sr1',
  user_id: 'u5',
  shop_id: 'h1',
  rating: 5,
  review: 'Prestige Rentals always delivers the best quality cars. I have rented from them 5 times now.',
  created_at: '2023-10-01T11:00:00Z',
  user: {
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100',
    verified: true
  }
}, {
  id: 'sr2',
  user_id: 'u6',
  shop_id: 'h1',
  rating: 5,
  review: 'Professional service, clean cars, and easy communication. What more could you ask for?',
  created_at: '2023-09-15T16:20:00Z',
  user: {
    name: 'Robert Brown',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    verified: true
  }
}];