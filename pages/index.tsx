import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { CardHome, Services } from '@/components/home';
import Tools from '@/components/home/Tools';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';
import WorksCards from '@/components/works/WorksCards';
import { BlogsList } from '@/components/blogs/BlogsList';

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
            Welcome to my digital garden, where I cultivate my passion for
            building exceptional digital products. With expertise in front-end
            development using React and TypeScript, I craft beautiful and
            functional web applications that enhance the online experience.
            Through this space, I&apos;ll be sharing insights into my learning
            journey and the techniques I employ to create great products. So
            join me on this exciting adventure, as we explore the endless
            possibilities of the digital world together.
          </p>

          <div className="space-y-32">
            <Tools />
            <Services />
            <Experience />
            <Education />
            <div>
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Selected Works
              </h2>
              <WorksCards />
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
                Latest Posts
              </h2>
              <BlogsList />
            </div>
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
