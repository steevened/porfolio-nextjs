import { useRouter } from 'next/router';
import { ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import gsap from 'gsap';
import { UIContext } from '@/context/ui';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <Navbar />

      <main className="max-w-3xl px-5 mx-auto ">{children}</main>
    </div>
  );
};

export default Layout;
