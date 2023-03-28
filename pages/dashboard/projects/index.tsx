import React from 'react';
import { NextPageWithLayout } from '../../_app';
import { ReactNode } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const ProjectsPage: NextPageWithLayout = () => {
  return <div>ProjectsPage</div>;
};

ProjectsPage.getLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProjectsPage;
