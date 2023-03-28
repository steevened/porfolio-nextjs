import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import { FormEvent, ReactNode, useState, useEffect } from 'react';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from 'firebase/storage';
import AddCard from '../../../components/atoms/Cards/AddCard';
import { Button } from '@mui/material';
import Input from '@/components/atoms/inputs/Input';
import { db, storage } from '@/lib/firebase/config';
import Image from 'next/image';
import { doc, setDoc } from 'firebase/firestore/lite';

const Skills: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [skillName, setSkillName] = useState<string>('');
  const [skillImage, setSkillImage] = useState<File | null>(null);
  const [data, setData] = useState<any>(null);

  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    if (!skillImage) return;
    const imgName = new Date().getTime() + skillImage?.name;

    const uploadFile = () => {
      const storageRef = ref(storage, skillImage.name);

      const uploadFile = uploadBytesResumable(storageRef, skillImage);

      uploadFile.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is' + progress + '% done');
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadFile.snapshot.ref).then((downloadUrl) => {
            setData({ skillName, skillImage: downloadUrl });
          });
        }
      );
    };
    skillImage && uploadFile();
  }, [skillImage]);

  async function handleAddSkill(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await setDoc(doc(db, 'skills'), data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

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
              <div className="flex flex-col mx-5 mt-10">
                <label className="block pb-1 text-sm font-semibold text-start ">
                  <span>Name</span>
                  <Input
                    onChange={(e) => setSkillName(e.target.value)}
                    required
                  />
                </label>
                <label
                  htmlFor="file"
                  className="object-cover w-32 h-32 space-y-2 text-sm font-semibold text-start"
                >
                  <span className="mb-10">Image</span>
                  {skillImage ? (
                    <Image
                      width={100}
                      height={100}
                      src={URL.createObjectURL(skillImage)}
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
