import Layout from '@/components/layouts/Layout';
import { Button } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { ArrowLeftIcon } from '../components/svg/Svg';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import HeroSection from '@/components/molecules/HeroSection';

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

      <main className="md:mt-14">
        <div className="container flex flex-col-reverse items-center px-5 py-24 mx-auto gap-y-10 md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:flex-1 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 title-1 text-gradient ">
              {"Hi! I'm Steven Elias"}
              <span className="block">A frontend web developer</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to my site, I am a passionate Software Engineer,
              specialised in front-end development using React and TypeScript. I
              create amazing web applications to make the internet a better
              place.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="inline-flex px-6 py-2 text-white bg-app-gray shadow-app-shadow">
                  get started
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="text"
                  endIcon={<ArrowLeftIcon />}
                  className="inline-flex px-6 py-2 ml-4 text-gray-400 border-0 rounded focus:outline-none hover:text-white hover:bg-black shadow-app-shadow"
                >
                  Know more
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-5/6 md:flex-1">
            <HeroSection />
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
