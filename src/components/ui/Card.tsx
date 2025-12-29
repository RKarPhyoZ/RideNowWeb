import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
  hoverEffect?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  hoverEffect = false,
  ...props
}: CardProps) {
  return <div className={`
        bg-white rounded-sm border border-gold-200/50 shadow-luxury overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-luxury-hover hover:-translate-y-1' : ''}
        ${className}
      `} {...props}>
      <div className={noPadding ? '' : 'p-6'}>{children}</div>
    </div>;
}