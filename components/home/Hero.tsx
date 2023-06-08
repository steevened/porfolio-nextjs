import { FC } from 'react';
import Avatar from '../atoms/Avatar';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import Link from 'next/link';
import { ArrowLeftIcon } from '../svg/Svg';
import { Button } from '@material-tailwind/react';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col items-center md:justify-between md:flex-row-reverse  gap-y-5 h-[calc(100vh-100px)]">
      <div className="p-2">
        <Avatar className="w-48 md:w-60" />
      </div>
      <div className="space-y-5">
        <h2 className="text-4xl font-bold text-center md:text-left md:text-6xl text-gradient drop-shadow-sm">
          {"Hi, I'm Steven Alvarado"}
        </h2>
        <RoughNotationGroup show={true}>
          <h3 className="text-2xl font-semibold">
            A
            <span className="mx-2 ">
              <RoughNotation
                type="underline"
                color="#c084fc"
                strokeWidth={2}
                padding={[5, 5]}
              >
                web developer
              </RoughNotation>
            </span>
            based in Ecuador 🇪🇨
          </h3>
        </RoughNotationGroup>

        <Link
          href="/about"
          className="flex items-center gap-2 px-2 py-3 duration-100 -translate-x-2 rounded-md w-min group hover:bg-purple-50 dark:hover:bg-purple-900/10 hover:text-purple-500 hover:shadow-sm"
          role="button"
        >
          <p className="text-xl font-medium whitespace-nowrap ">
            Want to know me more?
          </p>
          <span className="duration-100 -translate-x-1 group-hover:translate-x-0">
            {' '}
            <ArrowLeftIcon />
          </span>
        </Link>

        <div className="flex justify-center gap-5 md:justify-start">
          <Link href="https://www.linkedin.com/in/steevened/" target="_blank">
            <Button color="purple" size="lg">
              Visit Linkedin
            </Button>
          </Link>
          <Link href="https://github.com/steevened" target="_blank">
            <Button
              color="purple"
              size="lg"
              variant="outlined"
              className="focus:ring-0"
            >
              Visit GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
