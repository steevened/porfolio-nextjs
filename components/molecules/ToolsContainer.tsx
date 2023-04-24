import { FC, PropsWithChildren } from 'react';

const ToolsContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-5">
      {children}
    </div>
  );
};

export default ToolsContainer;
