import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/layouts/Layout';

import { BlogsList } from '@/components/blogs/BlogsList';

const BlogPage: NextPageWithLayout = () => {
  return (
    <div className="h-full min-h-[calc(100vh-210px)]">
      <div className="my-10">
        <h1 className="py-2 title-1 text-gradient">Blogs</h1>
        <BlogsList />
      </div>
    </div>
  );
};

BlogPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default BlogPage;
