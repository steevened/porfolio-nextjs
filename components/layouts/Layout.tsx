import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import gsap from 'gsap';

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="">
      <Navbar />
      <main className="max-w-3xl px-5 mx-auto ">{children}</main>
    </div>
  );
};

export default Layout;
