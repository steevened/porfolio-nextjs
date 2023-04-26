import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Gradient: FC<Props> = ({ className }) => {
  return (
    <div
      className={` w-[250px] aspect-square bg-gradient-to-r from-transparent via-gray-900/20 dark:via-gray-100/10 to-transparent ${className}`}
    />
  );
};
