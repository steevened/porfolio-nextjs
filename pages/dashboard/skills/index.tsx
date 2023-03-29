import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import { FormEvent, ReactNode, useState, ChangeEvent, useEffect } from 'react';
import AddCard from '../../../components/atoms/Cards/AddCard';
import { Button } from '@mui/material';
import Input from '@/components/atoms/inputs/Input';

import Image from 'next/image';

import CardHovered from '@/components/atoms/Cards/CardHovered';

import { supabase } from '../../../lib/supabase/supabase';
import { LoadingIcon } from '@/components/svg/Svg';
import { Skill } from '@/lib/interfaces/api.interface';

const Skills: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);

  // get data
  const [data, setData] = useState<Skill[]>([]);

  // handle Image Upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();

    // upload the image
    setIsBtnLoading(true);
    try {
      const { data: fileData, error: fileError } = await supabase.storage
        .from('skills')
        .upload(`skills/${file?.name}${new Date().getTime()}`, file!);

      if (fileError) {
        throw fileError;
      }
      if (fileData) {
        const resp = supabase.storage
          .from('skills')
          .getPublicUrl(fileData.path);
        const publicUrl = resp.data.publicUrl;

        const { data: skillData, error: skillError } = await supabase
          .from('skills')
          .insert({ name, image_url: publicUrl })
          .select();
        if (skillError) {
          throw skillError;
        }

        setData([...skillData, ...data] as Skill[]);
      }
      // console.log(imageUrl);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setFile(null);
    setIsModalOpen(false);
    setIsBtnLoading(false);
  };

  // fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: skillsResponse, error } = await supabase
          .from('skills')
          .select();
        if (error) throw error;
        // console.log(data);
        setData(skillsResponse as Skill[]);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="">
      <div className="text-center">
        <h1 className="title-2 md:text-4xl text-gradient">
          Skills and Technologies
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {data.map((skill: any) => (
            <CardHovered
              className="relative w-32 h-32 p-5 overflow-hidden group after:absolute after:inset-1 after:hover:bg-black/90 after:z-10 bg-app-gray"
              key={skill.id}
            >
              <Image
                src={skill.image_url}
                alt="technologie"
                className="object-contain w-full h-full drop-shadow-lg"
                width={1000}
                height={1000}
              />
              <span className="absolute z-20 text-lg font-semibold duration-300 -translate-x-1/2 translate-y-1/2 -bottom-8 left-1/2 group-hover:bottom-1/2">
                {skill.name}
              </span>
            </CardHovered>
          ))}
          <AddCard onClick={() => setIsModalOpen(true)} />
        </div>
        <div
          onClick={() => setIsModalOpen(false)}
          className={`absolute inset-0 duration-200  ${
            isModalOpen ? 'bg-black/90' : 'bg-none pointer-events-none'
          }`}
        />
        <div
          className={`absolute inset-y-0 duration-700  z-50 w-full max-w-md bg-app-gray shadow-app-left ${
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
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Skills.getLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Skills;
