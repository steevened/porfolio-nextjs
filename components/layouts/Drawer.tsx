import { UIContext } from '@/context/ui';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  MoonIcon,
  MoonIconOut,
  SunIcon,
  SunIconOut,
  SystemIcon,
  SystemOut,
} from '../svg/Svg';
import { gsap } from 'gsap';

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
  const { sideMenuOpen } = useContext(UIContext);
  const { theme, setTheme } = useTheme();

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
      className="fixed inset-y-0 z-50 bg-zinc-100 dark:bg-app-gray shadow-app-bottom-light dark:shadow-app-bottom w-80"
      ref={navbarMobileRef}
    >
      <div className="flex flex-col gap-3 px-5 py-3 ">
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="w-full py-3 text-center duration-100 rounded-sm hover:bg-zinc-200 dark:hover:bg-black shadow-app-shadow-light dark:shadow-app-shadow hover:shadow-app-shadow-hover sm:hidden"
            role="button"
          >
            {item.name}
          </Link>
        ))}
        <div className="flex justify-between w-full text-center duration-100 rounded-sm dark:shadow-app-shadow shadow-app-shadow-light ">
          <button
            onClick={() => setTheme('system')}
            className="flex items-center justify-center flex-1 btn"
          >
            {theme === 'system' ? <SystemOut /> : <SystemIcon />}
          </button>
          <button
            className="flex items-center justify-center flex-1 btn"
            onClick={() => setTheme('light')}
          >
            {theme === 'light' ? <SunIconOut /> : <SunIcon />}
          </button>
          <button
            className="flex items-center justify-center flex-1 btn"
            onClick={() => setTheme('dark')}
          >
            {theme === 'dark' ? <MoonIconOut /> : <MoonIcon />}
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button className="btn">
            <a href="https://www.linkedin.com/in/steevened/" target="_blank">
              <LinkedinLogo />
            </a>
          </button>

          <button className="btn">
            <a href="https://github.com/steevened" target="_blank">
              <GithubLogo />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
