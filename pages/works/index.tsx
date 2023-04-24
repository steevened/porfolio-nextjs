import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { useRouter } from 'next/router';
import WorksCards from '@/components/works/WorksCards';

const Works: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Steven Elias - Personal site</title>
        <meta
          name="description"
          content="Personal site of Steven Elias - Steevened"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-10">
        <h1 className="mt-5 title-1 text-gradient">Selected Works</h1>
        <WorksCards />
      </main>
    </>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
