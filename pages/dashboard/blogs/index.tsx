import { NextPageWithLayout } from '../../_app';
import { ReactNode } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Blogs: NextPageWithLayout = () => {
  return <div>Blogs</div>;
};

Blogs.getLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Blogs;
