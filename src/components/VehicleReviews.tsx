import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';
import { ReviewCard } from './ReviewCard';
import { ReviewForm } from './ReviewForm';
import { Button } from './ui/Button';
import { RatingStars } from './RatingStars';
interface VehicleReviewsProps {
  vehicleId: string;
  vehicleName: string;
  reviews: Review[];
  overallRating: number;
  reviewCount: number;
}
export function VehicleReviews({
  vehicleId,
  vehicleName,
  reviews,
  overallRating,
  reviewCount
}: VehicleReviewsProps) {
  const [showForm, setShowForm] = useState(false);
  const [localReviews, setLocalReviews] = useState(reviews);
  // Calculate distribution (mock logic for demo)
  const distribution = [0, 0, 5, 15, 80]; // percentages for 1, 2, 3, 4, 5 stars
  const handleReviewSubmit = (data: {
    rating: number;
    review: string;
  }) => {
    // In a real app, this would make an API call
    const newReview: Review = {
      id: `new-${Date.now()}`,
      user_id: 'current-user',
      vehicle_id: vehicleId,
      rating: data.rating,
      review: data.review,
      created_at: new Date().toISOString(),
      user: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
        verified: true
      },
      helpful_count: 0
    };
    setLocalReviews([newReview, ...localReviews]);
    setShowForm(false);
  };
  return <div className="py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Summary */}
        <div className="md:w-1/3 bg-navy-50 p-6 rounded-lg">
          <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
            Rating Summary
          </h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-bold text-navy-900">
              {overallRating}
            </span>
            <div className="mb-2">
              <RatingStars rating={overallRating} />
              <p className="text-xs text-navy-500 mt-1">
                {reviewCount} reviews
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => <div key={star} className="flex items-center text-xs">
                <span className="w-3 font-medium text-navy-600">{star}</span>
                <Star className="w-3 h-3 text-navy-300 ml-1 mr-2" />
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gold-400 rounded-full" style={{
                width: `${distribution[4 - i]}%`
              }} />
                </div>
                <span className="w-8 text-right text-navy-400 ml-2">
                  {distribution[4 - i]}%
                </span>
              </div>)}
          </div>
        </div>

        {/* Reviews List */}
        <div className="md:w-2/3">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-serif font-bold text-navy-900">
              Recent Reviews
            </h3>
            <Button onClick={() => setShowForm(true)} size="sm">
              Write a Review
            </Button>
          </div>

          <div className="space-y-4">
            {localReviews.map(review => <ReviewCard key={review.id} review={review} />)}
          </div>

          {localReviews.length > 3 && <div className="mt-6 text-center">
              <Button variant="outline" className="w-full md:w-auto">
                Load More Reviews
              </Button>
            </div>}
        </div>
      </div>

      {showForm && <ReviewForm vehicleId={vehicleId} vehicleName={vehicleName} onSubmit={handleReviewSubmit} onCancel={() => setShowForm(false)} />}
    </div>;
}