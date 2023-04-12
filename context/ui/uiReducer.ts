import { UIState } from './';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Toggle Sidebar' }
  | { type: 'UI - Set Navbar Sticky'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sideMenuOpen: true,
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sideMenuOpen: false,
      };
    case 'UI - Toggle Sidebar':
      return {
        ...state,
        sideMenuOpen: !state.sideMenuOpen,
      };
    case 'UI - Set Navbar Sticky':
      return {
        ...state,
        isNavbarSticky: action.payload,
      };
    default:
      return state;
  }
};
