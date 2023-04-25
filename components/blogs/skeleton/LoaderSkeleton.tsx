export const LoaderSkeleton = () => {
  return (
    <div className="p-4 space-y-5 rounded-sm bg-black/10 dark:bg-white/5 aspect-square min-w-[250px] max-w-[250px] my-10">
      <div className="h-24 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
      <div className="space-y-3">
        <div className="w-3/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/10"></div>
        <div className="w-4/5 h-3 rounded-sm bg-gray-500/30 dark:bg-gray-100/20"></div>
        <div className="w-2/5 h-3 rounded-sm bg-gray-500/20 dark:bg-gray-100/20"></div>
      </div>
    </div>
  );
};
