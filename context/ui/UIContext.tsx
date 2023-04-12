import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  toggleSideMenu: () => void;
  isNavbarSticky: boolean;
  setNavbarSticky: (isSticky: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
