import Image from 'next/image';
import me from '../../public/me.png';
import { UIContext } from '@/context/ui';
import { FC, HtmlHTMLAttributes, useContext } from 'react';
import Link from 'next/link';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}

const Avatar: FC<Props> = ({ className }) => {
  const { isNavbarSticky } = useContext(UIContext);
  return (
    <div
      className={`relative flex  overflow-hidden rounded-full hover:scale-110 duration-200 aspect-square shadow-app-shadow-xl dark:shadow-app-shadow-dark-xl ${
        !className
          ? isNavbarSticky
            ? 'w-16 h-16'
            : ' w-16 h-16 md:w-24 md:h-24'
          : null
      }
      ${isNavbarSticky ? 'p-1' : 'p-2'}
      ${className}`}
    >
      <Link href="/" className="z-10 overflow-hidden rounded-full ">
        <Image src={me} alt="Steven Elias - @steevened" />
      </Link>
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-tr from-sky-700/80 to-purple-700/80 animate-spin-slow backdrop-blur-md `}
      />
    </div>
  );
};

export default Avatar;
