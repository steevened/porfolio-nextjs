import { UIContext } from '@/context/ui';
import Link from 'next/link';
import { FC, useContext, useEffect, useRef } from 'react';
import NavbarLinks from '../molecules/NavbarLinks';
import { gsap } from 'gsap';

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
    <header
      ref={navbarRef}
      className={`fixed inset-x-0  z-30  px-5 py-4 bg-white/75 dark:bg-black/75 backdrop-blur-md dark:shadow-app-bottom shadow-app-bottom-light shadow-black/10 duration-500 md:px-10 lg:px-20`}
    >
      <nav className="flex items-center max-w-4xl gap-5 mx-auto ">
        <div className="font-semibold grow">
          <Link
            href="/"
            className="duration-100 md:text-lg whitespace-nowrap hover:text-purple-500 dark:hover:text-purple-300"
          >
            STEVEN ELIAS
          </Link>
        </div>
        <NavbarLinks />
      </nav>
    </header>
  );
};

export default Navbar;
