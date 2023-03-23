import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BtnNavbar from '../atoms/buttons/BtnNavbar';
import HomeIcon, { HomeIconOut } from '../svg/Svg';
import {
  AboutIconOut,
  AboutIcon,
  WorksIconOut,
  WorksIcon,
  ContactIconOut,
  ContactIcon,
} from '../svg/Svg';

const Navbar = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isWorks = pathname === '/works';
  const isContact = pathname === '/contact';

  return (
    <div
      className={`fixed bottom-0 w-full h-[50px] bg-black  shadow-app-top ${className}`}
    >
      <div className="flex h-full justify-center items-center gap-5">
        <Link href="/">
          <Button
            className={`hover:bg-transparent text-gray-300 ${
              isHome
                ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                : ''
            }`}
          >
            {isHome ? <HomeIconOut /> : <HomeIcon />}
          </Button>
        </Link>
        <Link href="/about">
          <Button
            className={` hover:bg-transparent text-gray-300 ${
              isAbout
                ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                : ''
            }`}
          >
            {isAbout ? <AboutIconOut /> : <AboutIcon />}
          </Button>
        </Link>
        <Link href="/works">
          <Button
            className={` hover:bg-transparent text-gray-300 ${
              isWorks
                ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                : ''
            }`}
          >
            {isWorks ? <WorksIconOut /> : <WorksIcon />}
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            className={` hover:bg-transparent text-gray-300 ${
              isContact
                ? 'bg-gradient-to-br from-app-gray to-neutral-800 shadow-app-shadow'
                : ''
            }`}
          >
            {isContact ? <ContactIconOut /> : <ContactIcon />}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
