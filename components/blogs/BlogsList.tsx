import { useRouter } from 'next/router';
import db from '../../db/db.json';
import Card from '../molecules/Card';

export const BlogsList = () => {
  const router = useRouter();
  return (
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
  );
};
