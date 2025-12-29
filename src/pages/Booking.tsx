import React, { useState } from 'react';
import { Check, CreditCard, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { vehicles } from '../data/vehicles';
import { Link } from 'react-router-dom';
export function Booking() {
  const [step, setStep] = useState(1);
  const vehicle = vehicles[0]; // Mock selected vehicle
  const steps = [{
    number: 1,
    title: 'Trip Details'
  }, {
    number: 2,
    title: 'Insurance'
  }, {
    number: 3,
    title: 'Payment'
  }];
  return <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((s, idx) => <div key={s.number} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold border-2
                  ${step >= s.number ? 'bg-navy-900 border-navy-900 text-white' : 'bg-transparent border-gray-300 text-gray-400'}
                `}>
                  {step > s.number ? <Check className="w-4 h-4" /> : s.number}
                </div>
                <span className={`ml-2 text-sm font-medium ${step >= s.number ? 'text-navy-900' : 'text-gray-400'}`}>
                  {s.title}
                </span>
                {idx < steps.length - 1 && <div className="w-12 h-px bg-gray-300 mx-4 hidden sm:block"></div>}
              </div>)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && <Card>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Trip Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Pick-up Date
                    </label>
                    <div className="relative">
                      <input type="date" className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Drop-off Date
                    </label>
                    <div className="relative">
                      <input type="date" className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Pick-up Location
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white">
                      <option>Los Angeles International Airport (LAX)</option>
                      <option>Beverly Hills Hotel</option>
                      <option>Santa Monica Pier</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setStep(2)}>
                    Continue to Insurance
                  </Button>
                </div>
              </Card>}

            {step === 2 && <Card>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Insurance Protection
                </h2>
                <div className="space-y-4 mb-8">
                  <label className="flex items-start p-4 border-2 border-gold-400 bg-gold-50/30 rounded-sm cursor-pointer">
                    <input type="radio" name="insurance" className="mt-1 w-4 h-4 text-gold-500 focus:ring-gold-400" defaultChecked />
                    <div className="ml-4">
                      <div className="flex justify-between">
                        <span className="font-bold text-navy-900">
                          Premium Coverage
                        </span>
                        <span className="font-bold text-navy-900">$49/day</span>
                      </div>
                      <p className="text-sm text-navy-600 mt-1">
                        Zero deductible. Covers theft, collision, and liability
                        up to $1M.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start p-4 border border-gray-200 rounded-sm cursor-pointer hover:border-gray-300">
                    <input type="radio" name="insurance" className="mt-1 w-4 h-4 text-gold-500 focus:ring-gold-400" />
                    <div className="ml-4">
                      <div className="flex justify-between">
                        <span className="font-bold text-navy-900">
                          Standard Coverage
                        </span>
                        <span className="font-bold text-navy-900">$29/day</span>
                      </div>
                      <p className="text-sm text-navy-600 mt-1">
                        $1000 deductible. State minimum liability.
                      </p>
                    </div>
                  </label>
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    Continue to Payment
                  </Button>
                </div>
              </Card>}

            {step === 3 && <Card>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Payment Method
                </h2>
                <div className="mb-6">
                  <div className="flex space-x-4 mb-4">
                    <button className="flex-1 py-3 border-2 border-navy-900 text-navy-900 font-medium rounded-sm flex items-center justify-center">
                      <CreditCard className="w-5 h-5 mr-2" /> Card
                    </button>
                    <button className="flex-1 py-3 border border-gray-200 text-gray-500 font-medium rounded-sm hover:bg-gray-50">
                      Apple Pay
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Card Number
                      </label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Expiry
                        </label>
                        <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          CVC
                        </label>
                        <input type="text" placeholder="123" className="w-full p-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="ghost" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Link to="/bookings">
                    <Button className="px-8">Confirm Booking</Button>
                  </Link>
                </div>
              </Card>}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-sm border border-gold-200 shadow-luxury sticky top-24">
              <h3 className="font-serif font-bold text-xl text-navy-900 mb-4">
                Booking Summary
              </h3>

              <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-gray-100">
                <img src={vehicle.image} alt={vehicle.name} className="w-24 h-16 object-cover rounded-sm" />
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">
                    {vehicle.name}
                  </h4>
                  <p className="text-xs text-navy-500">{vehicle.category}</p>
                  <div className="flex items-center mt-1">
                    <ShieldCheck className="w-3 h-3 text-gold-500 mr-1" />
                    <span className="text-xs text-gold-600">Verified Host</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-navy-600">
                  <span>${vehicle.pricePerDay} x 3 days</span>
                  <span>${vehicle.pricePerDay * 3}</span>
                </div>
                <div className="flex justify-between text-navy-600">
                  <span>Premium Insurance</span>
                  <span>$147</span>
                </div>
                <div className="flex justify-between text-navy-600">
                  <span>Service Fee</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between text-navy-600">
                  <span>Tax</span>
                  <span>$82</span>
                </div>
              </div>

              <div className="border-t border-navy-100 pt-4 flex justify-between items-center">
                <span className="font-serif font-bold text-lg text-navy-900">
                  Total
                </span>
                <span className="font-serif font-bold text-xl text-navy-900">
                  ${vehicle.pricePerDay * 3 + 147 + 45 + 82}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}