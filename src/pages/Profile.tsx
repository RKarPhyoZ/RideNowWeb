import React from 'react';
import { User, CreditCard, Settings, Shield, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
export function Profile() {
  return <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-navy-900 mb-8">
          Account Settings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Nav */}
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white text-navy-900 font-medium rounded-sm border-l-4 border-gold-400 shadow-sm">
              <User className="w-5 h-5" />
              <span>Personal Info</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-navy-600 font-medium hover:bg-white hover:text-navy-900 rounded-sm transition-colors">
              <CreditCard className="w-5 h-5" />
              <span>Payments</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-navy-600 font-medium hover:bg-white hover:text-navy-900 rounded-sm transition-colors">
              <Shield className="w-5 h-5" />
              <span>Verification</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-navy-600 font-medium hover:bg-white hover:text-navy-900 rounded-sm transition-colors">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-navy-600 font-medium hover:bg-white hover:text-navy-900 rounded-sm transition-colors">
              <Settings className="w-5 h-5" />
              <span>Preferences</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 text-2xl font-serif font-bold">
                  JS
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-900">
                    John Smith
                  </h2>
                  <p className="text-navy-500">Member since 2023</p>
                  <div className="mt-2 inline-flex items-center px-2 py-1 bg-gold-50 text-gold-700 text-xs font-medium rounded-full border border-gold-200">
                    <Shield className="w-3 h-3 mr-1" /> Verified Member
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-auto">
                  Edit Photo
                </Button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      First Name
                    </label>
                    <input type="text" defaultValue="John" className="w-full p-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Last Name
                    </label>
                    <input type="text" defaultValue="Smith" className="w-full p-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" defaultValue="john.smith@example.com" className="w-full p-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Phone Number
                    </label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full p-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </form>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-900 mb-4">
                Identity Verification
              </h3>
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-green-900">
                      Identity Verified
                    </p>
                    <p className="text-xs text-green-700">
                      Your driver's license and ID have been confirmed.
                    </p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-700">
                  Active
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
}