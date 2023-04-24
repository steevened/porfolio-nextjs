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
      className={`relative w-full px-4 py-6 duration-200 rounded-md shadow-app-shadow-light dark:shadow-app-shadow bg-gradient-to-bl from-slate-50 to-slate-100 dark:from-app-gray dark:to-app-gray hover:scale-105 after:absolute after:inset-0 after:shadow-md after:rounded-md after:pointer-events-none ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
