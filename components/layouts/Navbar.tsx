import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BtnNavbar from '../atoms/buttons/BtnNavbar';
import HomeIcon, { HomeIconOut } from '../svg/Svg';
import {
  AboutIconOut,
  AboutIcon,
  WorksIconOut,
  WorksIcon,
  ContactIconOut,
  ContactIcon,
} from '../svg/Svg';

const Navbar = ({ className }: { className?: string }) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [routeIndex, setRouteIndex] = useState<number>(0);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works';
  const isContact = pathname === '/contact';

  const hoverRectStyles = {
    transform: `translateX(${hoverIndex * 25}%)`,
  };

  useEffect(() => {
    switch (pathname) {
      case '/':
        setRouteIndex(0);
        break;
      case '/about':
        setRouteIndex(1);
        break;
      case '/works':
        setRouteIndex(2);
        break;
      case '/contact':
        setRouteIndex(3);
        break;
      default:
        setRouteIndex(0);
        break;
    }
  }, [pathname]);

  console.log(hoverIndex);

  return (
    <div
      className={`fixed bottom-0 w-full h-[50px] bg-black  shadow-app-top ${className}`}
    >
      <div className="flex h-full justify-center items-center">
        <div className="w-content  relative">
          <span
            className={`absolute h-full bg-gradient-to-br from-zinc-900 to-neutral-800 rounded-md transition-all duration-300 ease-out  ${
              hoverIndex === -1
                ? `w-1/4 left-${
                    routeIndex === 0
                      ? '0'
                      : routeIndex === 1
                      ? '1/4'
                      : routeIndex === 2
                      ? '2/4'
                      : '3/4'
                  }`
                : 'w-1/4'
            } ${hoverIndex === 0 ? 'left-0' : ''} ${
              hoverIndex === 1 ? 'left-1/4' : ''
            } ${hoverIndex === 2 ? 'left-2/4' : ''} ${
              hoverIndex === 3 ? 'left-3/4' : ''
            }`}
          ></span>
          <Link href="/">
            <Button
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => handleLeave()}
              className={`hover:bg-transparent text-gray-300 overflow-hidden  active:scale-90 duration-200 ${
                isHome
                  ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                  : ''
              }`}
            >
              {isHome ? <HomeIconOut /> : <HomeIcon />}
            </Button>
          </Link>
          <Link href="/about">
            <Button
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleLeave()}
              className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
                isAbout
                  ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                  : ''
              }`}
            >
              {isAbout ? <AboutIconOut /> : <AboutIcon />}
            </Button>
          </Link>
          <Link href="/works">
            <Button
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleLeave()}
              className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
                isWorks
                  ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                  : ''
              }`}
            >
              {isWorks ? <WorksIconOut /> : <WorksIcon />}
              {/* {hoverIndex} */}
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleLeave()}
              className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
                isContact
                  ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                  : ''
              }`}
            >
              {isContact ? <ContactIconOut /> : <ContactIcon />}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
