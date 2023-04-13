import Image from 'next/image';
import me from '../../public/me.png';
import { UIContext } from '@/context/ui';
import { useContext } from 'react';
import Link from 'next/link';

const Avatar = () => {
  const { isNavbarSticky } = useContext(UIContext);
  return (
    <div
      className={`relative flex  p-1 overflow-hidden rounded-full hover:scale-110 duration-200  ${
        isNavbarSticky ? 'w-16 h-16' : ' w-16 h-16 md:w-24 md:h-24'
      }`}
    >
      <Link href="/" className="z-10 overflow-hidden rounded-full ">
        <Image src={me} alt="Steven Elias - @steevened" />
      </Link>
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-sky-700/75 to-purple-700/75 animate-spin-slow backdrop-blur-md" />
    </div>
  );
};

export default Avatar;
