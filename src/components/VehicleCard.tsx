import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Vehicle } from '../types';
import { Card } from './ui/Card';
import { VerifiedBadge } from './VerifiedBadge';
interface VehicleCardProps {
  vehicle: Vehicle;
}
export function VehicleCard({
  vehicle
}: VehicleCardProps) {
  return <Link to={`/vehicle/${vehicle.id}`} className="block group">
      <Card noPadding hoverEffect className="h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-50">
          <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 bg-navy-900/90 text-white text-xs font-medium tracking-wider uppercase rounded-sm backdrop-blur-sm">
              {vehicle.category}
            </span>
          </div>
          {vehicle.verified && <div className="absolute top-3 right-3 bg-white/90 p-1.5 rounded-full backdrop-blur-sm shadow-sm">
              <VerifiedBadge size="md" />
            </div>}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                {vehicle.name}
              </h3>
              <div className="flex items-center text-navy-400 text-sm mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {vehicle.location}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="ml-1.5 text-sm font-medium text-navy-900">
                {vehicle.rating}
              </span>
              <span className="ml-1 text-xs text-navy-400">
                ({vehicle.reviewsCount})
              </span>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-navy-900">
                ${vehicle.pricePerDay}
              </span>
              <span className="text-xs text-navy-400 font-medium"> / day</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>;
}