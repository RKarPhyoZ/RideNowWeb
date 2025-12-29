import React from 'react';
import { ShieldCheck } from 'lucide-react';
interface VerifiedBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}
export function VerifiedBadge({
  className = '',
  size = 'md',
  showLabel = false
}: VerifiedBadgeProps) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };
  return <div className={`inline-flex items-center text-gold-500 ${className}`} title="Verified Premium Host">
      <ShieldCheck className={`${sizes[size]} fill-gold-100`} />
      {showLabel && <span className="ml-1.5 text-xs font-medium text-gold-600 tracking-wide uppercase">
          Verified
        </span>}
    </div>;
}