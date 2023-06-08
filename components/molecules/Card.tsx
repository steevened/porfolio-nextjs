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
      className={`relative w-full px-4 py-6 duration-100 rounded-md border-gray-300 border  dark:shadow-app-shadow bg-gray-50/50 backdrop-blur-sm dark:bg-app-gray hover:scale-105  after:absolute after:inset-0 after:shadow-md after:rounded-md after:pointer-events-none after:shadow-black/10 after:hover:shadow-lg after:hover:shadow-black/20 after:duration-100 cursor-default  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
