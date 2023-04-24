import { NextPageWithLayout } from '../_app';
import { ReactElement, ReactNode } from 'react';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import Description from '@/components/about/Description';
import Stack from '@/components/about/Stack';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';

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

      <section className="mx-5 my-10 ">
        <div className="">
          <h1 className="py-2 title-1 text-gradient">
            Hey, I&apos;m Steven Elias
          </h1>
          <h2 className="title-3">Web Developer based in Ecuador 🇪🇨</h2>
        </div>
        <Description />
        <div className="flex flex-col mt-24 gap-14">
          <Stack />
          <Experience />
          <Education />
        </div>
        {/* <DetailsCard className="mt-10" /> */}

        {/* <div className="flex flex-col items-center justify-center mx-auto mt-10">
            <h4 className="text-gradient title-2">My current strike</h4>

            <GitHubCalendar username="steevened" fontSize={16} />
          </div> */}
      </section>
    </>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
