import { ReactNode } from 'react';
import ToolsContainer from '../molecules/ToolsContainer';
import {
  NextIcon,
  TypescriptIcon,
  TailwindIcon,
  ChatgptIcon,
  ReactIcon,
  MongoIcon,
  NodeIcon,
  PostgreIcon,
  ReduxIcon,
  FigmaIcon,
  GitIcon,
  SequelizeLogo,
} from '../svg/Svg';
import ToolItem from '../molecules/ToolItem';

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

  {
    icon: <ReactIcon />,
    name: 'React JS',
  },
  {
    icon: <MongoIcon />,
    name: 'MongoDB',
  },
  {
    icon: <NodeIcon />,
    name: 'Node JS',
  },
  {
    icon: <PostgreIcon />,
    name: 'PostgreSQL',
  },
  {
    icon: <ReduxIcon />,
    name: 'Redux',
  },
  {
    icon: <FigmaIcon />,
    name: 'Figma',
  },
  {
    icon: <GitIcon />,
    name: 'GIT',
  },
  {
    icon: <SequelizeLogo />,
    name: 'Sequelize',
  },
];

const Stack = () => {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-semibold md:text-4xl">
        My Tools and Technologies
      </h3>
      <ToolsContainer>
        {tools.map((tool) => (
          <ToolItem key={tool.name} icon={tool.icon} name={tool.name} />
        ))}
      </ToolsContainer>
    </div>
  );
};

export default Stack;
