import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
const About: NextPageWithLayout = () => {
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
        <h1 className="mt-10 text-3xl font-bold text-center">About</h1>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
