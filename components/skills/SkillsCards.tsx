import { Skill } from '@/lib/interfaces/api.interface';
import Image from 'next/image';
import CardHovered from '../atoms/Cards/CardHovered';
import SkillsContainer from './SkillsContainer';

const SkillsCards = () => {
  // const { data: skills, isLoading, isError } = usePortfolioQuery('skills');
  return (
    <SkillsContainer>
      {/* {skills?.map((skill: Skill) => (
        <CardHovered
          key={skill.id}
          className="relative w-32 h-32 p-5 overflow-hidden group after:absolute after:inset-[2px] after:hover:bg-black/90 after:z-10 bg-app-gray"
        >
          <Image
            src={skill.image_url}
            className="object-contain w-full h-full"
            alt="tech"
            width={1000}
            height={1000}
          />
          <span className="absolute z-20 text-lg font-semibold text-center duration-300 -translate-x-1/2 translate-y-1/2 -bottom-8 left-1/2 group-hover:bottom-1/2">
            {skill.name}
          </span>
        </CardHovered>
      ))} */}
    </SkillsContainer>
  );
};

export default SkillsCards;
