import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { uiReducer, UIContext } from './';

export interface UIState {
  sideMenuOpen: boolean;
  isNavbarSticky: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isNavbarSticky: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
    });
  }, []);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const toggleSideMenu = () => {
    dispatch({ type: 'UI - Toggle Sidebar' });
  };

  const setNavbarSticky = (isSticky: boolean) => {
    dispatch({ type: 'UI - Set Navbar Sticky', payload: isSticky });
  };

  return (
    <UIContext.Provider
      value={{
        sideMenuOpen: state.sideMenuOpen,
        isNavbarSticky: state.isNavbarSticky,
        openSideMenu,
        closeSideMenu,
        toggleSideMenu,
        setNavbarSticky,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
