import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/layouts/Layout';
import db from '../../db/db.json';
import Card from '@/components/molecules/Card';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BlogPage: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <div className="my-10">
          <h1 className="py-2 title-1 text-gradient">Blogs</h1>

          <div className="my-10 space-y-10">
            {db.res.blogs.map((blog) => (
              <Card
                key={blog.id}
                className=""
                role="button"
                onClick={() => router.push(`/blogs/${blog.id}`)}
              >
                <h2 className="title-3 md:title-2">{blog.name}</h2>
                <p className="mt-1 text-gray-500">{blog.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

BlogPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default BlogPage;
