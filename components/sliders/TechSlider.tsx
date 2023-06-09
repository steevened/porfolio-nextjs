import { FC, ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ChatgptIcon,
  FigmaIcon,
  GitIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgreIcon,
  ReactIcon,
  ReduxIcon,
  SequelizeLogo,
  TailwindIcon,
} from '../svg/Svg';
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
} from '../svg/skills/skillsSvgs';

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
    icon: <TsLogo />,
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
    icon: <TsLogo />,
    name: 'Redux',
  },
  {
    icon: <TsLogo />,
    name: 'Figma',
  },
  {
    icon: <GtIcon />,
    name: 'GIT',
  },
  {
    icon: <TsLogo />,
    name: 'Sequelize',
  },
];

interface TechSliderProps {}

const TechSlider: FC<TechSliderProps> = ({}) => {
  return (
    <Swiper
      className="brandSlider bg-white shadow-2xl shadow-black/10 dark:bg-black dark:shadow-app-shadow"
      slidesPerView={'auto'}
      loop={true}
      modules={[Autoplay]}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove={false}
      breakpoints={{
        300: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        600: {
          slidesPerView: 3.3,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1300: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
        1400: {
          slidesPerView: 9,
          spaceBetween: 50,
        },
      }}
    >
      {skills.map((skill) => (
        <SwiperSlide
          key={skill.name}
          className=" aspect-square flex items-center justify-center p-5"
        >
          {skill.icon}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TechSlider;
