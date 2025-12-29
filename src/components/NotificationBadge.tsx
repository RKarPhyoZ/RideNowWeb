import React from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
interface NotificationBadgeProps {
  count?: number;
  className?: string;
}
export function NotificationBadge({
  count = 0,
  className = ''
}: NotificationBadgeProps) {
  return <Link to="/notifications" className={`relative group ${className}`}>
      <div className="p-2 rounded-full hover:bg-navy-800 transition-colors">
        <Bell className="w-5 h-5 text-navy-100 group-hover:text-gold-400 transition-colors" />
      </div>
      {count > 0 && <span className="absolute top-1 right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-bold text-white items-center justify-center border-2 border-navy-900">
            {count > 9 ? '9+' : count}
          </span>
        </span>}
    </Link>;
}