import { UIContext } from '@/context/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  MoonIcon,
  MoonIconOut,
  SunIcon,
  SunIconOut,
  SystemIcon,
  SystemOut,
} from '../svg/Svg';
import { useTheme } from 'next-themes';

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Blogs',
    href: '/blogs',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar: FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [routeIndex, setRouteIndex] = useState<number>(-1);
  const navbarMobileRef = useRef<HTMLDivElement>(null);

  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  console.log(theme);

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

  // animater the navbar

  function animateNavbar() {
    // Get a reference to the second navbar element
    const navbarMobile = navbarMobileRef.current;

    // Define the animation parameters
    const animationParams = {
      duration: 0.5,
      ease: 'power2.inOut',
      y: sideMenuOpen ? 0 : '-100%',
      opacity: sideMenuOpen ? 1 : 0,
    };

    // Animate the navbar
    gsap.to(navbarMobile, animationParams);
  }

  useEffect(() => {
    animateNavbar();
  }, [sideMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      const navbarMobile = navbarMobileRef.current;
      const menuButton = event.target.closest('.menu-button');
      if (navbarMobile && !navbarMobile.contains(event.target) && !menuButton) {
        closeSideMenu();
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="z-50 flex items-center gap-5 p-5 bg-white/75 dark:bg-black/75 backdrop-blur-xl dark:backdrop-blur-lg dark:shadow-app-bottom shadow-app-bottom-light sticky">
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
      <div
        className="absolute inset-x-0 bg-zinc-100 dark:bg-app-gray navbar-mobile sm:max-w-md sm:ml-auto  z-40 shadow-app-bottom-light dark:shadow-app-bottom"
        ref={navbarMobileRef}
      >
        <div className="flex flex-col gap-3 px-5 py-3 ">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className=" py-3 rounded-sm  text-center  w-full hover:bg-zinc-200   dark:hover:bg-black duration-100 shadow-app-shadow-light dark:shadow-app-shadow hover:shadow-app-shadow-hover sm:hidden"
              role="button"
            >
              {item.name}
            </Link>
          ))}
          <div className="rounded-sm  text-center  w-full  duration-100 dark:shadow-app-shadow  flex justify-between shadow-app-shadow-light">
            <button
              onClick={() => setTheme('system')}
              className="flex-1 flex justify-center items-center py-3 hover:shadow-app-shadow-hover dark:hover:bg-black duration-100 hover:bg-zinc-200"
            >
              {theme === 'system' ? <SystemOut /> : <SystemIcon />}
            </button>
            <button
              className="flex-1 flex justify-center items-center py-3 hover:shadow-app-shadow-hover dark:hover:bg-black duration-100 hover:bg-zinc-200"
              onClick={() => setTheme('light')}
            >
              {theme === 'light' ? <SunIconOut /> : <SunIcon />}
            </button>
            <button
              className="flex-1 flex justify-center items-center py-3 hover:shadow-app-shadow-hover dark:hover:bg-black duration-100 hover:bg-zinc-200"
              onClick={() => setTheme('dark')}
            >
              {theme === 'dark' ? <MoonIconOut /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
