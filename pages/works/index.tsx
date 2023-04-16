import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Card from '@/components/molecules/Card';
import Image from 'next/image';
import paracuando1 from '@/public/works/pc1.webp';
import paracuando2 from '@/public/works/pc2.webp';

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
          <Card
            role="button"
            className="flex flex-col items-center px-10 gap-y-5 max-w-[400px]"
          >
            <div>
              <h2 className="subtitle-1">
                Vote for Your City&apos;s Next Big Event with{' '}
                <span className="font-bold">Para Cuando</span>
              </h2>

              <p className="mt-2 text-sm">
                <span className="font-semibold">Technologies used: </span>{' '}
                NextJS, TypeScript, Tailwindcss, SWR, Formik, Yup.
              </p>
            </div>

            <div className="relative flex w-full max-w-xs overflow-hidden rounded-md shadow-lg bg-slate-300 dark:bg-slate-900 h-96 animate-scale">
              <div className="absolute w-2/3 shadow-lg left-4 top-3 -rotate-2 shadow-black/50">
                <Image src={paracuando2} alt="para cuando project" />
              </div>
              <div className="absolute w-2/3 shadow-lg right-2 top-20 -rotate-2 shadow-black/50 ">
                <Image src={paracuando1} alt="para cuando project" />
              </div>
            </div>
          </Card>

          <Card
            role="button"
            className="flex flex-col items-center px-10 gap-y-5 max-w-[400px]"
          >
            <div>
              <h2 className="subtitle-1">
                Vote for Your City&apos;s Next Big Event with{' '}
                <span className="font-bold">Para Cuando</span>
              </h2>

              <p className="mt-2 text-sm">
                <span className="font-semibold">Technologies used: </span>{' '}
                NextJS, TypeScript, Tailwindcss, SWR, Formik, Yup.
              </p>
            </div>

            <div className="relative flex w-full max-w-xs overflow-hidden rounded-md shadow-lg bg-slate-300 dark:bg-slate-900 h-96 animate-scale">
              <div className="absolute w-2/3 shadow-lg left-4 top-3 -rotate-2 shadow-black/50">
                <Image src={paracuando2} alt="para cuando project" />
              </div>
              <div className="absolute w-2/3 shadow-lg right-2 top-20 -rotate-2 shadow-black/50 ">
                <Image src={paracuando1} alt="para cuando project" />
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
