import React, { useState } from 'react';
import { ThumbsUp, Flag, Shield } from 'lucide-react';
import { Review } from '../types';
import { RatingStars } from './RatingStars';
import { Card } from './ui/Card';
import { VerifiedBadge } from './VerifiedBadge';
interface ReviewCardProps {
  review: Review;
  onHelpful?: () => void;
  onReport?: () => void;
}
export function ReviewCard({
  review,
  onHelpful,
  onReport
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful_count);
  const [hasVoted, setHasVoted] = useState(false);
  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(prev => prev + 1);
      setHasVoted(true);
      onHelpful?.();
    }
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  return <Card className="p-6 transition-all duration-300 hover:shadow-md border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img src={review.user.avatar} alt={review.user.name} className="w-10 h-10 rounded-full object-cover border border-gray-200 mr-3" />
          <div>
            <div className="flex items-center">
              <span className="font-bold text-navy-900 mr-1">
                {review.user.name}
              </span>
              {review.user.verified && <VerifiedBadge size="sm" />}
            </div>
            <div className="text-xs text-navy-400">
              {formatDate(review.created_at)}
            </div>
          </div>
        </div>
        <RatingStars rating={review.rating} size="sm" />
      </div>

      <div className="mb-4">
        <p className={`text-navy-700 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {review.review}
        </p>
        {review.review.length > 150 && <button onClick={() => setIsExpanded(!isExpanded)} className="text-gold-500 text-xs font-medium mt-1 hover:text-gold-600 focus:outline-none">
            {isExpanded ? 'Show less' : 'Read more'}
          </button>}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <button onClick={handleHelpful} className={`flex items-center text-xs font-medium transition-colors ${hasVoted ? 'text-gold-500' : 'text-navy-400 hover:text-navy-600'}`}>
          <ThumbsUp className={`w-3.5 h-3.5 mr-1.5 ${hasVoted ? 'fill-current' : ''}`} />
          Helpful ({helpfulCount})
        </button>
        <button onClick={onReport} className="flex items-center text-xs text-navy-300 hover:text-red-500 transition-colors">
          <Flag className="w-3.5 h-3.5 mr-1" />
          Report
        </button>
      </div>
    </Card>;
}