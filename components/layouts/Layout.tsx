import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Button from '../atoms/buttons/Button';
import HomeIcon, { HomeIconOut } from '../svg/Svg';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="">
      <div>{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
