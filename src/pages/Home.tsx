import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { VehicleCard } from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
export function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Car', 'Motorbike', 'Bicycle', 'Others'];
  // Filter logic (mapping existing categories to "Car" for demo purposes since data is all cars)
  const filteredVehicles = vehicles.filter(v => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Car') return true; // All current data are cars
    // In a real app with diverse data:
    // if (activeTab === 'Motorbike') return v.category === 'Motorbike'
    return false;
  });
  return <div className="min-h-screen bg-gray-50">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
        {/* Search & Filter Row */}
        <div className="px-4 py-3 flex items-center gap-3 max-w-7xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input type="text" placeholder="Search vehicles..." className="w-full pl-9 pr-4 py-2.5 bg-gray-100 border-none rounded-lg text-sm text-navy-900 placeholder:text-navy-400 focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all" />
          </div>
          <button className="p-2.5 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Tabs */}
        <div className="px-4 pb-0 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 min-w-max max-w-7xl mx-auto border-b border-gray-100">
            {tabs.map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm font-medium transition-all relative ${activeTab === tab ? 'text-navy-900 font-bold' : 'text-navy-400 hover:text-navy-600'}`}>
                {tab}
                {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-t-full" />}
              </button>)}
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-serif font-bold text-navy-900">
            {activeTab === 'All' ? 'All Vehicles' : `${activeTab}s`}
          </h2>
          <span className="text-xs text-navy-500">
            {filteredVehicles.length} results
          </span>
        </div>

        {filteredVehicles.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
          </div> : <div className="py-20 text-center">
            <p className="text-navy-400">No vehicles found in this category.</p>
          </div>}
      </div>
    </div>;
}