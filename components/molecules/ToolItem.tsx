import { FC, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  name: string;
}

const ToolItem: FC<Props> = ({ icon, name }) => {
  return (
    <div className="relative flex items-center justify-center object-contain w-32 h-32 p-3 text-black duration-200 rounded-md hover:scale-105 dark:text-white shadow-app-shadow-light dark:shadow-app-shadow bg-gradient-to-bl from-slate-50 to-slate-100 dark:from-app-gray dark:to-app-gray after:absolute after:inset-0 after:shadow-md after:rounded-md group">
      {icon}

      <div className="absolute duration-200 rounded-md opacity-0 inset-[1px] bg-white/80 dark:bg-black/80 backdrop-blur-sm group-hover:opacity-100" />
      <p className="absolute text-lg font-semibold duration-200 -translate-x-1/2 -translate-y-1/2 opacity-0 -bottom-1/3 group-hover:bottom-1/3 left-1/2 group-hover:opacity-100 whitespace-nowrap">
        {name}
      </p>
    </div>
  );
};

export default ToolItem;
