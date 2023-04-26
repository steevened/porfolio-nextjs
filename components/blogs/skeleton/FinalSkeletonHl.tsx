import { HighLight } from '@/components/highlight/HighLight';

export const FinalSkeletonHl = () => {
  const code = `
  <div
  class="
    [...]
    
    overflow-hidden
    shadow-xl shadow-black/10 dark:shadow-gray-900/10
    before:border-t-2 before:border-gray-100/40 
    before:dark:border-gray-900/20
>
  [...]
</div>  
  `;

  return <HighLight code={code} />;
};
