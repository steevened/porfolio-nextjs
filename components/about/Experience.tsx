import { ReactElement } from 'react';
import { AcademloIcon, ReactIcon } from '../svg/Svg';
import Card from '../molecules/Card';

interface Experience {
  logo: ReactElement;
  position: string;
  company: string;
  companyLink?: string;
  place?: string;
  technologies: string;
  duration: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    logo: <AcademloIcon className="w-16 h-16" />,
    position: 'Frontend Developer Intern',
    company: 'Academlo',
    companyLink: 'https://www.academlo.com/',
    place: 'Querétaro, México - Remote',
    technologies: 'TypeScript, NextJS, Tailwindcss, SWR, Git, GitLab',
    duration: 'Mar 2023 - present',
    details: [
      'Created a class center web application using React, NextJS, and TailwindCSS. Implemented features such as client-side data fetching with SWR and server-side rendering for improved performance.',
      'Assist with testing and bug fixing for the application.',
      'Collaborate with other developers to improve the application.',
    ],
  },
  {
    logo: <ReactIcon className="w-16 h-16" />,
    position: 'Freelance Web Developer',
    company: 'Free',
    technologies:
      'TypeScript, JavaScript, ReactJS, NextJS, SWR, Redux, MongoDB, ExpressJS, NodeJS, React Query, Material UI, PostgreSQL, Sequelize, Tailwindcss, Vercel.',
    duration: 'Oct  2022 - Mar 2023',
    details: [
      'Development of responsive and performant websites and web applications for small and medium-sized businesses',
      'Creating reusable components and optimizing the codebase for maintainability',
      'Collaborating with clients to define project requirements and goals',
      'Integrating third-party APIs and services into web applications',
    ],
  },
];

const Experience = () => {
  return (
    <div>
      <h3 className="mb-8 title-3">My Experience</h3>

      <div className="space-y-10 ">
        {experiences.map((experience) => (
          <Card key={experience.company}>
            <div>
              <div className="flex items-center gap-2 ">
                <div>{experience.logo}</div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row-reverse">
                  <p className="text-sm font-semibold whitespace-nowrap">
                    {experience.duration}
                  </p>
                  <div>
                    <h3 className="font-semibold md:text-xl text-gradient ">
                      {experience.position}
                    </h3>
                    <a
                      target="_blank"
                      href={experience.companyLink}
                      className="pb-1 text-base duration-200 text-sky-400 hover:text-sky-600 hover:cursor-pointer"
                    >
                      {experience.company}
                    </a>
                    {experience.place && (
                      <p className="text-sm">{experience.place}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-medium">Technologies: </span>
                  {experience.technologies}
                </p>
              </div>
            </div>

            <div className="mt-4 leading-loose">
              <ul className="pl-4 list-disc ">
                {experience.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
