import Layout from '@/components/layouts/Layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import { projects } from '@/db/projects';
import ProjectItem from '@/components/works/ProjectItem';

const Works: NextPageWithLayout = () => {
  return (
    <div className="my-10">
      <h1 className="mt-5 title-1 text-gradient">Selected Works</h1>
      <ul className="grid grid-cols-1 mt-10 gap-x-5 gap-y-20 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.slug} />
        ))}
      </ul>
    </div>
  );
};

Works.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Works;
