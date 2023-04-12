import Image from 'next/image';
import me from '../../public/me.png';
import { UIContext } from '@/context/ui';
import { useContext } from 'react';

const Avatar = () => {
  const { isNavbarSticky } = useContext(UIContext);
  return (
    <div>
      <div
        className={`relative flex  p-1 overflow-hidden rounded-full  ${
          isNavbarSticky ? 'w-14 h-14' : ' w-16 h-16 md:w-24 md:h-24'
        }`}
      >
        <div className="z-10 overflow-hidden rounded-full">
          <Image src={me} alt="Steven Elias - @steevened" />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-sky-700/75 to-purple-700/75 animate-spin-slow backdrop-blur-md" />
      </div>
    </div>
  );
};

export default Avatar;
