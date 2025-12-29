import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { vehicles } from '../data/vehicles';
export function Bookings() {
  const upcomingBooking = vehicles[0];
  const pastBookings = [vehicles[2], vehicles[4]];
  return <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-navy-900 mb-8">
          My Trips
        </h1>

        {/* Upcoming */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
            <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
            Upcoming
          </h2>
          <Card className="border-l-4 border-l-gold-400">
            <div className="flex flex-col md:flex-row gap-6">
              <img src={upcomingBooking.image} alt={upcomingBooking.name} className="w-full md:w-64 h-40 object-cover rounded-sm" />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy-900">
                      {upcomingBooking.name}
                    </h3>
                    <p className="text-navy-500 text-sm">
                      Confirmation #RN-88291
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                    CONFIRMED
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start">
                    <Calendar className="w-4 h-4 text-gold-500 mt-1 mr-2" />
                    <div>
                      <p className="text-xs text-navy-400 uppercase font-bold">
                        Dates
                      </p>
                      <p className="text-sm text-navy-900 font-medium">
                        Oct 24 - Oct 27, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gold-500 mt-1 mr-2" />
                    <div>
                      <p className="text-xs text-navy-400 uppercase font-bold">
                        Pick-up
                      </p>
                      <p className="text-sm text-navy-900 font-medium">
                        Los Angeles Int. Airport
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button size="sm">View Details</Button>
                  <Button variant="outline" size="sm">
                    Modify Trip
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Past */}
        <div>
          <h2 className="text-xl font-bold text-navy-900 mb-4">Past Trips</h2>
          <div className="space-y-4">
            {pastBookings.map(vehicle => <Card key={vehicle.id} className="opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full md:w-32 h-24 object-cover rounded-sm grayscale hover:grayscale-0 transition-all" />
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold text-navy-900">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-navy-500">
                      Sep 12 - Sep 15, 2023
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-bold text-navy-900">
                        $1,248.00
                      </p>
                      <p className="text-xs text-green-600">Paid</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Receipt
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
}