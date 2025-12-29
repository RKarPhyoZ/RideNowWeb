import { Notification } from '../types';
export const notifications: Notification[] = [{
  id: 'n1',
  type: 'booking',
  title: 'Booking Confirmed',
  body: 'Your reservation for the Mercedes-Benz S-Class has been confirmed by the host.',
  read_at: null,
  created_at: '2023-10-20T08:30:00Z',
  action_url: '/bookings'
}, {
  id: 'n2',
  type: 'system',
  title: 'Identity Verified',
  body: 'Congratulations! Your identity verification has been approved. You can now book vehicles instantly.',
  read_at: '2023-10-18T10:00:00Z',
  created_at: '2023-10-18T09:45:00Z',
  action_url: '/profile'
}, {
  id: 'n3',
  type: 'promotion',
  title: 'Weekend Special',
  body: 'Get 15% off all luxury sedans this weekend only! Use code LUX15.',
  read_at: null,
  created_at: '2023-10-15T12:00:00Z',
  action_url: '/search?category=Sedan'
}, {
  id: 'n4',
  type: 'review',
  title: 'Rate your trip',
  body: 'How was your experience with the Porsche 911? Leave a review to help others.',
  read_at: '2023-10-10T14:00:00Z',
  created_at: '2023-10-10T09:00:00Z',
  action_url: '/reviews'
}];