import { useRouter } from 'next/router';
import { useEffect, ReactNode, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { SkillIcon } from '@/components/svg/Svg';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { ProjectIcon, BlogIcon } from '../../components/svg/Svg';
import Link from 'next/link';
import { supabase } from '../../lib/supabase/supabase';

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      // console.log(user);
      if (user.data.user?.id) {
        const userID = user.data.user?.id;
        setUserId(userID);
        setIsAuth(true);
      } else {
        router.push('/auth/login');
      }
    };
    getUser();
  }, [router]);

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
