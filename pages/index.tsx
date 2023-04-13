import Layout from '@/components/layouts/Layout';
import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { ReactElement } from 'react';
import { CardHome, Services } from '@/components/home';
import CardSticky from '@/components/home/CardSticky';

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

      <section className="relative my-12 space-y-10 ">
        <CardHome />
        <div className="">
          <p className="px-5 text-base font-medium leading-10 text-justify sm:text-xl text-slate-700 dark:text-slate-200">
            Welcome to my digital garden. Here I share what I&apos;m learning
            about shipping great products. <br /> As I&apos;m specialised in
            front-end development using React and TypeScript, I create amazing
            web applications to make the internet a better place.
          </p>
          <div className="mt-24 text-center text-gradient">
            <h3 className="title-2">Some of my favourite tools</h3>
            <div className="w-full mt-12 test h-52">
              <p className="text-center leading-[208px]">favourite tools</p>
            </div>
          </div>
          {/* services */}
          <Services />
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
