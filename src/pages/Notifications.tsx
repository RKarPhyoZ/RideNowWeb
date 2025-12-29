import React, { useState } from 'react';
import { Bell, Calendar, Star, Tag, Check, Info } from 'lucide-react';
import { notifications as initialNotifications } from '../data/notifications';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<'all' | 'booking' | 'review' | 'system'>('all');
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({
      ...n,
      read_at: new Date().toISOString()
    })));
  };
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? {
      ...n,
      read_at: new Date().toISOString()
    } : n));
  };
  const filteredNotifications = filter === 'all' ? notifications : notifications.filter(n => n.type === filter || filter === 'system' && n.type === 'promotion');
  const unreadCount = notifications.filter(n => !n.read_at).length;
  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return <Calendar className="w-5 h-5 text-blue-500" />;
      case 'review':
        return <Star className="w-5 h-5 text-gold-500" />;
      case 'promotion':
        return <Tag className="w-5 h-5 text-green-500" />;
      default:
        return <Info className="w-5 h-5 text-navy-500" />;
    }
  };
  return <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-serif font-bold text-navy-900 mr-3">
              Notifications
            </h1>
            {unreadCount > 0 && <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount} new
              </span>}
          </div>
          {unreadCount > 0 && <Button variant="outline" size="sm" onClick={markAllAsRead} className="text-xs">
              Mark all as read
            </Button>}
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {['all', 'booking', 'review', 'system'].map(tab => <button key={tab} onClick={() => setFilter(tab as any)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize whitespace-nowrap ${filter === tab ? 'bg-navy-900 text-white' : 'bg-white text-navy-600 hover:bg-gray-100'}`}>
              {tab}
            </button>)}
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? filteredNotifications.map(notification => <Card key={notification.id} className={`transition-all duration-200 ${!notification.read_at ? 'border-l-4 border-l-gold-400 shadow-md' : 'opacity-90'}`} onClick={() => markAsRead(notification.id)}>
                <div className="flex gap-4 p-4">
                  <div className={`mt-1 p-2 rounded-full bg-gray-50 h-fit`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-bold text-navy-900 ${!notification.read_at ? 'text-lg' : 'text-base'}`}>
                        {notification.title}
                      </h3>
                      <span className="text-xs text-navy-400 whitespace-nowrap ml-2">
                        {new Date(notification.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-navy-600 text-sm mb-3">
                      {notification.body}
                    </p>
                    {notification.action_url && <Link to={notification.action_url} className="text-sm font-medium text-gold-600 hover:text-gold-700 flex items-center">
                        View Details
                      </Link>}
                  </div>
                  {!notification.read_at && <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0" />}
                </div>
              </Card>) : <div className="text-center py-16 bg-white rounded-lg border border-gray-200 border-dashed">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-navy-900">
                No notifications
              </h3>
              <p className="text-navy-500">You're all caught up!</p>
            </div>}
        </div>
      </div>
    </div>;
}