import DivProps from '@/lib/interfaces/components.interface';
import React from 'react';
import Card from '../atoms/Cards/Card';

const DetailsCard = ({ className }: DivProps) => {
  return (
    <Card
      className={`flex mx-auto max-md:flex-col w-full max-w-4xl  relative ${className}`}
    >
      <div className="flex-1 p-5">
        <h5 className="text-xl md:text-2xl font-medium text-gray-300">
          Front-end Specialized
        </h5>
        <p className="text-sm leading-loose mt-5">
          I have experience working with React, Next.js, TypeScript, and other
          modern front-end frameworks and libraries. My expertise includes
          developing responsive layouts, implementing complex UI components, and
          integrating with APIs and back-end services.
        </p>
      </div>
      <div className="flex-1 p-5">
        <h5 className="text-xl md:text-2xl font-medium text-gray-300">
          Backend Proficiency
        </h5>
        <p className="text-sm leading-loose mt-5">
          I&apos;m also proficient in backend development using technologies
          like Node.js, Express, PostgreSQL, Sequelize, MongoDB and Firebase.
          This means that I have a comprehensive understanding of both the
          frontend and backend aspects of web development, allowing me to create
          full-stack applications.
        </p>
      </div>
      <div className="absolute inset-x-5 h-[1px] top-1/2 md:hidden shadow-app-shadow" />
      <div className="hidden md:block absolute  inset-y-5 w-[1px] shadow-app-shadow left-1/2" />
    </Card>
  );
};

export default DetailsCard;
