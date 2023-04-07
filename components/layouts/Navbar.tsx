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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  console.log(`hover index is ${hoverIndex} and route index is ${routeIndex}`);

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works';
  const isContact = pathname === '/contact';
  const isBlogs = pathname === '/blogs';

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
      case '/blogs':
        setRouteIndex(3);
        break;
      case '/contact':
        setRouteIndex(4);
        break;
      default:
        setRouteIndex(0);
        break;
    }
  }, [pathname]);

  return (
    <nav className="flex items-center gap-5 px-5 py-10 bg-black shadow-app-bottom">
      <Link href="/" className="grow">
        <p className="font-semibold">STEVEN ELIAS</p>
      </Link>
      <ul className="relative items-center hidden mx-4 sm:flex">
        <span
          className={`absolute h-full bg-gradient-to-br from-zinc-900 to-neutral-800 rounded-sm transition-all duration-300 ease-out pointer-events-none w-1/4 ${
            hoverIndex === 0
              ? 'left-0'
              : hoverIndex === 1
              ? 'left-1/4'
              : hoverIndex === 2
              ? 'left-1/2'
              : hoverIndex === 3
              ? 'left-3/4'
              : ''
          }
            
          
          `}
        ></span>

        <Link
          className={`w-20 px-2 py-1 ${
            isAbout &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
          href="/about"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleLeave()}
        >
          About
        </Link>
        <li
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-sm ${
            isWorks &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/works">Works</Link>
        </li>
        <li
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-sm ${
            isBlogs &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/blogs">Blog</Link>
        </li>
        <li
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleLeave()}
          className={`w-20 px-2 py-1 rounded-sm ${
            isContact &&
            'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div
        role="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col justify-between h-6 "
      >
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && 'rotate-45 translate-y-[12px]'
          }`}
        />
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && 'opacity-0'
          }`}
        />
        <div
          className={`shadow-app-shadow-hover w-8 h-[1px] duration-200 ${
            isMenuOpen && '-rotate-45 -translate-y-[10px]'
          }`}
        />
      </div>
    </nav>
    // <div
    //   className={`fixed bottom-0 w-full h-[50px] bg-black z-50  shadow-app-top ${className}`}
    // >
    //   <div className="flex items-center justify-center h-full">
    //     <div className="relative w-content">
    //       <span
    //         className={`absolute h-full bg-gradient-to-br from-zinc-900 to-neutral-800 rounded-md transition-all duration-300 ease-out  ${
    //           hoverIndex === -1
    //             ? `w-1/4 left-${
    //                 routeIndex === 0
    //                   ? '0'
    //                   : routeIndex === 1
    //                   ? '1/4'
    //                   : routeIndex === 2
    //                   ? '2/4'
    //                   : '3/4'
    //               }`
    //             : 'w-1/4'
    //         } ${hoverIndex === 0 ? 'left-0' : ''} ${
    //           hoverIndex === 1 ? 'left-1/4' : ''
    //         } ${hoverIndex === 2 ? 'left-2/4' : ''} ${
    //           hoverIndex === 3 ? 'left-3/4' : ''
    //         }`}
    //       ></span>
    //       <Link href="/">
    //         <Button
    //           onMouseEnter={() => handleHover(0)}
    //           onMouseLeave={() => handleLeave()}
    //           className={`hover:bg-transparent text-gray-300 overflow-hidden  active:scale-90 duration-200 ${
    //             isHome
    //               ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
    //               : ''
    //           }`}
    //         >
    //           {isHome ? <HomeIconOut /> : <HomeIcon />}
    //         </Button>
    //       </Link>
    //       <Link href="/about">
    //         <Button
    //           onMouseEnter={() => handleHover(1)}
    //           onMouseLeave={() => handleLeave()}
    //           className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
    //             isAbout
    //               ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
    //               : ''
    //           }`}
    //         >
    //           {isAbout ? <AboutIconOut /> : <AboutIcon />}
    //         </Button>
    //       </Link>
    //       <Link href="/works">
    //         <Button
    //           onMouseEnter={() => handleHover(2)}
    //           onMouseLeave={() => handleLeave()}
    //           className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
    //             isWorks
    //               ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
    //               : ''
    //           }`}
    //         >
    //           {isWorks ? <WorksIconOut /> : <WorksIcon />}
    //           {/* {hoverIndex} */}
    //         </Button>
    //       </Link>
    //       <Link href="/contact">
    //         <Button
    //           onMouseEnter={() => handleHover(3)}
    //           onMouseLeave={() => handleLeave()}
    //           className={` hover:bg-transparent text-gray-300 overflow-hidden active:scale-90 duration-200  ${
    //             isContact
    //               ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
    //               : ''
    //           }`}
    //         >
    //           {isContact ? <ContactIconOut /> : <ContactIcon />}
    //         </Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
