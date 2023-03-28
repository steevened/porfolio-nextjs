import React from 'react';
import DivProps from '../../../lib/interfaces/components.interface';
import Card from '@/components/atoms/Cards/Card';

const CardHovered = ({ children, className, ...restProps }: DivProps) => {
  return (
    <div
      {...restProps}
      className={`hover:bg-app-gray shadow-app-shadow rounded-md  duration-200 cursor-pointer hover:shadow-app-shadow-hover ${
        !className && 'bg-black'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default CardHovered;
