import Layout from '@/components/layouts/Layout';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import WorksCards from '@/components/works/WorksCards';
import { projects } from '@/db/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@/components/svg/Svg';
import ProjectItem from '@/components/works/ProjectItem';

interface Project {
  imageUrl: string;
}

const Works: NextPageWithLayout = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="mt-5 title-1 text-gradient">Selected Works</h1>
        <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-20 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectItem project={project} key={project.slug} />
          ))}
        </ul>
      </div>
    </>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
