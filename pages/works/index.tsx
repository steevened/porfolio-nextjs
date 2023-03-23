import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const Works: NextPageWithLayout = () => {
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
      <main className="">
        <h1 className="mt-10 text-3xl font-bold text-center">Works</h1>
      </main>
    </>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
