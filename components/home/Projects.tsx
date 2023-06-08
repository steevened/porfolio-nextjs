import Image from 'next/image';
import { FC } from 'react';

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
    title: 'Academlo landing page',
    description: 'Academlo Description landing page',
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="flex items-center min-h-screen ">
      <div>
        <h3 className="text-4xl font-bold">Projects</h3>
        <h4 className="mt-2 font-medium text-gray-700">
          {"Some of the side projects I'm currently working on"}
        </h4>
        <ul className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3">
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
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={2000}
                  height={1500}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
