import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck } from 'lucide-react';
export function Footer() {
  return <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="RideNow"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Experience the extraordinary. Premium vehicle rentals for those
              who demand excellence in every journey.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => <a key={i} href="#" className="text-navy-300 hover:text-gold-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          <div>
            <h3 className="text-gold-400 font-serif font-semibold mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-navy-200">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-serif font-semibold mb-6">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-navy-200">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-400 font-serif font-semibold mb-6">
              Verified Trust
            </h3>
            <div className="bg-navy-800 p-6 rounded-sm border border-navy-700">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-gold-400 mr-3" />
                <div>
                  <p className="font-medium text-white">100% Verified Hosts</p>
                  <p className="text-xs text-navy-300">
                    Every vehicle inspected
                  </p>
                </div>
              </div>
              <p className="text-xs text-navy-300 leading-relaxed">
                We ensure every vehicle meets our strict luxury standards before
                it reaches you.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-navy-400">
          <p>&copy; 2024 RideNow Luxury Rentals. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>;
}