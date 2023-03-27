import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Skill {
  name: string;
  id: number;
}

const skills: Skill[] = [
  {
    name: 'HTML',
    id: 1,
  },
  {
    name: 'CSS',
    id: 2,
  },
  {
    name: 'JavaScript',
    id: 3,
  },
  {
    name: 'TypeScript',
    id: 4,
  },
  {
    name: 'React',
    id: 5,
  },
  {
    name: 'Next.js',
    id: 6,
  },
  {
    name: 'Node.js',
    id: 7,
  },
  {
    name: 'Express.js',
    id: 8,
  },
  {
    name: 'MongoDB',
    id: 9,
  },
  {
    name: 'PostgreSQL',
    id: 10,
  },
];

export const TechSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {skills.map((skill) => (
        <div key={skill.id} className="border">
          <p>{skill.name}</p>
        </div>
      ))}
    </Slider>
  );
};
