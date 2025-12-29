import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Star, Heart, Settings, Shield, ChevronRight, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { vehicles } from '../data/vehicles';
export function UserDashboard() {
  const user = {
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    verified: true,
    memberSince: '2023',
    trips: 12,
    reviews: 8
  };
  const recentActivity = [{
    id: 1,
    type: 'booking',
    title: 'Booked Mercedes-Benz S-Class',
    date: '2 days ago',
    icon: Car
  }, {
    id: 2,
    type: 'review',
    title: 'Reviewed Porsche 911',
    date: '1 week ago',
    icon: Star
  }, {
    id: 3,
    type: 'favorite',
    title: 'Saved Lamborghini Huracán',
    date: '2 weeks ago',
    icon: Heart
  }];
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-navy-900 rounded-lg p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="relative">
              <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-navy-800 object-cover" />
              {user.verified && <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full">
                  <Shield className="w-4 h-4 text-green-600 fill-green-600" />
                </div>}
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-serif font-bold mb-1">
                Welcome back, {user.name}
              </h1>
              <p className="text-navy-200 text-sm mb-4">
                Member since {user.memberSince}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-navy-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-gold-400">
                    {user.trips}
                  </span>
                  <span className="text-xs text-navy-200 uppercase tracking-wider">
                    Trips
                  </span>
                </div>
                <div className="bg-navy-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-gold-400">
                    {user.reviews}
                  </span>
                  <span className="text-xs text-navy-200 uppercase tracking-wider">
                    Reviews
                  </span>
                </div>
                <div className="bg-navy-800/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-gold-400">
                    4.9
                  </span>
                  <span className="text-xs text-navy-200 uppercase tracking-wider">
                    Rating
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px]">
              <Link to="/profile">
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-navy-900">
                  Edit Profile
                </Button>
              </Link>
              <Link to="/search">
                <Button className="w-full">Book a Car</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link to="/bookings" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 transition-colors">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-navy-900">
                  My Trips
                </span>
              </Link>
              <Link to="/reviews" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-10 h-10 bg-gold-50 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-100 transition-colors">
                  <Star className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-navy-900">
                  Reviews
                </span>
              </Link>
              <Link to="/favorites" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-100 transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-navy-900">
                  Favorites
                </span>
              </Link>
              <Link to="/profile" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-10 h-10 bg-gray-50 text-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-100 transition-colors">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-navy-900">
                  Settings
                </span>
              </Link>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif font-bold text-navy-900">
                  Recent Activity
                </h2>
                <Button variant="ghost" size="sm" className="text-navy-500">
                  View All
                </Button>
              </div>
              <div className="space-y-6">
                {recentActivity.map((activity, index) => <div key={activity.id} className="flex items-start group">
                    <div className="mr-4 relative">
                      <div className="w-10 h-10 bg-navy-50 rounded-full flex items-center justify-center text-navy-600 group-hover:bg-navy-100 transition-colors">
                        <activity.icon className="w-5 h-5" />
                      </div>
                      {index !== recentActivity.length - 1 && <div className="absolute top-10 left-1/2 w-px h-full bg-gray-200 -ml-px"></div>}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-sm font-bold text-navy-900">
                        {activity.title}
                      </h3>
                      <p className="text-xs text-navy-400 mt-1 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {activity.date}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>)}
              </div>
            </Card>

            {/* Recommended for You */}
            <div>
              <h2 className="text-xl font-serif font-bold text-navy-900 mb-4">
                Recommended for You
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicles.slice(0, 2).map(vehicle => <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`} className="group block">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                      <div className="h-32 overflow-hidden">
                        <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-navy-900 truncate">
                          {vehicle.name}
                        </h3>
                        <p className="text-gold-500 text-sm font-medium">
                          ${vehicle.pricePerDay}/day
                        </p>
                      </div>
                    </div>
                  </Link>)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-navy-900 to-navy-800 text-white border-none">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-gold-400 mr-2" />
                <h3 className="font-bold text-lg">Verification Status</h3>
              </div>
              <p className="text-navy-100 text-sm mb-4">
                Your identity is verified. You have full access to all premium
                vehicles.
              </p>
              <div className="flex items-center text-xs text-green-400 font-bold bg-green-400/10 w-fit px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                VERIFIED
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-navy-900 mb-4">
                Complete Your Profile
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-600">Phone Number</span>
                  <span className="text-green-600 font-medium">Added</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-600">Email Address</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-600">Payment Method</span>
                  <span className="text-gold-500 font-medium cursor-pointer hover:underline">
                    Add
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-gold-400 h-full w-3/4"></div>
                </div>
                <p className="text-xs text-navy-400 text-center">
                  75% Completed
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}