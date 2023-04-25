import Layout from '@/components/layouts/Layout';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import db from '../../../db/db.json';
import WorkSlider from '@/components/works/WorkSlider';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/svg/Svg';

const ProjectPage: NextPageWithLayout = () => {
  const [project, setProject] = useState<any>();

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    const projectByName = db.res.works.filter((work) => work.name === name);
    setProject(projectByName[0]);
  }, [name]);

  console.log(project?.links[0].url);

  return (
    <>
      <div className="relative my-5 md:my-10">
        <div className="absolute md:left-10">
          <Button
            onClick={() => router.back()}
            size="sm"
            variant="text"
            className="shadow-app-shadow-light dark:shadow-app-shadow"
            color="blue-gray"
          >
            <ArrowLeftIcon rotate />
          </Button>
        </div>
        <div className="text-center ">
          <h1 className="mt-5 title-1 text-gradient">{name}</h1>
        </div>

        <div className="mt-6 ">
          <div className="w-full mt-10 space-y-12 lg:px-2">
            <div className="w-full mx-auto overflow-hidden rounded-md shadow-lg md:w-11/12">
              <WorkSlider project={project} />
            </div>
            <div className="w-full">
              <p className="text-lg font-medium ">
                <span className="text-xl font-bold">Tech used: </span>
                {project?.technologies}
              </p>
              <div className="flex flex-col gap-2 mt-5 sm:flex-row">
                <Link href={project?.links[0].url || ''} target="_blank">
                  <Button
                    variant="filled"
                    color="light-blue"
                    className="w-full rounded-none"
                  >
                    Live Project
                  </Button>
                </Link>
                <Link href={project?.links[1].url || ''} target="_blank">
                  <Button
                    variant="text"
                    color="blue-gray"
                    className="w-full rounded-none shadow-app-shadow-light dark:shadow-app-shadow"
                  >
                    Visit Repo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full px-2 py-5 text-lg font-medium md:px-10 shadow-app-top-light dark:shadow-app-top">
              <p>{project?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
