import { ReactNode } from 'react';
import {
  ChatgptIcon,
  NextIcon,
  TailwindIcon,
  TypescriptIcon,
} from '../svg/Svg';

interface Tool {
  icon: ReactNode;
  name: string;
}

const tools: Tool[] = [
  {
    icon: <NextIcon />,
    name: 'Next.js',
  },
  {
    icon: <TypescriptIcon />,
    name: 'TypeScript',
  },
  {
    icon: <TailwindIcon />,
    name: 'TailwindCSS',
  },
  {
    icon: <ChatgptIcon />,
    name: 'ChatGPT',
  },
];

const Tools = () => {
  return (
    <div className="mt-24 text-center text-gradient">
      <h3 className="title-2">Some of my favourite tools</h3>
      <div className="grid grid-cols-2 px-2 mt-12 md:grid-cols-4 place-items-center gap-y-5 ">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-32 h-32 p-3 text-black duration-200 rounded-md hover:scale-105 dark:text-white shadow-app-shadow-light dark:shadow-app-shadow bg-gradient-to-bl from-slate-50 to-slate-100 dark:from-app-gray dark:to-app-gray after:absolute after:inset-0 after:shadow-md after:rounded-md group"
          >
            {tool.icon}

            <div className="absolute inset-0 duration-200 rounded-md opacity-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm group-hover:opacity-100" />
            <p className="absolute text-lg font-semibold duration-200 -translate-x-1/2 -translate-y-1/2 opacity-0 -bottom-1/3 group-hover:bottom-1/3 left-1/2 text-gradient group-hover:opacity-100">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
