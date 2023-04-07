import Layout from '@/components/layouts/Layout';
import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { ReactElement } from 'react';
import { CardHome } from '@/components/home';

const Home = () => {
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

      <section className="mt-6 md:mt-14">
        <CardHome />
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
