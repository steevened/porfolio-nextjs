import { HighLight } from '@/components/highlight/HighLight';

export const Combination = () => {
  const code = `
  <div
  class="
    [...]
    relative  
    before:absolute before:inset-0
    before:-translate-x-full
    before:animate-[gradient-x_2s_infinite]
    before:bg-gradient-to-r
    before:from-transparent  
    before:via-gray-900/20 before:dark:via-gray-100/10
    before:to-transparent"
  >
  [...]
  </div>
`;

  return <HighLight code={code} />;
};
