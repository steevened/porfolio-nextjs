import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useEffect, useState } from 'react';
import { Skill } from '../../lib/interfaces/api.interface';
import { supabase } from '@/lib/supabase/supabase';
import Image from 'next/image';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden"
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

export const TechSlider = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: skillsResponse, error } = await supabase
          .from('skills')
          .select();
        if (error) throw error;
        // console.log(data);
        setSkills(skillsResponse as Skill[]);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getData();
  }, []);

  const settings = {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // modules: {[Autoplay]}
  };

  return (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2000,
        // disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2.2,
        },
      }}
      modules={[Autoplay]}
      className="w-full shadow-app-shadow bg-app-gray"
    >
      {skills.map((skill) => (
        <SwiperSlide key={skill.id} className="bg-app-gray">
          <div className="w-32 h-32 p-5 bg-app-gray">
            <Image
              src={skill.image_url}
              className="object-contain w-full h-full backdrop-grayscale-[100]"
              alt="tech"
              width={1000}
              height={1000}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
