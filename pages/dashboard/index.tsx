import React from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';

const Dashboard = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/auth/login');
  }, [user, router]);

  // console.log(user);
  return <h1>Only logged in users can view this page</h1>;
};

export default Dashboard;
