import db from '../../db/db.json';
import Card from '../molecules/Card';
import { ArrowLeftIcon } from '../svg/Svg';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

export const BlogsList = () => {
  return (
    <div className="my-10 space-y-10">
      {db.res.blogs.map((blog) => (
        <Card
          key={blog.id}
          // onClick={() => router.push(`/blogs/${blog.id}`)}
        >
          <div className="flex justify-between gap-4">
            <div>
              <h2 className="title-3 md:title-2">{blog.name}</h2>
              <p className="mt-1 text-gray-500">{blog.date}</p>
            </div>
            <div>
              <Link href={`/blogs/${blog.id}`}>
                <Button
                  variant="text"
                  color="purple"
                  className="!w-full h-full "
                >
                  <ArrowLeftIcon />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
