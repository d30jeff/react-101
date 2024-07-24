import { FC, PropsWithChildren } from 'react';

type Props = unknown;
export const Loader: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className="absolute bg-black/20 top-0 left-0 h-full w-full z-10 flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );
};
