import Layout from '@/components/layouts/Layout';
import { ArrowLeftIcon } from '@/components/svg/Svg';
import { NextPageWithLayout } from '@/pages/_app';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import db from '../../../db/db.json';
import { useEffect, useState } from 'react';
import TailwinSkeleton from '@/components/blogs/skeleton/TailwinSkeleton';
import { FreeDB } from '@/components/blogs/databases/FreeDB';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  id: string;
}

const BlogPerNamePage: NextPageWithLayout<Props> = ({ id }) => {
  const [blog, setBlog] = useState<any>();
  const router = useRouter();
  // const { id } = router.query;

  useEffect(() => {
    const blogById = db.res.blogs.find((blog) => blog.id === id);
    setBlog(blogById);
  }, [id]);

  function Component() {
    switch (id) {
      case 'animate-loading-skeleton-with-tailwind-css':
        return <TailwinSkeleton />;
      case 'free-database-for-developers':
        return <FreeDB />;
    }
  }

  return (
    <div className="relative py-5 ">
      <div className="absolute">
        <Button
          onClick={() => router.back()}
          size="sm"
          variant="text"
          className="shadow-app-shadow-light dark:shadow-app-shadow"
          color="blue-gray"
        >
          <ArrowLeftIcon rotate />
        </Button>
      </div>
      <div className="mt-10">
        <h1 className="mt-5 title-1 text-gradient">{blog?.name}</h1>
        <p className="mt-1 text-gray-500">{blog?.date}</p>
      </div>

      <div className="">{Component()}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: db.res.blogs.map((blog) => ({
      params: { id: blog.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: { id },
  };
};

BlogPerNamePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default BlogPerNamePage;
