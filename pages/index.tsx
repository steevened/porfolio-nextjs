import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';

import { BlogsList } from '@/components/blogs/BlogsList';
import { ContactCard } from '@/components/molecules/ContactCard';

import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import TechSlider from '@/components/sliders/TechSlider';

const Home = () => {
  return (
    <>
      <Head>
        <title>Steven Elias - Personal site</title>
        <meta
          name="description"
          content="Personal site of Steven Elias - steevened"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative mb-5 space-y-10 md:mb-10">
        {/* <CardHome /> */}
        <Hero />

        <Projects />

        <TechSlider />

        <div className="space-y-32">
          {/* <Services /> */}
          {/* <Experience /> */}
          {/* <Education /> */}
          {/* <div>
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
              Selected Works
            </h2>
            <WorksCards />
          </div> */}
          <div className="pt-10">
            <h2 className="mb-8 font-semibold md:text-4xl text-gradient ">
              Latest Posts
            </h2>
            <BlogsList />
          </div>
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
              Contact Me
            </h2>
            <ContactCard />
          </div>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
