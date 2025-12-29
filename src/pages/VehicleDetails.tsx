import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Check, ChevronLeft, Share, Heart, Shield, ChevronRight } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { vehicleReviews } from '../data/reviews';
import { Button } from '../components/ui/Button';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { Card } from '../components/ui/Card';
import { VehicleReviews } from '../components/VehicleReviews';
export function VehicleDetails() {
  const {
    id
  } = useParams();
  const vehicle = vehicles.find(v => v.id === id) || vehicles[0];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Filter reviews for this vehicle (mock logic)
  const reviews = vehicleReviews.filter(r => r.vehicle_id === '1'); // Using '1' for demo data match
  // Simple carousel logic
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % vehicle.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };
  return <div className="min-h-screen bg-gray-50 pb-24 md:pt-20">
      {/* Mobile Header Overlay */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-start pointer-events-none">
        <Link to="/" className="pointer-events-auto p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-navy-900">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div className="flex gap-2 pointer-events-auto">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-navy-900">
            <Share className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-navy-900">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swipeable Image Carousel */}
      <div className="relative h-[40vh] md:h-[60vh] bg-navy-900 overflow-hidden group">
        <div className="absolute inset-0 flex transition-transform duration-500 ease-out" style={{
        transform: `translateX(-${currentImageIndex * 100}%)`
      }}>
          {vehicle.images.map((img, idx) => <img key={idx} src={img} alt={`${vehicle.name} ${idx + 1}`} className="w-full h-full object-cover flex-shrink-0" />)}
        </div>

        {/* Carousel Controls (Desktop) */}
        <button onClick={prevImage} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextImage} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
          {currentImageIndex + 1} / {vehicle.images.length}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {vehicle.images.map((_, idx) => <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-gold-400 w-4' : 'bg-white/50'}`} />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <Card className="mb-6 border-none shadow-lg">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-navy-100 text-navy-800 text-xs font-bold uppercase tracking-wider rounded-sm">
                    {vehicle.category}
                  </span>
                  {vehicle.verified && <VerifiedBadge showLabel />}
                </div>

                <h1 className="text-2xl md:text-4xl font-serif font-bold text-navy-900 mb-2">
                  {vehicle.name}
                </h1>

                <div className="flex flex-wrap items-center text-navy-500 text-sm gap-y-2">
                  <div className="flex items-center mr-4">
                    <MapPin className="w-4 h-4 mr-1 text-gold-500" />
                    <span>{vehicle.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400 mr-1" />
                    <span className="font-bold text-navy-900 mr-1">
                      {vehicle.rating}
                    </span>
                    <span>({vehicle.reviewsCount} reviews)</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-baseline mb-1">
                    <span className="text-3xl font-serif font-bold text-navy-900">
                      ${vehicle.pricePerDay}
                    </span>
                    <span className="text-navy-500 ml-1">/ day</span>
                  </div>
                  <p className="text-xs text-navy-400">
                    Total price includes insurance & fees
                  </p>
                </div>
              </div>
            </Card>

            {/* Shop Info Card */}
            <Link to={`/shop/${vehicle.host.id}`} className="block mb-6 group">
              <Card className="border-l-4 border-l-gold-400 hover:shadow-md transition-shadow">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={vehicle.host.image} alt={vehicle.host.name} className="w-12 h-12 rounded-full object-cover border border-gray-200 mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-navy-900 mr-1 group-hover:text-gold-600 transition-colors">
                          {vehicle.host.name}
                        </h3>
                        {vehicle.host.verified && <VerifiedBadge size="sm" />}
                      </div>
                      <div className="text-xs text-navy-500">
                        View Shop Profile
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-navy-300 group-hover:text-gold-400 transition-colors" />
                </div>
              </Card>
            </Link>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-serif font-bold text-navy-900 mb-4">
                Features
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.features.map(feature => <div key={feature} className="flex items-center text-sm text-navy-700">
                    <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>)}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-serif font-bold text-navy-900 mb-3">
                Description
              </h2>
              <p className="text-navy-600 text-sm leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-20 md:mb-6">
              <h2 className="text-xl font-serif font-bold text-navy-900 mb-6">
                Reviews
              </h2>
              <VehicleReviews vehicleId={vehicle.id} vehicleName={vehicle.name} reviews={reviews} overallRating={vehicle.rating} reviewCount={vehicle.reviewsCount} />
            </div>
          </div>

          {/* Desktop Booking Sidebar (Hidden on Mobile) */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <Card className="border-gold-200 shadow-lg p-6">
                <h3 className="font-serif font-bold text-xl text-navy-900 mb-4">
                  Book this vehicle
                </h3>
                <Button className="w-full mb-3">Check Availability</Button>
                <Button variant="outline" className="w-full">
                  Message Host
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer Action */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe-area z-40 flex gap-3 items-center">
        <div className="flex-1">
          <div className="text-xs text-navy-500 uppercase font-bold">Total</div>
          <div className="text-xl font-serif font-bold text-navy-900">
            ${vehicle.pricePerDay}
            <span className="text-sm font-sans font-normal text-navy-500">
              /day
            </span>
          </div>
        </div>
        <Button className="flex-1 shadow-lg bg-navy-900 text-white">
          Book Now
        </Button>
      </div>
    </div>;
}