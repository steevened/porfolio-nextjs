import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';

import { BlogsList } from '@/components/blogs/BlogsList';
import { ContactCard } from '@/components/molecules/ContactCard';

import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import TechSlider from '@/components/sliders/TechSlider';
import Experience from '@/components/about/Experience';
import Education from '@/components/about/Education';

const Home = () => {
  return (
    <section className="relative mb-5 space-y-10 md:mb-10">
      {/* <CardHome /> */}
      <Hero />

      <Projects />

      <TechSlider />
      <Experience />
      <Education />

      <div className="space-y-32">
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-gradient">Latest Posts</h2>
          <BlogsList />
        </div>
        <div className="text-center">
          <h2 className="mb-8 text-4xl font-bold text-gradient">Contact Me</h2>
          <ContactCard />
        </div>
      </div>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
