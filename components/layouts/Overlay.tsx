import { UIContext } from '@/context/ui';
import { gsap } from 'gsap';
import { useContext, useEffect, useRef } from 'react';

const Overlay = () => {
  const { closeSideMenu, sideMenuOpen } = useContext(UIContext);

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlay = () => {
    const overlay = overlayRef.current;

    const animationParams = {
      duration: 0.5,
      ease: 'power2.inOut',
      opacity: sideMenuOpen ? 1 : 0,
    };
    gsap.to(overlay, animationParams);
  };

  useEffect(() => {
    handleOverlay();
  }, [sideMenuOpen]);

  return (
    <div
      role="button"
      onClick={closeSideMenu}
      tabIndex={0}
      ref={overlayRef}
      aria-label="Close side menu"
      className={`fixed inset-0 z-40 bg-black/75 ${
        sideMenuOpen ? '  backdrop-blur' : 'pointer-events-none'
      }`}
    />
  );
};

export default Overlay;
