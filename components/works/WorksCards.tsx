import { useRouter } from 'next/router';
import Card from '../molecules/Card';
import Image from 'next/image';

interface Work {
  name: string;
  title: string;
  technologies: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3?: string;
}

const works: Work[] = [
  {
    name: 'Para Cuando',
    title: "Vote for Your City's Next Big Event with Para Cuando",
    technologies:
      'NextJS, TypeScript, Tailwindcss, SWR, Formik, Yup, Context API',
    imageUrl1:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/pc1_bbori3.webp',
    imageUrl2:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/pc2_thmqsm.webp',
  },
  {
    name: 'GitFavorites',
    title:
      'GitFavorites: A Minimalistic App to Manage Your Favorite GitHub Profiles',
    technologies: 'NextJS, TypeScript, Tailwindcss, React Query, GitHub API',
    imageUrl1:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/finder1_qmkqrj.webp',
    imageUrl2:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/finder2_pwhbvj.webp',
    imageUrl3:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/finder3_h1l2ev.webp',
  },
  {
    name: 'TechCommerce',
    title: 'Your One-Stop Shop for the Latest Gadgets and Electronics',
    technologies:
      'NextJS, TypeScript, Tailwindcss, React Query, Static Site Generation, Thrid Party API',
    imageUrl1:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/tc1_ktjybq.webp',
    imageUrl2:
      'https://res.cloudinary.com/dysmgn1ew/image/upload/v1682359162/portfolio/tc2_irbsee.webp',
    // imageUrl3: '/../public/works/tc3.webp',
  },
];

const WorksCards = () => {
  const router = useRouter();
  return (
    <div className="grid gap-10 mt-10 md:grid-cols-2 place-items-center">
      {works.map((work) => (
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
                src={work.imageUrl1}
                alt="para cuando project"
                width={1000}
                height={1000}
              />
            </div>
            <div
              className={`absolute w-2/3 shadow-lg right-2  -rotate-2 shadow-black/50 z-20 ${
                !work.imageUrl3 ? 'top-20' : 'top-10'
              }`}
            >
              <Image
                src={work.imageUrl2}
                alt="para cuando project"
                width={1000}
                height={1000}
              />
            </div>
            {work.imageUrl3 && (
              <div
                className={`absolute w-2/3 shadow-lg left-3  -rotate-2 shadow-black/50 bottom-5 z-10 `}
              >
                <Image
                  src={work.imageUrl3}
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
