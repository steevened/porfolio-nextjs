import { UIContext } from '@/context/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Fragment, useContext, useEffect, useRef, useState } from 'react';
import Drawer from './Drawer';
import NavbarLinks from '../molecules/NavbarLinks';
import { gsap } from 'gsap';
import { Button } from '@material-tailwind/react';

const Navbar: FC = () => {
  const { isNavbarSticky } = useContext(UIContext);

  const navbarRef = useRef<HTMLDivElement>(null);

  function animateNavbar() {
    // Get a reference to the second navbar element
    const navbar = navbarRef.current;

    // Define the animation parameters
    const animationParams = {
      duration: 0.1,
      ease: 'power2.inOut',
      y: isNavbarSticky ? -100 : 0,
      opacity: isNavbarSticky ? 0 : 1,
    };

    // Animate the navbar
    gsap.to(navbar, animationParams);
  }

  useEffect(() => {
    animateNavbar();
  }, [isNavbarSticky]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed inset-x-0 z-30 flex items-center gap-5 p-5 bg-white/75 dark:bg-black/75 backdrop-blur-md dark:shadow-app-bottom shadow-app-bottom-light duration-500 `}
    >
      <div className="font-semibold grow">
        <Link href="/" className="">
          <Button
            variant="text"
            className="text-sm md:text-lg whitespace-nowrap hover:bg-sky-300/50 hover:text-sky-700/80 dark:hover:bg-sky-700/50 dark:hover:text-sky-300/80"
          >
            STEVEN ELIAS
          </Button>
        </Link>
      </div>
      <NavbarLinks />
    </nav>
  );
};

export default Navbar;
