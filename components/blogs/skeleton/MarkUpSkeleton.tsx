import { HighLight } from '@/components/highlight/HighLight';

const MarkUpSkeleton = () => {
  const code = `
  <div class="p-4 space-y-5 rounded-sm bg-black/10
   dark:bg-white/5 aspect-square w-full max-w-[250px]">
    <div class="h-24 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
    <div class="space-y-3">
      <div class="w-3/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
      <div class="w-4/5 h-3 rounded-sm bg-gray-500/30 dark:bg-gray-100/20"></div>
      <div class="w-2/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/20"></div>
    </div>
  </div>
  `;

  return <HighLight language="js" code={code} />;
};

export default MarkUpSkeleton;
