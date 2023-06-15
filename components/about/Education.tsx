import { ReactElement } from 'react';
import { AcademloIcon, FreeCodeCampLogo, FullStackOpenLogo } from '../svg/Svg';
import Card from '../molecules/Card';

interface Education {
  logo: ReactElement;
  course: string;
  university: string;
  universityLink?: string;
  duration: string;
  content: string;
}

const educations: Education[] = [
  {
    logo: <FullStackOpenLogo />,
    course: 'Full-Stack Open',
    university: 'University of Helsinki - Online',
    universityLink: 'https://fullstackopen.com/en/',
    duration: 'Aug 2022 - Present',
    content:
      'JavaScript, Node.js, Express, React, MongoDB, Jest, Redux, Context API. TypeScript, GraphQL, React Native.',
  },
  {
    logo: <AcademloIcon className="w-16 h-16" />,
    course: 'Academlo Full-Stack Web Development',
    university: 'Academlo - Online',
    universityLink: 'https://academlo.com',
    duration: 'Aug 2022 - Feb 2023',
    content:
      'Fundamentals of web development, HTML, CSS, Javascript, ReactJS, Redux, NodeJS, Express, PostgreSQL, Sequelize, Git.',
  },
  {
    logo: <FreeCodeCampLogo />,
    course: 'Front End Web Development',
    university: 'Free Code Camp',
    universityLink: 'https://www.freecodecamp.org/',
    duration: 'May 2022 - Sep 2022',
    content:
      'Algorithms and data structure, HTML, CSS, JavaScript, Responsive Web Design.',
  },
];

const Education = () => {
  return (
    <div>
      <h3 className="mb-8 text-4xl font-bold text-gradient">My Education</h3>

      <div className="space-y-10 ">
        {educations.map((education) => (
          <Card key={education.university}>
            <div className="flex items-center gap-2">
              <div className="">{education.logo}</div>
              <div className="flex flex-col items-start justify-between w-full md:flex-row-reverse">
                <p className="text-sm font-semibold whitespace-nowrap">
                  {education.duration}
                </p>
                <div>
                  <h3 className="font-semibold md:text-xl">
                    {education.course}
                  </h3>
                  <a
                    target="_blank"
                    href={education.universityLink}
                    className="block pb-1 text-base duration-200 text-sky-400 hover:text-sky-600 hover:cursor-pointer"
                  >
                    {education.university}
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="mt-2">
              <p className="text-sm">
                <span className="font-medium">Course Content: </span>
                {education.content}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Education;
