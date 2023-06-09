import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { CardHome, Services } from '@/components/home';
import Tools from '@/components/home/Tools';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';
import WorksCards from '@/components/works/WorksCards';
import { BlogsList } from '@/components/blogs/BlogsList';
import { ContactCard } from '@/components/molecules/ContactCard';
import Avatar from '@/components/atoms/Avatar';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { Button } from '@material-tailwind/react';
import { ArrowLeftIcon } from '@/components/svg/Svg';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import Image from 'next/image';
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

      <section className="relative mb-5 md:mb-10 space-y-10">
        {/* <CardHome /> */}
        <Hero />

        <Projects />

        <div className="w-screen  left-[calc(-50vw_+_50%)] relative">
          <TechSlider />
        </div>

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
