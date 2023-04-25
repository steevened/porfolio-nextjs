import { ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import { UIContext } from '@/context/ui';
import Drawer from './Drawer';
import Overlay from './Overlay';
import CardSticky from '../home/CardSticky';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children }: { children: ReactNode }) => {
  const { sideMenuOpen } = useContext(UIContext);
  return (
    <>
      <Head>
        <title>Steven Elias - Personal site</title>
        <meta
          name="description"
          content="Personal site of Steven Elias - Steevened"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden ">
        <Drawer />
        <Navbar />

        <Overlay />
        <CardSticky />

        <main
          className={`max-w-4xl px-5 mx-auto duration-500 pt-24  ${
            sideMenuOpen && 'translate-x-5'
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
