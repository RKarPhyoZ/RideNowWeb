import React, { useState } from 'react';
import { Filter, Map, List, ChevronDown } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { VehicleCard } from '../components/VehicleCard';
import { Button } from '../components/ui/Button';
import { VehicleCategory } from '../types';
export function Search() {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory | 'All'>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const categories: (VehicleCategory | 'All')[] = ['All', 'Sedan', 'SUV', 'Sports', 'Exotic', 'Luxury', 'Ultra-Luxury'];
  const filteredVehicles = vehicles.filter(v => {
    if (selectedCategory !== 'All' && v.category !== selectedCategory) return false;
    if (v.pricePerDay < priceRange[0] || v.pricePerDay > priceRange[1]) return false;
    return true;
  });
  return <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-navy-900">
              Find Your Perfect Drive
            </h1>
            <p className="text-navy-500 mt-1">
              {filteredVehicles.length} premium vehicles available
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-white p-1.5 rounded-sm border border-gray-200 shadow-sm">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-sm transition-colors ${viewMode === 'grid' ? 'bg-navy-50 text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
              <List className="w-5 h-5" />
            </button>
            <div className="w-px h-4 bg-gray-200"></div>
            <button onClick={() => setViewMode('map')} className={`p-2 rounded-sm transition-colors ${viewMode === 'map' ? 'bg-navy-50 text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
              <Map className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
            <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif font-bold text-lg text-navy-900">
                  Filters
                </h3>
                <Filter className="w-4 h-4 text-navy-400" />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-navy-900 mb-3 uppercase tracking-wider">
                  Category
                </h4>
                <div className="space-y-2">
                  {categories.map(cat => <label key={cat} className="flex items-center cursor-pointer group">
                      <input type="radio" name="category" className="w-4 h-4 text-gold-500 border-gray-300 focus:ring-gold-400" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} />
                      <span className={`ml-3 text-sm transition-colors ${selectedCategory === cat ? 'text-navy-900 font-medium' : 'text-gray-600 group-hover:text-navy-700'}`}>
                        {cat}
                      </span>
                    </label>)}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-sm font-semibold text-navy-900 mb-3 uppercase tracking-wider">
                  Price / Day
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-navy-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                  <input type="range" min="0" max="2000" step="100" value={priceRange[1]} onChange={e => setPriceRange([0, parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
              </div> : <div className="bg-navy-900 rounded-sm h-[600px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />
                <div className="text-center relative z-10 p-8 bg-navy-800/90 backdrop-blur-md rounded-sm border border-navy-700 max-w-md mx-4">
                  <Map className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    Map View Unavailable
                  </h3>
                  <p className="text-navy-200 mb-6">
                    Interactive map view requires an API key. Please switch back
                    to grid view to browse vehicles.
                  </p>
                  <Button onClick={() => setViewMode('grid')}>
                    Switch to Grid
                  </Button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
}