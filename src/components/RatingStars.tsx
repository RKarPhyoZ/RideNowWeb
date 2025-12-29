import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}
export function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onChange,
  className = ''
}: RatingStarsProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };
  const currentRating = hoverRating !== null ? hoverRating : rating;
  return <div className={`flex items-center ${className}`} onMouseLeave={() => interactive && setHoverRating(null)}>
      {[...Array(maxRating)].map((_, index) => {
      const starValue = index + 1;
      const isFilled = currentRating >= starValue;
      const isHalf = !isFilled && currentRating > index && currentRating < starValue;
      return <button key={index} type="button" disabled={!interactive} className={`${interactive ? 'cursor-pointer transition-transform hover:scale-110' : 'cursor-default'} focus:outline-none`} onClick={() => interactive && onChange?.(starValue)} onMouseEnter={() => interactive && setHoverRating(starValue)}>
            <div className="relative">
              <Star className={`${sizeClasses[size]} ${isFilled ? 'text-gold-400 fill-gold-400' : 'text-gray-300'} transition-colors duration-200`} />
              {isHalf && <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                  <Star className={`${sizeClasses[size]} text-gold-400 fill-gold-400`} />
                </div>}
            </div>
          </button>;
    })}
    </div>;
}