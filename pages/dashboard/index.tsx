import React from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';
import { useEffect, ReactNode } from 'react';
import { NextPageWithLayout } from '../_app';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import CardHovered from '../../components/atoms/Cards/CardHovered';
import { SkillIcon } from '@/components/svg/Svg';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { ProjectIcon, BlogIcon } from '../../components/svg/Svg';
import Link from 'next/link';

const Dashboard: NextPageWithLayout = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/auth/login');
  }, [user, router]);

  // console.log(user);
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 place-items-center mt-11 lg:grid-cols-3">
        <Link href="/dashboard/skills">
          <DashboardCard title="Skills and Technologies">
            <SkillIcon />
          </DashboardCard>
        </Link>

        <Link href="/dashboard/projects">
          <DashboardCard title="Projects">
            <ProjectIcon />
          </DashboardCard>
        </Link>

        <Link href="/dashboard/blogs">
          <DashboardCard title="Blogs">
            <BlogIcon />
          </DashboardCard>
        </Link>
      </div>
    </div>
  );
};

Dashboard.getLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
