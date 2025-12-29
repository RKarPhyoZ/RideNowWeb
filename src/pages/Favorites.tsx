import React from 'react';
import { Heart } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function Favorites() {
  // Mock favorites
  const favorites = vehicles.slice(0, 4);
  return <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-navy-900">
            Saved Vehicles
          </h1>
          <span className="text-navy-500">{favorites.length} items</span>
        </div>

        {favorites.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map(vehicle => <div key={vehicle.id} className="relative">
                <VehicleCard vehicle={vehicle} />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:bg-red-50 transition-colors z-10">
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>)}
          </div> : <div className="text-center py-24 bg-white rounded-sm border border-gray-200">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-navy-900 mb-2">
              No favorites yet
            </h2>
            <p className="text-navy-500 mb-6">
              Start exploring our fleet and save your dream cars.
            </p>
            <Link to="/search">
              <Button>Browse Vehicles</Button>
            </Link>
          </div>}
      </div>
    </div>;
}