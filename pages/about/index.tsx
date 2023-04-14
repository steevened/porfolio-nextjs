import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import GitHubCalendar from 'react-github-calendar';
import DetailsCard from '@/components/about/DetailsCard';
import Card from '@/components/atoms/Cards/Card';
import SkillsCards from '@/components/skills/SkillsCards';

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
          <div className="">
            <h1 className="py-2 title-1 text-gradient">
              Hey, I&apos;m Steven Elias
            </h1>
            <h2 className="title-3">Web Developer based in Ecuador 🇪🇨</h2>
          </div>
          <article>
            <p>
              As a passionate front-end developer, I create amazing websites and
              web apps to make the internet a better place. <br /> I am 22 years
              old and ever since I was a kid, I&apos;ve been fascinated by
              computers and how they work. I used to spend hours tinkering with
              hardware and software, trying to understand how everything fit
              together. Today, I use that same curiosity and enthusiasm to build
              websites that are not only visually stunning, but also easy to
              navigate and intuitive to use. When I&apos;m not coding, you can
              find me exploring new places, walking with my pets, reading a good
              book or capturing the world through my camera lens. <br />
              Growing up in Ecuador has been a significant influence on who I am
              today. The vibrant culture, stunning landscapes, and friendly
              people have shaped my worldview and my values. Living here has
              taught me to appreciate the small things in life, like spending
              time with loved ones, savoring delicious food, and enjoying the
              beauty of nature. I am grateful for the experiences and
              opportunities that my home country has given me, and I look
              forward to continuing to explore all that it has to offer.
            </p>
          </article>
          <DetailsCard className="mt-10" />

          {/* <SkillsCards /> */}

          <div className="flex flex-col items-center justify-center mx-auto mt-10">
            <h4 className="text-gradient title-2">My current strike</h4>

            <GitHubCalendar username="steevened" fontSize={16} />
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
