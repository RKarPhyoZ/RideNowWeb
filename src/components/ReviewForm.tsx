import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/Button';
import { RatingStars } from './RatingStars';
interface ReviewFormProps {
  vehicleId: string;
  vehicleName: string;
  onSubmit: (data: {
    rating: number;
    review: string;
  }) => void;
  onCancel: () => void;
}
export function ReviewForm({
  vehicleId,
  vehicleName,
  onSubmit,
  onCancel
}: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    if (review.length < 10) {
      setError('Review must be at least 10 characters');
      return;
    }
    onSubmit({
      rating,
      review
    });
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h3 className="text-lg font-serif font-bold text-navy-900">
            Write a Review
          </h3>
          <button onClick={onCancel} className="text-navy-400 hover:text-navy-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-sm text-navy-600 mb-4">
            How was your experience with{' '}
            <span className="font-bold">{vehicleName}</span>?
          </p>

          <div className="flex flex-col items-center mb-6">
            <RatingStars rating={rating} size="lg" interactive onChange={r => {
            setRating(r);
            setError('');
          }} className="gap-2" />
            <span className="text-sm font-medium text-gold-500 mt-2">
              {rating > 0 ? ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating - 1] : 'Select a rating'}
            </span>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Your Review
            </label>
            <textarea value={review} onChange={e => {
            setReview(e.target.value);
            setError('');
          }} placeholder="Tell us about your trip, the car condition, and the host..." className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent min-h-[120px] text-sm resize-none" maxLength={500} />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-red-500 h-4">{error}</span>
              <span className="text-xs text-navy-400">{review.length}/500</span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Review
            </Button>
          </div>
        </form>
      </div>
    </div>;
}