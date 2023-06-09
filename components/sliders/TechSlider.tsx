import { FC, ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';
import {
  GtIcon,
  MgIcon,
  NdIcon,
  NxIcon,
  PgIcon,
  RjsIcon,
  TsLogo,
  TwLogo,
  ReduxIcon,
  FigmaIcon,
  GptIcon,
  SequelIcon,
  NestIcon,
} from '../svg/skills/skillsSvgs';
import Image from 'next/image';

interface Skill {
  icon: ReactNode;
  name: string;
}

const skills: Skill[] = [
  {
    icon: <NxIcon />,
    name: 'Next.js',
  },
  {
    icon: <TsLogo />,
    name: 'TypeScript',
  },
  {
    icon: <TwLogo />,
    name: 'TailwindCSS',
  },
  {
    icon: <GptIcon />,
    name: 'ChatGPT',
  },

  {
    icon: <RjsIcon />,
    name: 'React JS',
  },
  {
    icon: <MgIcon />,
    name: 'MongoDB',
  },
  {
    icon: <NdIcon />,
    name: 'Node JS',
  },
  {
    icon: <PgIcon />,
    name: 'PostgreSQL',
  },
  {
    icon: <ReduxIcon />,
    name: 'Redux',
  },
  {
    icon: <FigmaIcon />,
    name: 'Figma',
  },
  {
    icon: <GtIcon />,
    name: 'GIT',
  },
  {
    icon: <SequelIcon />,
    name: 'Sequelize',
  },
  {
    icon: <NestIcon />,
    name: 'NestJS',
  },
];

interface TechSliderProps {}

const TechSlider: FC<TechSliderProps> = ({}) => {
  return (
    <div className="pt-20">
      <div className="w-screen  left-[calc(-50vw_+_50%)] relative ">
        <Swiper
          className="brandSlider bg-white shadow-2xl shadow-black/10 dark:bg-black dark:shadow-app-shadow border-y border-gray-700/20 dark:border-none"
          slidesPerView={'auto'}
          loop={true}
          modules={[Autoplay]}
          speed={3000}
          autoplay={{
            delay: 0,
            reverseDirection: true,
          }}
          allowTouchMove={false}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            900: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
            // 1400: {
            //   slidesPerView: 9,
            //   spaceBetween: 50,
            // },
          }}
        >
          <>
            {skills.map((skill) => (
              <SwiperSlide
                key={skill.name}
                id={skill.name}
                className=" w-full aspect-square flex items-center justify-center p-5"
              >
                {skill.icon}
                <span className="text-center mt-3 font-semibold text-gray-700 dark:text-gray-500 text-xs sm:text-lg  md:text-2xl w-full block ">
                  {skill.name}
                </span>
              </SwiperSlide>
            ))}
          </>
          <SwiperSlide
            id={'linux'}
            className=" aspect-square flex items-center justify-center p-5"
          >
            <Image
              src={'/skills/linux.png'}
              width={5000}
              height={5000}
              className="w-full h-full object-contain"
              alt="linux logo"
            />
            <span className="text-center mt-3 font-semibold text-gray-700 text-xs md:text-2xl sm:text-lg w-full block dark:text-gray-500">
              Linux
            </span>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TechSlider;
