import Layout from '@/components/layouts/Layout';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import db from '../../../db/db.json';
import WorkSlider from '@/components/works/WorkSlider';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

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
      <Head>
        <title>{name} - Steven Elias </title>
        <meta
          name="description"
          content="Personal site of Steven Elias - Steevened"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-5 md:my-10">
        <h1 className="mt-5 title-1 text-gradient">{name}</h1>

        <div className="mt-6 ">
          <div className="mt-10 w-full lg:px-2 space-y-12">
            <div className="w-full md:w-11/12 rounded-md overflow-hidden shadow-lg mx-auto">
              <WorkSlider project={project} />
            </div>
            <div className="w-full">
              <p className="text-lg font-medium ">
                <span className="font-bold text-xl">Tech used: </span>
                {project?.technologies}
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                <Link href={project?.links[0].url || ''} target="_blank">
                  <Button
                    variant="filled"
                    color="light-blue"
                    className="rounded-none w-full"
                  >
                    Live Project
                  </Button>
                </Link>
                <Link href={project?.links[1].url || ''} target="_blank">
                  <Button
                    variant="text"
                    color="blue-gray"
                    className="rounded-none shadow-app-shadow-light dark:shadow-app-shadow w-full"
                  >
                    Visit Repo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full px-2 shadow-app-top-light dark:shadow-app-top py-5 text-lg font-medium">
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
