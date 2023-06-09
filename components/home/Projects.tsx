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
  {
    imageUrl: '/projects/aigram.png',
    slug: 'aigram',
    title: 'AIgram',
    description: 'AIgram description',
  },
  {
    imageUrl: '/projects/tc.png',
    slug: 'tech-commerce',
    title: 'Techcommerce',
    description: 'techcommerce description',
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flex items-center min-h-screen mt-10 ">
      <div>
        <h3 className="text-4xl font-bold">Projects</h3>
        <h4 className="mt-2 font-medium text-gray-700 dark:text-gray-500 ">
          {'Some of my featured and latest projects'}
        </h4>
        <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-20 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug} className="flex flex-col h-full ">
              <div className="overflow-hidden rounded-md shadow-xl shadow-black/20 dark:shadow-app-shadow-dark-xl">
                <div className="flex justify-between gap-4 px-4 py-3 bg-blue-gray-100 dark:bg-blue-gray-900 ">
                  <div className="flex items-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 rounded-full aspect-square bg-blue-gray-200 dark:bg-blue-gray-500"
                      />
                    ))}
                  </div>
                  <div className="w-full h-2 rounded-md bg-blue-gray-50 dark:bg-blue-gray-700"></div>
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

              <div className="flex flex-col gap-5 mt-5 grow ">
                <div className=" grow">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-500">
                    {project.description}
                  </p>
                </div>
                <div className="">
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
              </div>
            </li>
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
