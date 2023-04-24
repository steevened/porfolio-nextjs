import { ReactNode } from 'react';
import {
  ChatgptIcon,
  NextIcon,
  TailwindIcon,
  TypescriptIcon,
} from '../svg/Svg';
import ToolItem from '../molecules/ToolItem';
import ToolsContainer from '../molecules/ToolsContainer';

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
    <div className="mt-24 text-center ">
      <h3 className="mb-5 title-2 ">Some of my favourite tools</h3>
      <ToolsContainer>
        {tools.map((tool) => (
          <ToolItem icon={tool.icon} name={tool.name} key={tool.name} />
        ))}
      </ToolsContainer>
    </div>
  );
};

export default Tools;
