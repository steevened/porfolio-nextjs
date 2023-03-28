import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import { FormEvent, ReactNode, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import AddCard from '../../../components/atoms/Cards/AddCard';
import { Button } from '@mui/material';
import Input from '@/components/atoms/inputs/Input';
import { storage } from '@/lib/firebase/config';

const Skills: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [skillName, setSkillName] = useState<string>('');
  const [skillImage, setSkillImage] = useState<File | null>(null);

  const handleAddSkill = (e: FormEvent) => {
    e.preventDefault();

    const storageRef = ref(storage, `skills/${skillImage?.name}`);
    uploadBytes(storageRef, skillImage!).then(
      (snapshot) => {
        getDownloadURL(
          (snapshot.ref as any).then(
            (url: any) => {
              saveSkill({
                name,
                image: url,
              });
            },
            (error: any) => {
              console.log(error);
              saveSkill({
                name,
                image: null,
              });
            }
          )
        );
      },
      (error: any) => {
        console.log(error);
        saveSkill({
          name,
          image: null,
        });
      }
    );
  };

  function saveSkill(portfolio: any) {
    console.log(portfolio);
  }

  console.log(skillName, skillImage);

  return (
    <div className="">
      <div className="text-center">
        <h1 className="title-2 md:text-4xl text-gradient">
          Skills and Technologies
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <AddCard onClick={() => setIsModalOpen(true)} />
          {/* <AddCard onClick={() => console.log('click')} /> */}
          {/* <AddCard onClick={() => console.log('click')} /> */}
          {/* <AddCard onClick={() => console.log('click')} /> */}
        </div>
        <div
          onClick={() => setIsModalOpen(false)}
          className={`absolute inset-0 duration-200  ${
            isModalOpen ? 'bg-black/90' : 'bg-none pointer-events-none'
          }`}
        />
        <div
          className={`absolute inset-y-0 duration-700   w-full max-w-md bg-app-gray shadow-app-left ${
            isModalOpen ? 'right-0' : '-right-full'
          }`}
        >
          <form onSubmit={handleAddSkill} className="flex flex-col h-full ">
            <div className="grow">
              <div className="py-2 shadow-app-bottom">
                <h3 className="text-xl font-semibold text-gradient">
                  Add a technologie
                </h3>
              </div>
              <div className="mx-5 mt-10 flex flex-col">
                <label className="block text-start pb-1 text-sm font-semibold ">
                  <span>Name</span>
                  <Input
                    onChange={(e) => setSkillName(e.target.value)}
                    required
                  />
                </label>
                <label
                  htmlFor="file"
                  className="w-max text-start space-y-2 text-sm font-semibold"
                >
                  <span className="mb-10">Image</span>
                  <AddCard />
                  <input
                    accept="image/*"
                    type="file"
                    id="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) setSkillImage(e.target.files[0]);
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="flex py-4 shadow-app-top">
              <div className="px-4 space-x-2 grow text-end">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white bg-app-gray shadow-app-shadow"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="text-white bg-green-700 shadow-app-shadow"
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
