import Layout from '@/components/layouts/Layout';
import { NextPageWithLayout } from '@/pages/_app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const ProjectPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { name } = router.query;
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
      <div className="my-10">
        <h1 className="mt-5 title-1 text-gradient">{name}</h1>
      </div>
    </>
  );
};

ProjectPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default ProjectPage;
