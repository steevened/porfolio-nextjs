import { NextPageWithLayout } from '../../_app';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import { FormEvent, ReactNode, useState, ChangeEvent, useEffect } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import AddCard from '../../../components/atoms/Cards/AddCard';
import { Button } from '@mui/material';
import Input from '@/components/atoms/inputs/Input';
import { db, storage } from '@/lib/firebase/config';
import Image from 'next/image';
import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import CardHovered from '@/components/atoms/Cards/CardHovered';
// import { getDocs } from 'firebase/firestore';
// import { onSnapshot } from 'firebase/firestore/';

interface Skill {
  id?: string;
  name: string;
  image: string;
}

const Skills: NextPageWithLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);

  // get data
  const [data, setData] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // let list: any = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'skills'));
        const fetchedSkills: Skill[] = [];
        querySnapshot.forEach((doc) => {
          const skill = doc.data() as Skill;
          skill.id = doc.id;
          fetchedSkills.push(skill);
        });
        setData(fetchedSkills);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'skills'), (snapshot) => {
  //     const updatedSkills: Skill[] = [];
  //     snapshot.docs.forEach((doc) => {
  //       const skill = doc.data() as Skill;
  //       skill.id = doc.id;
  //       updatedSkills.push(skill);
  //     });
  //     setData(updatedSkills);
  //   });

  //   return unsubscribe;
  // }, [setData]);

  // console.log(data);

  // chatgpt stuff

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();

    // upload the image
    try {
      const imageRef = ref(storage, `images/${file?.name}`);
      await uploadBytes(imageRef, file!);
      const imageUrl = await getDownloadURL(imageRef);

      const skill: Skill = {
        name: name,
        image: imageUrl,
      };

      await addDoc(collection(db, 'skills'), skill);
    } catch (error) {
      console.log(error);
    }

    setName('');
    setFile(null);
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="text-center">
        <h1 className="title-2 md:text-4xl text-gradient">
          Skills and Technologies
        </h1>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {data.map((skill: any) => (
            <CardHovered
              className="relative w-32 h-32 p-5 overflow-hidden group after:absolute after:inset-1 after:hover:bg-black/90 after:z-10 bg-app-gray "
              key={skill.id}
            >
              <Image
                src={skill.image}
                alt="technologie"
                className="object-contain w-full h-full drop-shadow-lg"
                width={1000}
                height={1000}
              />
              <span className="absolute z-20 text-lg font-semibold duration-300 -translate-x-1/2 translate-y-1/2 -bottom-full left-1/2 group-hover:bottom-1/2">
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
