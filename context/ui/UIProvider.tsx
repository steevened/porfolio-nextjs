import { FC, PropsWithChildren, useReducer } from 'react';
import { uiReducer, UIContext } from './';

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const toggleSideMenu = () => {
    dispatch({ type: 'UI - Toggle Sidebar' });
  };

  return (
    <UIContext.Provider
      value={{
        sideMenuOpen: state.sideMenuOpen,
        openSideMenu,
        closeSideMenu,
        toggleSideMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
