import { LoaderSkeleton } from './LoaderSkeleton';
import code from '../../../public/carbon.png';
import Image from 'next/image';

const TailwinSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-3 place-items-center">
        {[1, 2, 3].map((_, index) => (
          <LoaderSkeleton key={index} />
        ))}
      </div>
      {/* content */}

      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">Skeleton</h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Skeleton is a placeholder for content that hasn&apos;t been loaded
              yet.
            </li>

            <li className="">
              Use Tailwind&apos;s range of utility classes to create a skeleton
              that roughly resembles the content you&apos;re about to load.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center">
            <LoaderSkeleton />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            {/* <Image src={code} alt="code" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwinSkeleton;
