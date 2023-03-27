import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';

import GitHubCalendar from 'react-github-calendar';
import DetailsCard from '@/components/about/DetailsCard';
import Card from '@/components/atoms/Cards/Card';
import { TechSlider } from '@/components/about/TechSlider';

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
          <div className="mt-10 text-center">
            <h4 className="title-1 text-gradient">Who Am I?</h4>
          </div>
          <DetailsCard className="mt-10" />

          <TechSlider />

          <div className="flex flex-col items-center justify-center mx-auto mt-10 md:w-9/12">
            <h4 className="text-gradient title-2">Days I Code</h4>
            <Card className="p-5 mt-5">
              <GitHubCalendar username="steevened" fontSize={16} />
            </Card>
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
