import Layout from '@/components/layouts/Layout';
import Card from '@/components/molecules/Card';
import { BuildingIcon, LockIcon } from '@/components/svg/Svg';
import { Project, projects } from '@/db/projects';
import { NextPageWithLayout } from '@/pages/_app';
import { Button, Carousel } from '@material-tailwind/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ProjectProps {
  slug: string;
}

const ProjectPage: NextPageWithLayout<ProjectProps> = ({ slug }) => {
  const router = useRouter();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const projectBySlug = projects.filter((project) => project.slug === slug);
    setProject(projectBySlug[0]);
  }, [slug]);

  return (
    <div className="min-h-[calc(100vh-175px)] mb-10 ">
      <div className="text-center ">
        <h1 className="py-2 title-1 text-gradient">{project?.title}</h1>
      </div>

      <div className="h-full mt-5 shadow-xl shadow-black/20 dark:shadow-app-shadow-dark-xl ">
        <Carousel className="rounded-xl" loop={true} autoplay={true}>
          {project?.images?.map((image, index) => (
            <Image
              src={image}
              alt={project.title}
              key={index}
              width={1280}
              height={720}
            />
          ))}
        </Carousel>
      </div>

      <div className="mt-10 space-y-5">
        <div>
          <h2 className="py-2 title-2 text-gradient">Description</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project?.description}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="py-2 title-2 text-gradient">Links</h2>
          <div className="flex items-center gap-5 mt-5">
            {project?.building ? (
              <Button
                color="purple"
                disabled
                className="flex items-center gap-2"
              >
                <BuildingIcon />
                Building
              </Button>
            ) : (
              <Link href={project?.demo || ''} target="_blank">
                <Button color="purple">Live demo</Button>
              </Link>
            )}

            {project?.private ? (
              <Button
                color="purple"
                disabled
                variant="outlined"
                className="flex items-center gap-2"
              >
                <LockIcon />
                Private Repo
              </Button>
            ) : (
              <Link href={project?.repo || ''} target="_blank">
                <Button color="purple" variant="outlined">
                  Visit Repo
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div>
          <h2 className="py-2 title-2 text-gradient">Technologies</h2>
          <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3">
            {project?.stack?.map((tech, index) => (
              <Card className="aspect-square " key={index}>
                {tech.icon}
                <span className="block w-full mt-3 text-xs font-semibold text-center text-gray-700 dark:text-gray-500 sm:text-lg md:text-2xl ">
                  {tech.name}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };

  return {
    props: {
      slug,
    },
  };
};

ProjectPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
