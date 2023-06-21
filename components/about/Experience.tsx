import { ReactElement } from 'react';
import { AcademloIcon, TailwindIcon } from '../svg/Svg';
import Card from '../molecules/Card';
import {
  GtIcon,
  JavaScriptIcon,
  MgIcon,
  NdIcon,
  NxIcon,
  PgIcon,
  ReduxIcon,
  RjsIcon,
  TsLogo,
} from '../svg/skills/skillsSvgs';

interface Skill {
  name: string;
  icon: ReactElement;
}

interface Experience {
  logo: ReactElement;
  position: string;
  company: string;
  companyLink?: string;
  place?: string;
  technologies: string;
  duration: string;
  details: string[];
  skills: Skill[];
}

const experiences: Experience[] = [
  {
    logo: <AcademloIcon className="w-10 h-10" />,
    position: 'Frontend Developer Intern',
    company: 'Academlo',
    companyLink: 'https://www.academlo.com/',
    place: 'Queretaro, México - Remote',
    technologies: 'TypeScript, NextJS, Tailwind css, SWR, Git, GitLab',
    duration: 'Mar 2023 - Jun 2023',
    details: [
      'Created a student management system using TypeScript, NextJS, and Tailwind css.',
      'Implemented features such as client-side data fetching with SWR and server-side rendering for improved performance.',
    ],
    skills: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        name: 'NextJS',
        icon: <NxIcon />,
      },
      {
        name: 'Tailwind css',
        icon: <TailwindIcon />,
      },
      {
        name: 'React JS',
        icon: <RjsIcon />,
      },
      {
        name: 'Git',
        icon: <GtIcon />,
      },
      {
        name: 'Redux',
        icon: <ReduxIcon />,
      },
    ],
  },
  {
    logo: <RjsIcon />,
    position: 'Freelance Web Developer',
    company: 'Freelance',
    technologies:
      'TypeScript, JavaScript, ReactJS, NextJS, SWR, Redux, MongoDB, ExpressJS, NodeJS, React Query, Material UI, PostgreSQL, Sequelize, Tailwind css, Vercel.',
    duration: 'Jun 2022 - Mar 2023',
    details: [
      'Development of responsive and performant websites and web applications for small and medium-sized businesses',
      'Collaborating with clients to define project requirements and goals',
      'Integrating third-party APIs and services into web applications.',
    ],
    skills: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScriptIcon />,
      },
      {
        name: 'React JS',
        icon: <RjsIcon />,
      },
      {
        name: 'Tailwind css',
        icon: <TailwindIcon />,
      },
      {
        name: 'Node JS',
        icon: <NdIcon />,
      },
      {
        name: 'PostgreSQL',
        icon: <PgIcon />,
      },
      {
        name: 'MongoDB',
        icon: <MgIcon />,
      },
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <h3 className="my-10 text-4xl font-bold text-gradient">My Experience</h3>

      <div className="relative flex flex-col gap-10 ">
        {experiences.map((experience) => (
          <>
            <Card key={experience.company} className="flex-1 ">
              <div>
                <div className="flex items-center gap-2 ">
                  <div className="flex justify-center w-16 ">
                    {experience.logo}
                  </div>
                  <div className="flex flex-col items-start justify-between w-full md:flex-row-reverse">
                    <p className="text-sm font-semibold whitespace-nowrap">
                      {experience.duration}
                    </p>
                    <div>
                      <h3 className="font-semibold md:text-xl ">
                        {experience.position}
                      </h3>
                      <a
                        target="_blank"
                        href={experience.companyLink}
                        className="block pb-1 text-base duration-200 text-sky-400 hover:text-sky-600 hover:cursor-pointer"
                      >
                        {experience.company}
                      </a>
                      {experience.place && (
                        <p className="block text-sm">{experience.place}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 leading-loose">
                <ul className="pl-4 text-sm font-semibold leading-6 list-disc text-blue-gray-700 dark:text-blue-gray-200/90">
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4 ">
                {experience.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center "
                  >
                    <div>
                      <span className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue-gray-50 dark:bg-app-gray">
                        {skill.icon}
                      </span>
                      <p className="mt-1 text-sm font-medium text-center">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <span className="absolute w-[3px] -translate-y-1/2 bg-gray-400/50 dark:bg-app-gray h-1/3 top-1/2 left-5 -z-10" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
