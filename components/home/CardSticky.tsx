import { useContext, useEffect, useRef } from 'react';
import Avatar from '../atoms/Avatar';
import NavbarLinks from '../molecules/NavbarLinks';
import { UIContext } from '@/context/ui';
import { gsap } from 'gsap';
import Link from 'next/link';

const CardSticky = () => {
  const { isNavbarSticky } = useContext(UIContext);

  const cardRef = useRef<HTMLDivElement>(null);

  function animateCard() {
    // Get a reference to the second navbar element
    const card = cardRef.current;

    // Define the animation parameters
    const animationParams = {
      duration: 0.7,
      ease: 'power2.inOut',
      scale: isNavbarSticky ? 1 : 0,
      opacity: isNavbarSticky ? 1 : 0,
    };

    // Animate the navbar
    gsap.to(card, animationParams);
  }

  useEffect(() => {
    animateCard();
  }, [isNavbarSticky]);

  return (
    <div
      ref={cardRef}
      className={`z-30 flex items-center fixed w-10/12 top-10 px-5 py-3 rounded-2xl max-w-xl -translate-x-1/2 left-1/2 bg-white/75 dark:bg-black/75 backdrop-blur-md dark:shadow-app-shadow  shadow-app-shadow-light`}
    >
      <Link href="/" className="grow">
        <Avatar />
      </Link>
      <NavbarLinks />
    </div>
  );
};

export default CardSticky;
