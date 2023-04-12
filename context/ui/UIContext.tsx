import { createContext } from 'react';

interface ContextProps {
  sideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  toggleSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
