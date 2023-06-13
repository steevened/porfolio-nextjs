import {
  MgIcon,
  NdIcon,
  NxIcon,
  TsLogo,
  TwLogo,
} from '@/components/svg/skills/skillsSvgs';
import { ReactNode } from 'react';

interface Stack {
  name: string;
  icon: ReactNode;
}

export interface Project {
  imageUrl: string;
  title: string;
  slug: string;
  description: string;
  private?: boolean;
  building?: boolean;
  images?: string[];
  stack?: Stack[];
  demo?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    imageUrl: '/projects/academlo.png',
    slug: 'academlo-landing-page',
    title: 'Academlo Landing Page',
    description: 'Academlo Bootcamp official landing page.',
    private: true,
    demo: 'https://academlo.com/',
    images: [
      '/projects/academlo/academlo.png',
      '/projects/academlo/academlo-2.png',
      '/projects/academlo/academlo-3.png',
      '/projects/academlo/academlo-4.png',
      '/projects/academlo/academlo-5.png',
    ],
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
    ],
  },
  {
    imageUrl: '/projects/pc.png',
    slug: 'para-cuando',
    title: 'Para Cuándo',
    description:
      'Vote for you next event in Queretaro with "Para Cuándo" official website.',
    demo: 'https://steevened.github.io/para-cuando/',
    repo: 'https://github.com/steevened/para-cuando',
    images: [
      '/projects/paracuando/pc.png',
      '/projects/paracuando/pc2.png',
      '/projects/paracuando/pc3.png',
      '/projects/paracuando/pc4.png',
      '/projects/paracuando/pc5.png',
      '/projects/paracuando/pc6.png',
      '/projects/paracuando/pc7.png',
    ],
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
    ],
  },
  {
    imageUrl: '/projects/aigram.png',
    slug: 'sociai',
    title: 'SociAI',
    description: 'Feel the power of AI in your Instagram clone app.',
    building: true,
    repo: 'https://github.com/steevened/sociai',
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
      {
        name: 'MongoDB',
        icon: <MgIcon />,
      },
      {
        name: 'Node JS',
        icon: <NdIcon />,
      },
    ],
  },
  {
    imageUrl: '/projects/tc.png',
    slug: 'tech-commerce',
    title: 'Techcommerce',
    description: 'All the tech you need in one place.',
    demo: 'https://techcommerceapp.netlify.app/',
    repo: 'https://github.com/steevened/techcommerce',
    images: [
      '/projects/tc/tc.png',
      '/projects/tc/tc2.png',
      '/projects/tc/tc3.png',
      '/projects/tc/tc4.png',
      '/projects/tc/tc5.png',
      '/projects/tc/tc6.png',
    ],
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
    ],
  },
  {
    imageUrl: '/projects/git.png',
    slug: 'git-favorites',
    title: 'Git Favorites',
    description: 'Manage your favorite Github profiles.',
    demo: 'https://gitfinderx.netlify.app/',
    repo: 'https://github.com/steevened/git-finder',
    images: [
      '/projects/gf/gf.png',
      '/projects/gf/gf2.png',
      '/projects/gf/gf3.png',
      '/projects/gf/gf4.png',
      '/projects/gf/gf5.png',
    ],
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
    ],
  },
  {
    imageUrl: '/projects/poke.png',
    slug: 'pokedex',
    title: 'Favorite Pokemons',
    description: 'Search and save your favorite pokemons.',
    demo: 'https://steevened.github.io/poke/',
    repo: 'https://github.com/steevened/poke',
    stack: [
      {
        name: 'TypeScript',
        icon: <TsLogo />,
      },
      {
        icon: <NxIcon />,
        name: 'Next.js',
      },
      {
        name: 'Tailwind css',
        icon: <TwLogo />,
      },
    ],
  },
];
