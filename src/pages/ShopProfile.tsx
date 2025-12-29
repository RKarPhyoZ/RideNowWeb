import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, ArrowLeft, Shield } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { shopReviews } from '../data/reviews';
import { VehicleCard } from '../components/VehicleCard';
import { Button } from '../components/ui/Button';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { ShopReviews } from '../components/ShopReviews';
export function ShopProfile() {
  const {
    shopId
  } = useParams();
  // Find the host/shop from the vehicles data
  const shopVehicle = vehicles.find(v => v.host.id === shopId);
  const shop = shopVehicle?.host;
  if (!shop) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">
            Shop Not Found
          </h2>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>;
  }
  const shopVehicles = vehicles.filter(v => v.host.id === shopId);
  // Filter reviews for this shop (mock logic)
  const reviews = shopReviews.filter(r => r.shop_id === 'h1'); // Using 'h1' for demo
  return <div className="min-h-screen bg-gray-50 pb-20 md:pt-20">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center">
        <Link to="/" className="mr-4 text-navy-900">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg font-serif font-bold text-navy-900 truncate">
          {shop.name}
        </h1>
      </div>

      {/* Shop Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img src={shop.image} alt={shop.name} className="w-24 h-24 rounded-full object-cover border-4 border-gold-100 shadow-md" />
              {shop.verified && <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
                  <VerifiedBadge size="sm" />
                </div>}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy-900">
                {shop.name}
              </h1>
              {shop.verified && <VerifiedBadge />}
            </div>

            <div className="flex items-center text-navy-500 mb-6 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{shopVehicle?.location || 'Location available'}</span>
              <span className="mx-2">•</span>
              <span className="font-medium text-navy-900">{shop.rating} ★</span>
              <span className="ml-1">({shop.reviewsCount} reviews)</span>
            </div>

            <div className="w-full max-w-sm grid grid-cols-2 gap-3 mb-6">
              <Button variant="outline" className="flex items-center justify-center gap-2 border-navy-200">
                <MessageSquare className="w-4 h-4" />
                Message
              </Button>
              <Button className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Shop
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-navy-600 border-t border-gray-100 pt-6 w-full max-w-md">
              <div className="text-center">
                <div className="font-bold text-navy-900 text-lg">
                  {shopVehicles.length}
                </div>
                <div className="text-xs uppercase tracking-wider">Vehicles</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-navy-900 text-lg">
                  {shop.joinedDate}
                </div>
                <div className="text-xs uppercase tracking-wider">Joined</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-navy-900 text-lg">100%</div>
                <div className="text-xs uppercase tracking-wider">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Inventory Section */}
        <div className="mb-12">
          <h2 className="text-xl font-serif font-bold text-navy-900 mb-6 flex items-center">
            Vehicles from this shop
            <span className="ml-3 text-xs font-sans font-normal bg-navy-100 text-navy-700 px-2 py-1 rounded-full">
              {shopVehicles.length} available
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 pt-8">
          <ShopReviews shopId={shop.id} reviews={reviews} rating={shop.rating} reviewCount={shop.reviewsCount} />
        </div>
      </div>
    </div>;
}