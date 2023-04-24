import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import { FormEvent, ReactNode, useState, ChangeEvent, useEffect } from 'react';
import AddCard from '../../../components/atoms/Cards/AddCard';
import { Button } from '@mui/material';
import Input from '@/components/atoms/inputs/Input';
import Image from 'next/image';
// import CardHovered from '@/components/atoms/Cards/CardHovered';
// import { supabase } from '../../../lib/supabase/supabase';
import { LoadingIcon } from '@/components/svg/Svg';
import { Skill } from '@/lib/interfaces/api.interface';
import SkillsCards from '@/components/skills/SkillsCards';
// import usePortfolioMutation from '../../../lib/hooks/useMutation';

const Skills: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

  // get data
  const [data, setData] = useState<Skill[]>([]);

  // const mutatePortfolio = usePortfolioMutation('skills', data);

  // handle Image Upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();

    setIsBtnLoading(true);
    // upload the image
    // try {
    //   const { data: fileData, error: fileError } = await supabase.storage
    //     .from('skills')
    //     .upload(`skills/${file?.name}${new Date().getTime()}`, file!);

    //   if (fileError) {
    //     throw fileError;
    //   }
    //   if (fileData) {
    //     const resp = supabase.storage
    //       .from('skills')
    //       .getPublicUrl(fileData.path);
    //     const publicUrl = resp.data.publicUrl;

    //     setData([...data, { name, image_url: publicUrl }]);

    //     mutatePortfolio.mutate();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    setName('');
    setFile(null);
    setIsModalOpen(false);
    setIsBtnLoading(false);
  };

  return (
    <div className="">
      {/* <div className="text-center">
        <h1 className="title-2 md:text-4xl text-gradient">
          Skills and Technologies
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <SkillsCards />
          <AddCard onClick={() => setIsModalOpen(true)} />
        </div>
        <div
          onClick={() => setIsModalOpen(false)}
          className={`absolute inset-0 duration-200  ${
            isModalOpen ? 'bg-black/90' : 'bg-none pointer-events-none'
          }`}
        />
        <div
          className={`fixed top-0 h-screen duration-700  z-50 w-full max-w-md bg-app-gray shadow-app-left ${
            isModalOpen ? 'right-0' : '-right-full'
          }`}
        >
          <form onSubmit={handleSumbit} className="flex flex-col h-full ">
            <div className="grow">
              <div className="py-2 shadow-app-bottom">
                <h3 className="text-xl font-semibold text-gradient">
                  Add a technologie
                </h3>
              </div>
              <div className="flex flex-col mx-5 mt-10">
                <label className="block pb-1 text-sm font-semibold text-start ">
                  <span>Name</span>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label
                  htmlFor="file"
                  className="object-cover w-32 h-32 space-y-2 text-sm font-semibold text-start"
                >
                  <span className="mb-10">Image</span>
                  {file ? (
                    <Image
                      width={100}
                      height={100}
                      src={URL.createObjectURL(file)}
                      alt="skill"
                      className="w-full h-full "
                    />
                  ) : (
                    <AddCard />
                  )}
                  <input
                    accept="image/*"
                    type="file"
                    id="file"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>
            <div className="flex py-4 shadow-app-top">
              <div className="px-4 space-x-2 grow text-end">
                <Button
                  disabled={isBtnLoading}
                  onClick={() => setIsModalOpen(false)}
                  className="text-white bg-app-gray shadow-app-shadow"
                >
                  Cancel
                </Button>
                <Button
                  disabled={isBtnLoading}
                  startIcon={isBtnLoading ? <LoadingIcon /> : ''}
                  type="submit"
                  className={`text-white bg-green-700 disabled:bg-gray-600 shadow-app-shadow`}
                >
                  {isBtnLoading ? 'Saving' : 'Save'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};

Skills.getLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Skills;
