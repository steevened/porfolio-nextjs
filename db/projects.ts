export interface Project {
  imageUrl: string;
  title: string;
  slug: string;
  description: string;
  private?: boolean;
  building?: boolean;
}

export const projects: Project[] = [
  {
    imageUrl: '/projects/academlo.png',
    slug: 'academlo-landing-page',
    title: 'Academlo Landing Page',
    description: 'Academlo Bootcamp official landing page.',
    private: true,
  },
  {
    imageUrl: '/projects/pc.png',
    slug: 'para-cuando',
    title: 'Para Cuándo',
    description:
      'Vote for you next event in Queretaro with "Para Cuándo" official app.',
  },
  {
    imageUrl: '/projects/aigram.png',
    slug: 'aigram',
    title: 'AIgram',
    description: 'Feel the power of AI in your Instagram clone app.',
    building: true,
  },
  {
    imageUrl: '/projects/tc.png',
    slug: 'tech-commerce',
    title: 'Techcommerce',
    description: 'All the tech you need in one place.',
  },
  {
    imageUrl: '/projects/git.png',
    slug: 'git-favorites',
    title: 'Git Favorites',
    description: 'Manage your favorite Github profiles in one place.',
  },
  {
    imageUrl: '/projects/poke.png',
    slug: 'pokedex',
    title: 'Favorite Pokemons',
    description: 'Search and save your favorite pokemons with this website.',
  },
];
