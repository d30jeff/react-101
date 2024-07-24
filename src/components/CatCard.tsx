import { Cat } from '@/interfaces/cat.interface';
import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  cat: Cat.SearchImage.Response
};
export const CatCard: FC<PropsWithChildren<Props>> = (props) => {

  const { cat } = props;

  return (
    <NavLink to={{
      pathname: `/cats/${cat.id}`
    }}
      className="flex items-center max-h-[400px] p-[20px] bg-green-400/20 rounded-lg hover:bg-green-500 overflow-hidden"
    >
      <img src={cat.url} alt={cat.id} className="h-full w-full object-contain" />
    </NavLink>
  );
};
