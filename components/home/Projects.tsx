import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { FC } from 'react';
import { ArrowLeftIcon } from '../svg/Svg';
import { projects } from '@/db/projects';
import ProjectItem from '../works/ProjectItem';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flex items-center min-h-screen ">
      <div>
        <h3 className="text-4xl font-bold text-gradient">Projects</h3>
        <h4 className="mt-2 font-medium text-gray-700 dark:text-gray-500 ">
          {'Some of my latest projects and contributions'}
        </h4>
        <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-20 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectItem project={project} key={project.slug} />
          ))}
        </ul>
        <div className="flex justify-start mt-10">
          <Link href="/works">
            <Button
              className="flex items-center gap-2 mx-auto group"
              color="purple"
              size="lg"
            >
              <p>View All</p>
              <span className="duration-100 group-hover:translate-x-1">
                <ArrowLeftIcon />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
