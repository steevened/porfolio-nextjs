import Link from 'next/link';
import { useRouter } from 'next/router';
import BtnNavbar from '../atoms/buttons/BtnNavbar';
import HomeIcon, { HomeIconOut } from '../svg/Svg';
import { AboutIconOut, AboutIcon } from '../svg/Svg';

const Navbar = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div
      className={`fixed bottom-0 w-full h-[50px] bg-app-gray  shadow-app-top ${className}`}
    >
      <div className="flex h-full">
        <Link href="/">
          <BtnNavbar className="-translate-x-1/2 left-[40%]">
            {pathname === '/' ? <HomeIconOut /> : <HomeIcon />}
          </BtnNavbar>
        </Link>
        <Link href="/about">
          <BtnNavbar className="translate-x-1/2 right-[40%]">
            {pathname === '/about' ? <AboutIconOut /> : <AboutIcon />}
          </BtnNavbar>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
