import { useContext, useEffect, useRef } from 'react';
import Avatar from '../atoms/Avatar';
import NavbarLinks from '../molecules/NavbarLinks';
import { UIContext } from '@/context/ui';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Brand } from '../atoms/Brand';

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
      className={`z-30 flex items-center justify-between fixed w-10/12 top-3 px-5 py-3 rounded-2xl max-w-xl -translate-x-1/2 left-1/2 bg-white/80 dark:bg-black/80 backdrop-blur-sm dark:shadow-app-shadow  shadow-app-shadow-light`}
    >
      <div className="">
        <Avatar />
      </div>

      <div className="md:hidden">
        <Brand />
      </div>

      <NavbarLinks />
    </div>
  );
};

export default CardSticky;
