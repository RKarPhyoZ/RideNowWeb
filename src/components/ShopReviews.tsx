import React from 'react';
import { ShopReview } from '../types';
import { RatingStars } from './RatingStars';
import { Card } from './ui/Card';
import { VerifiedBadge } from './VerifiedBadge';
interface ShopReviewsProps {
  shopId: string;
  reviews: ShopReview[];
  rating: number;
  reviewCount: number;
}
export function ShopReviews({
  reviews,
  rating,
  reviewCount
}: ShopReviewsProps) {
  return <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif font-bold text-navy-900">
          Shop Reviews
        </h2>
        <div className="flex items-center bg-navy-50 px-3 py-1.5 rounded-full">
          <span className="font-bold text-navy-900 mr-2">{rating}</span>
          <RatingStars rating={rating} size="sm" />
          <span className="text-xs text-navy-500 ml-2">({reviewCount})</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map(review => <Card key={review.id} className="p-4 border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <img src={review.user.avatar} alt={review.user.name} className="w-8 h-8 rounded-full object-cover mr-2" />
                <div>
                  <div className="flex items-center">
                    <span className="text-sm font-bold text-navy-900 mr-1">
                      {review.user.name}
                    </span>
                    {review.user.verified && <VerifiedBadge size="sm" />}
                  </div>
                </div>
              </div>
              <RatingStars rating={review.rating} size="sm" />
            </div>
            <p className="text-sm text-navy-600 line-clamp-3">
              {review.review}
            </p>
          </Card>)}
      </div>
    </div>;
}