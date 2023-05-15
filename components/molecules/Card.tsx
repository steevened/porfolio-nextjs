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
      className={`relative w-full px-4 py-6 duration-200 rounded-md  dark:shadow-app-shadow bg-gray-50 dark:bg-app-gray hover:scale-105 after:absolute after:inset-0 after:shadow-lg after:rounded-md after:pointer-events-none after:shadow-black/20 after:hover:shadow-xl after:hover:shadow-black/20 after:duration-200 cursor-default  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
