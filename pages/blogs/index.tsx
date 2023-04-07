import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/layouts/Layout';

const BlogPage: NextPageWithLayout = () => {
  return <div>BLOGS</div>;
};

BlogPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default BlogPage;
