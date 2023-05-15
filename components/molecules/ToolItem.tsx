import { FC, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  name: string;
}

const ToolItem: FC<Props> = ({ icon, name }) => {
  return (
    <div className="relative flex items-center justify-center object-contain w-32 h-32 p-3 text-black duration-200 rounded-md bg-gray-50 hover:scale-105 dark:text-white dark:shadow-app-shadow dark:bg-app-gray after:absolute after:inset-0 after:shadow-lg after:shadow-black/20 after:hover:shadow-xl after:hover:shadow-black/30 after:rounded-md after:duration-200 group">
      {icon}

      <div className="absolute duration-200 rounded-md opacity-0 inset-[1px] bg-white/80 dark:bg-black/80 backdrop-blur-sm group-hover:opacity-100" />
      <p className="absolute text-lg font-bold text-gray-700 duration-200 -translate-x-1/2 -translate-y-1/2 opacity-0 -bottom-1/3 group-hover:bottom-1/3 left-1/2 group-hover:opacity-100 whitespace-nowrap">
        {name}
      </p>
    </div>
  );
};

export default ToolItem;
