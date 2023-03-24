import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import portrait from '../../public/me.jpeg';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';

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
        <section className="mx-5 mt-10 ">
          <div className="mx-auto overflow-hidden rounded-full w-28 h-28">
            <Image src={portrait} alt="image steven elias - steevened" />
          </div>
          <div className="mt-2.5">
            <h2 className="leading-tight text-center title-1 text-gradient">
              Changing The <br /> Game
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto mt-10 md:w-9/12">
            <h4 className="text-2xl font-semibold text-gradient md:text-3xl">
              Days I Code
            </h4>
            <div className="mt-5">
              <GitHubCalendar username="steevened" fontSize={16} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
