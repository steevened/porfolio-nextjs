import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import gsap from 'gsap';
import { SwitchTransition, Transition } from 'react-transition-group';

const onPageEnter = (node: HTMLElement) => {
  gsap.fromTo(
    node,
    {
      y: 50,
      autoAlpha: 0,
      ease: 'power3',
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3',
    }
  );
};

const onPageExit = (node: HTMLElement) => {
  gsap.fromTo(
    node,
    {
      y: 0,
      autoAlpha: 1,
      ease: 'power3.out',
    },
    {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'power3.out',
    }
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="">
      <SwitchTransition>
        <Transition
          key={pathname}
          timeout={500}
          in={true}
          onEnter={onPageEnter}
          onExit={onPageExit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <main className="mb-20">{children}</main>
        </Transition>
      </SwitchTransition>
      <Navbar />
    </div>
  );
};

export default Layout;
