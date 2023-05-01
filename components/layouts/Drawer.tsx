import { UIContext } from '@/context/ui';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { FC, PropsWithChildren, useContext, useEffect, useRef } from 'react';
import {
  MoonIcon,
  MoonIconOut,
  SunIcon,
  SunIconOut,
  SystemIcon,
  SystemOut,
} from '../svg/Svg';
import { gsap } from 'gsap';
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';

interface Props {}

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

const Drawer: FC<PropsWithChildren> = ({ children }) => {
  const navbarMobileRef = useRef<HTMLDivElement>(null);
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  function animateNavbar() {
    // Get a reference to the second navbar element
    const navbarMobile = navbarMobileRef.current;

    // Define the animation parameters
    const animationParams = {
      duration: 0.5,
      ease: 'power2.inOut',
      x: sideMenuOpen ? 0 : '-100%',
      opacity: sideMenuOpen ? 1 : 0,
    };

    // Animate the navbar
    gsap.to(navbarMobile, animationParams);
  }

  useEffect(() => {
    animateNavbar();
  }, [sideMenuOpen]);

  return (
    <div
      className="fixed inset-y-0 z-50 bg-blue-gray-100 dark:bg-app-gray shadow-app-bottom-light dark:shadow-app-bottom w-80 flex items-center justify-center"
      ref={navbarMobileRef}
    >
      <div className="flex flex-col gap-3 px-5 py-3  w-full">
        {menuItems.map((item, i) => (
          <Button
            key={i}
            onClick={() => {
              router.push(item.href);
              closeSideMenu();
            }}
            variant="text"
            fullWidth
            className="rounded-sm shadow-app-shadow-light dark:shadow-app-shadow"
          >
            {item.name}
          </Button>
        ))}
        <div className="flex justify-between w-full  text-center duration-100 rounded-sm dark:shadow-app-shadow shadow-app-shadow-light ">
          <Button
            variant="text"
            onClick={() => setTheme('system')}
            className={`flex items-center justify-center flex-1 rounded-sm `}
          >
            {theme === 'system' ? <SystemOut /> : <SystemIcon />}
          </Button>
          <Button
            variant="text"
            className="flex items-center justify-center flex-1  rounded-sm"
            onClick={() => setTheme('light')}
          >
            {theme === 'light' ? <SunIconOut /> : <SunIcon />}
          </Button>
          <Button
            variant="text"
            className="flex items-center justify-center flex-1  rounded-sm"
            onClick={() => setTheme('dark')}
          >
            {theme === 'dark' ? <MoonIconOut /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
