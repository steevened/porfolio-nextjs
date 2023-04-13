import React from 'react';
import CardHovered from './CardHovered';
import DivProps from '../../../lib/interfaces/components.interface';
import { AddIcon } from '@/components/svg/Svg';

const AddCard = ({ className, ...restProps }: DivProps) => {
  return (
    <CardHovered
      {...restProps}
      className={`grid w-32 h-32 group place-content-center ${className}}`}
    >
      <span className="text-gray-500 duration-200 group-hover:text-gray-400">
        <AddIcon />
      </span>
    </CardHovered>
  );
};

export default AddCard;
