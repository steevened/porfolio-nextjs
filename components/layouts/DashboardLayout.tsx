import { useState } from 'react';
import { AboutIcon, ArrowLeftIcon } from '../svg/Svg';
import { ReactNode } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
// import { auth } from '@/lib/firebase/config';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase/supabase';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleLogOut = () => {
  //   supabase.auth.signOut();
  //   handleClose();
  //   router.push('/auth/login');
  // };

  const router = useRouter();

  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-center py-5 bg-black shadow-app-bottom">
        <div className="text-center">
          <h2 className="text-xl font-bold md:">Dashboard</h2>
        </div>
        <div className="absolute left-2">
          <Button onClick={() => router.back()} className="text-white ">
            <span className="rotate-180">
              <ArrowLeftIcon />
            </span>
          </Button>
        </div>
        <div className="absolute right-2">
          <Button
            className="text-white"
            aria-controls={open ? 'basic-menu' : undefined}
            id="basic-button"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <AboutIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* <MenuItem onClick={handleLogOut}>Logout</MenuItem> */}
          </Menu>
        </div>
      </div>
      <main className="h-full max-w-4xl min-h-screen py-24 mx-5 md:mx-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
