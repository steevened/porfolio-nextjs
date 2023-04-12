import { ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import { UIContext } from '@/context/ui';
import Drawer from './Drawer';
import Overlay from './Overlay';

const Layout = ({ children }: { children: ReactNode }) => {
  const { sideMenuOpen } = useContext(UIContext);
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Drawer />
      <Overlay />

      <main
        className={`max-w-3xl px-5 mx-auto duration-500 ${
          sideMenuOpen && 'translate-x-5'
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
