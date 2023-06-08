import { UIContext } from '@/context/ui';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {
  MenuIcon,
  MoonIcon,
  MoonIconOut,
  SunIcon,
  SunIconOut,
  SystemIcon,
  SystemOut,
} from '../svg/Svg';
import { useTheme } from 'next-themes';

const NavbarLinks = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [routeIndex, setRouteIndex] = useState<number>(-1);

  const { toggleSideMenu } = useContext(UIContext);
  const { theme, setTheme } = useTheme();

  const currentTheme = () => {
    switch (theme) {
      case 'light':
        return <SunIconOut />;
      case 'dark':
        return <MoonIconOut />;
      default:
        return <SystemOut />;
    }
  };

  const router = useRouter();
  const { pathname } = router;

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
      case '/works/[name]':
        setRouteIndex(1);
        break;
      case '/blogs':
        setRouteIndex(2);
        break;
      case '/blogs/[id]':
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

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works' || pathname === '/works/[name]';
  const isContact = pathname === '/contact';
  const isBlogs = pathname.startsWith('/blogs');

  return (
    <>
      <ul className="relative items-center hidden font-medium md:flex ">
        <li
          className={`absolute bg-purple-100 dark:bg-purple-500/40  h-full rounded-md    duration-200 ease-in-out z-0 pointer-events-none w-1/4 ${
            hoverIndex === -1
              ? routeIndex === -1
                ? 'hidden'
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
        />

        <li
          className="w-1/4 "
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleLeave()}
        >
          <Link href="/about">
            <Button
              variant="text"
              className={`w-full text-center hover:bg-transparent bg-transparent rounded-md  sticky z-50 text-gray-900 dark:text-gray-400 hover:text-purple-700 duration-200 ${
                isAbout && 'text-purple-500 hover:text-purple-700'
              }`}
            >
              About
            </Button>
          </Link>
        </li>

        <li
          className="w-1/4"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleLeave()}
        >
          <Link href="/works">
            <Button
              variant="text"
              className={`w-full text-center hover:bg-transparent bg-transparent rounded-md  sticky z-50 text-gray-900 dark:text-gray-400 hover:text-purple-700 duration-200 ${
                isWorks && 'text-purple-500 hover:text-purple-700  '
              }`}
            >
              Works
            </Button>
          </Link>
        </li>
        <li
          className="w-1/4 "
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleLeave()}
        >
          <Link href="/blogs" className="">
            <Button
              variant="text"
              className={`w-full text-center hover:bg-transparent bg-transparent rounded-md  sticky z-50 text-gray-900 dark:text-gray-400 hover:text-purple-700 duration-200  ${
                isBlogs && 'text-purple-500 hover:text-purple-700  '
              }`}
            >
              Blog
            </Button>
          </Link>
        </li>
        <li
          className="w-1/4"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleLeave()}
        >
          <Link href="/contact">
            <Button
              variant="text"
              className={`w-full text-center hover:bg-transparent bg-transparent rounded-md  sticky z-50 text-gray-900 dark:text-gray-400 hover:text-purple-700 duration-200 ${
                isContact && 'text-purple-500 hover:text-purple-700  '
              }`}
            >
              Contact
            </Button>
          </Link>
        </li>
      </ul>
      <div>
        <div className="hidden md:block ">
          <Menu>
            <MenuHandler>
              <Button
                variant="text"
                size="sm"
                color="gray"
                className="p-2 text-purple-500 aspect-square"
              >
                {currentTheme()}
              </Button>
            </MenuHandler>
            <MenuList className="p-1 min-w-min dark:bg-app-gray dark:border-none dark:shadow-app-shadow dark:text-blue-gray-200">
              <MenuItem
                role="button"
                onClick={() => {
                  setTheme('system');
                }}
                className={`flex items-center gap-2 w-28 ${
                  theme === 'system' && 'font-semibold bg-blue-gray-50'
                }`}
              >
                {theme === 'system' ? <SystemOut /> : <SystemIcon />}
                System
              </MenuItem>
              <MenuItem
                role="button"
                onClick={() => {
                  setTheme('dark');
                }}
                className={`flex items-center gap-2 w-28 ${
                  theme === 'dark' && 'font-semibold bg-blue-gray-900'
                }`}
              >
                {theme === 'dark' ? <MoonIconOut /> : <MoonIcon />}
                Dark
              </MenuItem>
              <MenuItem
                role="button"
                onClick={() => {
                  setTheme('light');
                }}
                className={`flex items-center gap-2 w-28 ${
                  theme === 'light' && 'font-semibold bg-blue-gray-50'
                }`}
              >
                {theme === 'light' ? <SunIconOut /> : <SunIcon />}
                Light
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="md:hidden">
          <Button
            size="sm"
            color="gray"
            variant="text"
            className="p-1 text-inherit"
            onClick={toggleSideMenu}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavbarLinks;
