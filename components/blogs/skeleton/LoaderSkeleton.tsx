import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  showOverlay?: boolean;
}

export const LoaderSkeleton: FC<Props> = ({
  className,
  showOverlay = false,
}) => {
  const overlay = `overflow-hidden
  shadow-xl shadow-black/10 dark:shadow-gray-900/10
  relative  
  before:absolute before:inset-0
  before:-translate-x-full
  before:animate-[gradient-x_2s_infinite]
  before:bg-gradient-to-r
  before:from-transparent  
  before:via-gray-900/20 before:dark:via-gray-100/10
  before:to-transparent
  before:border-t-2 before:border-gray-100/40 before:dark:border-gray-900/20`;

  return (
    <div
      className={`p-4 space-y-5 rounded-sm bg-black/10 dark:bg-white/5 aspect-square min-w-[250px] max-w-[250px] my-10 ${
        showOverlay && overlay
      } ${className}`}
    >
      <div className="h-24 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
      <div className="space-y-3">
        <div className="w-3/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
        <div className="w-4/5 h-3 rounded-sm bg-gray-500/30 dark:bg-gray-100/20"></div>
        <div className="w-2/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/20"></div>
      </div>
    </div>
  );
};
