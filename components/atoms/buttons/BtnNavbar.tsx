import React from 'react';
import Button from './Button';
import { ReactNode } from 'react';

const BtnNavbar = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <Button
      className={`grid w-12 h-12 text-gray-400 bg-black rounded-full place-content-center shadow-app-shadow ${className} }`}
    >
      {children}
    </Button>
  );
};

export default BtnNavbar;
