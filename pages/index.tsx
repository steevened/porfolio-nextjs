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

      <section className="relative mb-5 space-y-10 md:mb-10 ">
        {/* <CardHome /> */}
        <div className="flex flex-col items-center md:justify-between md:flex-row-reverse  gap-y-5 h-[calc(100vh-130px)]">
          <div className="p-2">
            <Avatar className="w-48 md:w-60" />
          </div>
          <div className="space-y-5">
            <h2 className="text-4xl font-bold text-center md:text-left md:text-6xl text-gradient drop-shadow-sm">
              {"Hi, I'm Steven Alvarado"}
            </h2>
            <RoughNotationGroup show={true}>
              <h3 className="text-2xl font-semibold">
                A
                <span className="mx-2 ">
                  <RoughNotation
                    type="underline"
                    color="#c084fc"
                    strokeWidth={2}
                    padding={[5, 5]}
                  >
                    web developer
                  </RoughNotation>
                </span>
                based in Ecuador 🇪🇨
              </h3>
            </RoughNotationGroup>

            <Link
              href="/about"
              className="flex items-center gap-2 px-2 py-3 duration-100 -translate-x-2 rounded-md w-min group hover:bg-purple-50 dark:hover:bg-purple-900/10 hover:text-purple-500 hover:shadow-sm"
              role="button"
            >
              <p className="text-xl font-medium whitespace-nowrap ">
                Want to know me more?
              </p>
              <span className="duration-100 -translate-x-1 group-hover:translate-x-0">
                {' '}
                <ArrowLeftIcon />
              </span>
            </Link>

            <div className="flex justify-center gap-5 md:justify-start">
              <Button color="purple" size="lg">
                Visit Linkedin
              </Button>
              <Button
                color="purple"
                size="lg"
                variant="outlined"
                className="focus:ring-0"
              >
                Visit GitHub
              </Button>
            </div>
          </div>
        </div>
        <div className="">
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
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
