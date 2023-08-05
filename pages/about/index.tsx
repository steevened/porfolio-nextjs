import { NextPageWithLayout } from '../_app';
import { ReactElement, ReactNode } from 'react';
import Layout from '@/components/layouts/Layout';
import Description from '@/components/about/Description';
import Stack from '@/components/about/Stack';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';

const About: NextPageWithLayout = () => {
  return (
    <section className="my-10 ">
      <div className="">
        <h1 className="py-2 title-1 text-gradient">
          Hey, I&apos;m Steven Alvarado
        </h1>
        <h2 className="title-3">Web developer based in Ecuador 🇪🇨</h2>
      </div>
      <Description />
      <div className="flex flex-col mt-24 gap-14">
        <Stack />
        <Experience />
        <Education />
      </div>
      
    </section>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
