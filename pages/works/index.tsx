import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Card from '@/components/molecules/Card';
import Image from 'next/image';

interface Work {
  name: string;
  title: string;
  technologies: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3?: string;
}

const works: Work[] = [
  {
    name: 'Para Cuando',
    title: "Vote for Your City's Next Big Event with Para Cuando",
    technologies:
      'NextJS, TypeScript, Tailwindcss, SWR, Formik, Yup, Context API',
    imageUrl1: '/../public/works/pc2.webp',
    imageUrl2: '/../public/works/pc1.webp',
  },
  {
    name: 'GitFavorites',
    title:
      'GitFavorites: A Minimalistic App to Manage Your Favorite GitHub Profiles',
    technologies: 'NextJS, TypeScript, Tailwindcss, React Query, GitHub API',
    imageUrl1: '/../public/works/finder1.webp',
    imageUrl2: '/../public/works/finder2.webp',
    imageUrl3: '/../public/works/finder3.webp',
  },
  {
    name: 'TechCommerce',
    title: 'Your One-Stop Shop for the Latest Gadgets and Electronics',
    technologies:
      'NextJS, TypeScript, Tailwindcss, React Query, Static Site Generation, Thrid Party API',
    imageUrl1: '/../public/works/tc1.webp',
    imageUrl2: '/../public/works/tc2.webp',
    // imageUrl3: '/../public/works/tc3.webp',
  },
];

const Works: NextPageWithLayout = () => {
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
      <main className="my-10">
        <h1 className="mt-5 title-1 text-gradient">Selected Works</h1>

        <div className="grid gap-10 mt-10 md:grid-cols-2 place-items-center">
          {works.map((work) => (
            <Card
              key={work.title}
              role="button"
              className="flex flex-col items-center px-10 gap-y-5 max-w-[400px] h-[650px]"
            >
              <div>
                <h2 className="title-2">{work.title}</h2>

                <p className="mt-2 text-sm">
                  <span className="font-semibold">Technologies used: </span>
                  {work.technologies}
                </p>
              </div>

              <div className="relative flex w-full max-w-xs overflow-hidden rounded-md shadow-lg bg-slate-300 dark:bg-slate-900 h-96 animate-scale">
                <div className="absolute w-2/3 shadow-lg left-4 top-3 -rotate-2 shadow-black/50">
                  <Image
                    src={work.imageUrl1}
                    alt="para cuando project"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div
                  className={`absolute w-2/3 shadow-lg right-2  -rotate-2 shadow-black/50 z-20 ${
                    !work.imageUrl3 ? 'top-20' : 'top-10'
                  }`}
                >
                  <Image
                    src={work.imageUrl2}
                    alt="para cuando project"
                    width={1000}
                    height={1000}
                  />
                </div>
                {work.imageUrl3 && (
                  <div
                    className={`absolute w-2/3 shadow-lg left-3  -rotate-2 shadow-black/50 bottom-5 z-10 `}
                  >
                    <Image
                      src={work.imageUrl3}
                      alt="para cuando project"
                      width={1000}
                      height={1000}
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
