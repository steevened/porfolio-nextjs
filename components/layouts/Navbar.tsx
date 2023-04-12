import { UIContext } from '@/context/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, useContext, useEffect, useState } from 'react';
import Drawer from './Drawer';

const Navbar: FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [routeIndex, setRouteIndex] = useState<number>(-1);

  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { sideMenuOpen, toggleSideMenu, closeSideMenu } = useContext(UIContext);

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
  const isBlogs = pathname === '/blogs';

  useEffect(() => {
    switch (pathname) {
      case '/':
        setRouteIndex(-1);
        break;
      case '/about':
        setRouteIndex(0);
        break;
      case '/works':
        setRouteIndex(1);
        break;
      case '/blogs':
        setRouteIndex(2);
        break;
      case '/contact':
        setRouteIndex(3);
        break;
      default:
        setRouteIndex(-1);
        break;
    }
  }, [pathname]);

  return (
    <div className="relative">
      <nav className="fixed inset-x-0 z-30 flex items-center gap-5 p-5 bg-white/75 dark:bg-black/75 backdrop-blur-lg dark:shadow-app-bottom shadow-app-bottom-light">
        <div className="font-semibold grow ">
          <div>
            <Link href="/" className="btn">
              STEVEN ELIAS
            </Link>
          </div>
        </div>
        <ul className="relative items-center hidden mx-4 overflow-hidden font-medium sm:flex">
          <span
            className={`absolute bg-sky-300/50 h-full rounded-lg  duration-500 ease-out pointer-events-none w-1/4 ${
              hoverIndex === -1
                ? routeIndex === -1
                  ? '-left-1/4'
                  : routeIndex === 0
                  ? 'left-0'
                  : routeIndex === 1
                  ? 'left-1/4'
                  : routeIndex === 2
                  ? 'left-1/2'
                  : routeIndex === 3
                  ? 'left-3/4'
                  : ''
                : hoverIndex === 0
                ? 'left-0'
                : hoverIndex === 1
                ? 'left-1/4'
                : hoverIndex === 2
                ? 'left-1/2'
                : hoverIndex === 3
                ? 'left-3/4'
                : ''
            } `}
          ></span>

          <Link
            className={`w-20 px-2 py-1 bg-transparent rounded-lg z-50 hover:text-sky-700/80 duration-200 ${
              isAbout && 'z-10 text-sky-700/80'
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
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 hover:text-sky-700/80 duration-200 ${
              isWorks && 'z-10 text-sky-700/80'
            }`}
          >
            <Link href="/works">Works</Link>
          </li>
          <li
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleLeave()}
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 hover:text-sky-700/80 duration-200  ${
              isBlogs && 'z-10 text-sky-700/80'
            }`}
          >
            <Link href="/blogs">Blog</Link>
          </li>
          <li
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleLeave()}
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 hover:text-sky-700/80 duration-200  ${
              isContact && 'z-10 text-sky-700/80'
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div
          role="button"
          onClick={toggleSideMenu}
          className="relative flex flex-col justify-between after:duration-200 after:rounded-sm w-7 h-7 menu-button after:absolute after:inset-0 after:scale-[1.5] after:hover:bg-sky-300/50 group"
        >
          <div
            className={`shadow-app-shadow-light-hover group-hover:border group-hover:border-sky-500 dark:shadow-app-shadow-hover  h-[1px] duration-200 ${
              sideMenuOpen && 'rotate-45 translate-y-[13px] '
            }`}
          />
          <div
            className={`shadow-app-shadow-light-hover dark:shadow-app-shadow-hover group-hover:border group-hover:border-sky-500  h-[1px] duration-200 ${
              sideMenuOpen && 'opacity-0'
            }`}
          />
          <div
            className={`shadow-app-shadow-light-hover dark:shadow-app-shadow-hover group-hover:border group-hover:border-sky-500  h-[1px] duration-200 ${
              sideMenuOpen && '-rotate-45 -translate-y-[13px]'
            }`}
          />
        </div>
      </nav>
      {/* sidebar */}
    </div>
  );
};

export default Navbar;
