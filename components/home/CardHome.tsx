import { AcademloIcon, GithubLogo, LinkedinLogo } from '../svg/Svg';
import me from '@/public/me.png';
import Image from 'next/image';
import Avatar from '../atoms/Avatar';

export const CardHome = () => {
  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-5">
      <Avatar />
      <div className="flex flex-col justify-center gap-3 bg-transparent text-start">
        <h1 className="bg-transparent -tracking-tight text-gradient md:title-3">
          @STEEVENED
        </h1>
        <h2 className="flex items-center text-sm text-gray-400 md:text-lg">
          Web Developer at{' '}
          <span className="px-2">
            <AcademloIcon />
          </span>
          Academlo
        </h2>
      </div>
    </div>
  );
};
