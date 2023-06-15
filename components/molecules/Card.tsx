import { FC, HTMLAttributes, PropsWithChildren } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      className={`relative w-full px-4 py-6 duration-100 rounded-md border-gray-200 border dark:border-gray-900/40 bg-white backdrop-blur-sm dark:bg-black  cursor-default shadow-xl shadow-blue-gray-900/5 dark:shadow-app-shadow-dark-xl  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
