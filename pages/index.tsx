import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { CardHome, Services } from '@/components/home';
import Tools from '@/components/home/Tools';

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

          {/* tools */}
          <Tools />
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
