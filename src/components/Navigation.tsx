import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, Calendar, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { NotificationBadge } from './NotificationBadge';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Mock notification count
  const unreadNotifications = 3;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Search',
    path: '/search',
    icon: Search
  }, {
    name: 'Bookings',
    path: '/bookings',
    icon: Calendar
  }, {
    name: 'Favorites',
    path: '/favorites',
    icon: Heart
  }];
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };
  return <>
      {/* Desktop Navigation - Hidden on Mobile */}
      <header className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-navy-900/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.svg"
              alt="RideNow"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="flex items-center space-x-6">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-sm font-medium transition-colors flex items-center ${isActive(link.path) ? 'text-gold-400' : 'text-navy-100 hover:text-gold-400'}`}>
                <link.icon className="w-4 h-4 mr-2" />
                {link.name}
              </Link>)}

            <div className="h-6 w-px bg-navy-700 mx-2"></div>

            <NotificationBadge count={unreadNotifications} />

            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="border-navy-600 text-navy-100 hover:bg-navy-800 hover:border-gold-400 hover:text-gold-400">
                <User className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-navy-900 px-4 py-3 flex justify-between items-center shadow-md">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="RideNow"
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-3">
          <NotificationBadge count={unreadNotifications} />
        </div>
      </div>

      {/* Mobile Bottom Navigation - Visible only on Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe-area">
        <div className="flex justify-around items-center h-16">
          <Link to="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/') ? 'text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
            <Search className={`w-6 h-6 ${isActive('/') ? 'text-navy-900' : 'text-current'}`} />
            <span className={`text-[10px] font-medium ${isActive('/') ? 'text-navy-900 font-bold' : 'text-current'}`}>
              Explore
            </span>
          </Link>

          <Link to="/favorites" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/favorites') ? 'text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
            <Heart className={`w-6 h-6 ${isActive('/favorites') ? 'fill-gold-400 text-navy-900' : 'text-current'}`} />
            <span className={`text-[10px] font-medium ${isActive('/favorites') ? 'text-navy-900 font-bold' : 'text-current'}`}>
              Saved
            </span>
          </Link>

          <Link to="/bookings" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/bookings') ? 'text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
            <Calendar className={`w-6 h-6 ${isActive('/bookings') ? 'text-navy-900' : 'text-current'}`} />
            <span className={`text-[10px] font-medium ${isActive('/bookings') ? 'text-navy-900 font-bold' : 'text-current'}`}>
              Trips
            </span>
          </Link>

          <Link to="/dashboard" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive('/dashboard') ? 'text-navy-900' : 'text-gray-400 hover:text-navy-600'}`}>
            <User className={`w-6 h-6 ${isActive('/dashboard') ? 'text-navy-900' : 'text-current'}`} />
            <span className={`text-[10px] font-medium ${isActive('/dashboard') ? 'text-navy-900 font-bold' : 'text-current'}`}>
              Profile
            </span>
          </Link>
        </div>
      </nav>
    </>;
}