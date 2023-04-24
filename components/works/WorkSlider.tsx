import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Props {
  project: any;
}

const WorkSlider: FC<Props> = ({ project }) => {
  return (
    <Swiper
      loop
      // spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className=" w-full"
    >
      {project?.images.detailed.map((image: string) => (
        <SwiperSlide className="select-none" key={image}>
          <Image
            src={image}
            alt={project.title}
            width={5000}
            height={5000}
            className=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
