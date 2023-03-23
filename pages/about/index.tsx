import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
const About: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold text-center ">About</h1>
    </div>
  );
};

About.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default About;
