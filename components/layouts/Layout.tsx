import { ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import { UIContext } from '@/context/ui';
import Drawer from './Drawer';
import Overlay from './Overlay';
import CardSticky from '../home/CardSticky';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  const { sideMenuOpen } = useContext(UIContext);
  return (
    <div className="overflow-x-hidden ">
      <Drawer />
      <Navbar />

      <Overlay />
      <CardSticky />

      <main
        className={`max-w-3xl px-5 mx-auto duration-500 pt-24  ${
          sideMenuOpen && 'translate-x-5'
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
