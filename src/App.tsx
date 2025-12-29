import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { VehicleDetails } from './pages/VehicleDetails';
import { Booking } from './pages/Booking';
import { Profile } from './pages/Profile';
import { Bookings } from './pages/Bookings';
import { Favorites } from './pages/Favorites';
import { ShopProfile } from './pages/ShopProfile';
import { Notifications } from './pages/Notifications';
import { Reviews } from './pages/Reviews';
import { UserDashboard } from './pages/UserDashboard';
// Scroll to top on route change
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-navy-900 bg-gray-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
            <Route path="/shop/:shopId" element={<ShopProfile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}