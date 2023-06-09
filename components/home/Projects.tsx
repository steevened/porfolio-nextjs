import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ArrowLeftIcon } from '../svg/Svg';

interface ProjectsProps {}

interface Project {
  imageUrl: string;
  title: string;
  slug: string;
  description: string;
}

const projects: Project[] = [
  {
    imageUrl: '/projects/academlo.png',
    slug: 'academlo',
    title: 'Academlo Landing Page',
    description: 'Academlo Description landing page',
  },
  {
    imageUrl: '/projects/pc.png',
    slug: 'para-cuando',
    title: 'Para Cuándo',
    description: 'Para cuando description',
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flex items-center min-h-screen ">
      <div>
        <h3 className="text-4xl font-bold">Projects</h3>
        <h4 className="mt-2 font-medium text-gray-700 dark:text-gray-500 ">
          {'Some of my featured and latest projects'}
        </h4>
        <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-20 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <div className="overflow-hidden rounded-md shadow-xl shadow-black/20">
                <div className="flex justify-between gap-4 px-4 py-3 bg-blue-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 rounded-full aspect-square bg-blue-gray-200" />
                    <div className="w-2 rounded-full aspect-square bg-blue-gray-200" />
                    <div className="w-2 rounded-full aspect-square bg-blue-gray-200" />
                  </div>
                  <div className="w-full h-2 rounded-md bg-blue-gray-50"></div>
                </div>
                <Link href={`/works/${project.slug}`}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={2000}
                    height={1500}
                  />
                </Link>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-500">
                  {project.description}
                </p>
              </div>
              <div className="mt-4">
                <Link
                  href={`/works/${project.slug}`}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-500 group whitespace-nowrap hover:text-gray-900 hover:dark:text-gray-300 w-min"
                >
                  <p>View details</p>
                  <span className="duration-100 group-hover:translate-x-1">
                    <ArrowLeftIcon />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
