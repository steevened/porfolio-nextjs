import { useRouter } from 'next/router';
import Card from '../molecules/Card';
import Image from 'next/image';
import db from '../../db/db.json';

const WorksCards = () => {
  const router = useRouter();
  return (
    <div className="grid gap-10 mt-10 md:grid-cols-2 place-items-center">
      {db.res.works.map((work) => (
        <Card
          onClick={() => router.push(`/works/${work.name}`)}
          key={work.title}
          role="button"
          className="flex flex-col items-center px-10 gap-y-5 max-w-[400px] h-[650px]"
        >
          <div>
            <h2 className="title-2">{work.title}</h2>

            <p className="mt-2 text-sm">
              <span className="font-semibold">Technologies used: </span>
              {work.technologies}
            </p>
          </div>

          <div className="relative flex w-full max-w-xs overflow-hidden rounded-md shadow-lg bg-slate-300 dark:bg-slate-900 h-96 animate-scale">
            <div className="absolute w-2/3 shadow-lg left-4 top-3 -rotate-2 shadow-black/50">
              <Image
                src={work.images.default[0]}
                alt="para cuando project"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`absolute w-2/3 shadow-lg right-2  -rotate-2 shadow-black/50 z-20 ${
                !work.images.default[2] ? 'top-20' : 'top-10'
              }`}
            >
              <Image
                src={work.images.default[1]}
                alt="para cuando project"
                width={1000}
                height={1000}
              />
            </div>
            {work.images.default.length >= 3 && (
              <div
                className={`absolute w-2/3 shadow-lg left-3  -rotate-2 shadow-black/50 bottom-5 z-10 `}
              >
                <Image
                  src={work.images.default[2]}
                  alt="para cuando project"
                  width={1000}
                  height={1000}
                />
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorksCards;
