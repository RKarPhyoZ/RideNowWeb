import React from 'react';
import { Star, Edit2, Trash2 } from 'lucide-react';
import { vehicleReviews } from '../data/reviews';
import { Card } from '../components/ui/Card';
import { RatingStars } from '../components/RatingStars';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function Reviews() {
  // Mock user's reviews (using the sample data for demo)
  const myReviews = vehicleReviews;
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-navy-900">
            My Reviews
          </h1>
          <div className="bg-white px-4 py-2 rounded-sm shadow-sm border border-gray-100">
            <span className="text-sm text-navy-500">
              Average Rating Given:{' '}
            </span>
            <span className="font-bold text-navy-900">4.7</span>
          </div>
        </div>

        <div className="space-y-6">
          {myReviews.map(review => <Card key={review.id} className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Vehicle Thumbnail (Mock) */}
                <div className="w-full md:w-48 h-32 bg-navy-100 rounded-sm overflow-hidden flex-shrink-0 relative group">
                  <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=300" alt="Vehicle" className="w-full h-full object-cover" />
                  <Link to={`/vehicle/${review.vehicle_id}`} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      View Vehicle
                    </span>
                  </Link>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-navy-900">
                        Mercedes-Benz S-Class
                      </h3>
                      <p className="text-xs text-navy-400">
                        Reviewed on{' '}
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-navy-400 hover:text-navy-600 hover:bg-gray-100 rounded-full transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-navy-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <RatingStars rating={review.rating} className="mb-3" />

                  <p className="text-navy-700 text-sm leading-relaxed mb-4">
                    {review.review}
                  </p>

                  <div className="flex items-center text-xs text-navy-400 bg-gray-50 w-fit px-3 py-1 rounded-full">
                    <span className="font-medium text-navy-600 mr-1">
                      {review.helpful_count}
                    </span>{' '}
                    people found this helpful
                  </div>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </div>;
}