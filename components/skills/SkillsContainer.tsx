import DivProps from '@/lib/interfaces/components.interface';
import React from 'react';

const SkillsContainer = ({ children, className }: DivProps) => {
  return (
    <ul className={`flex flex-wrap justify-center gap-5 mt-10 ${className}`}>
      {children}
    </ul>
  );
};

export default SkillsContainer;
