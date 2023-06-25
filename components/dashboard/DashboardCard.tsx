import React from 'react';
import DivProps from '../../lib/interfaces/components.interface';
import CardHovered from '../atoms/Cards/CardHovered';

interface Props extends DivProps {
  title: string;
}

const DashboardCard = ({ className, children, title }: Props) => {
  return (
    <CardHovered className={`h-64 text-gray-300 w-72 ${className}`}>
      <div className="grid shadow-app-bottom h-1/3 place-content-center ">
        {children}
      </div>
      <div className="grid text-center place-content-center h-2/3">
        <p className="text-3xl font-semibold text-gradient">{title}</p>
      </div>
    </CardHovered>
  );
};

export default DashboardCard;
