import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Layout from '@/components/layouts/Layout';
import { useTheme } from 'next-themes';
import { ContactCard } from '@/components/molecules/ContactCard';

const Contact: NextPageWithLayout = () => {
  const { theme } = useTheme();

  return (
    <div className=" h-full ">
      <div className="my-10 text-center">
        <h1 className="pb-10 title-1 text-gradient">Contact Me</h1>
        <ContactCard />
      </div>
    </div>
  );
};

Contact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Contact;
