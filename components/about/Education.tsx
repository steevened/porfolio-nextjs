import { FullStackOpenLogo } from '../svg/Svg';

const Education = () => {
  return (
    <div>
      <h3 className="mb-8 title-3">My Education</h3>
      <div className="relative w-full px-4 py-6 duration-200 rounded-md shadow-app-shadow-light dark:shadow-app-shadow bg-gradient-to-bl from-slate-50 to-slate-100 dark:from-app-gray dark:to-app-gray hover:scale-105 after:absolute after:inset-0 after:shadow-md after:rounded-md after:pointer-events-none">
        <div className="flex items-center gap-2 ">
          <div className="">
            <FullStackOpenLogo />
          </div>
          <div className="flex flex-col items-start justify-between w-full md:flex-row-reverse">
            <p className="text-sm font-semibold whitespace-nowrap">
              Aug 2022 - Present
            </p>
            <div>
              <h3 className="font-semibold md:text-xl text-gradient ">
                Full-Stack Open
              </h3>
              <a
                target="_blank"
                href="https://fullstackopen.com/en/"
                className="pb-1 text-base duration-200 text-sky-400 hover:text-sky-600 hover:cursor-pointer"
              >
                University of Helsinki - Online
              </a>
              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-medium">Course Content: </span>
                  JavaScript, Node.js, Express, React, MongoDB, Jest, Redux,
                  Context API. TypeScript, GraphQL, React Native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
