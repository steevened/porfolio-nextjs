import DivProps from '@/lib/interfaces/components.interface';
import React from 'react';

const Card = ({ className, children }: DivProps) => {
  return (
    <div className={`bg-app-gray shadow-app-shadow rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
