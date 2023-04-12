import { UIContext } from '@/context/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
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
      <nav className="sticky z-30 flex items-center gap-5 p-5 bg-white/75 dark:bg-black/75 backdrop-blur-xl dark:backdrop-blur-lg dark:shadow-app-bottom shadow-app-bottom-light">
        <Link href="/" className=" grow">
          <p className="font-semibold">STEVEN ELIAS</p>
        </Link>
        <ul className="relative items-center hidden mx-4 overflow-hidden sm:flex">
          <span
            className={`absolute h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-zinc-900 dark:to-neutral-800 rounded-lg transition-all duration-700 ease-out pointer-events-none w-1/4 ${
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
            className={`w-20 px-2 py-1 bg-transparent rounded-lg z-50 ${
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
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
              isWorks &&
              'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
            }`}
          >
            <Link href="/works">Works</Link>
          </li>
          <li
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleLeave()}
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
              isBlogs &&
              'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
            }`}
          >
            <Link href="/blogs">Blog</Link>
          </li>
          <li
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleLeave()}
            className={`w-20 px-2 py-1 rounded-lg bg-transparent z-50 ${
              isContact &&
              'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow z-10'
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div
          role="button"
          onClick={toggleSideMenu}
          className="flex flex-col justify-between w-7 h-7 menu-button "
        >
          <div
            className={`shadow-app-shadow-light-hover dark:shadow-app-shadow-hover  h-[1px] duration-200 ${
              sideMenuOpen && 'rotate-45 translate-y-[13px] '
            }`}
          />
          <div
            className={`shadow-app-shadow-light-hover dark:shadow-app-shadow-hover  h-[1px] duration-200 ${
              sideMenuOpen && 'opacity-0'
            }`}
          />
          <div
            className={`shadow-app-shadow-light-hover dark:shadow-app-shadow-hover  h-[1px] duration-200 ${
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
