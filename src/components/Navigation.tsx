import { routes } from '@/routes';
import { FC, PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC<PropsWithChildren> = () => {
  return (
    <nav className="flex items-center max-w-screen-xl mx-auto bg-green-700 p-[20px] text-white">
      <NavLink to={{ pathname: '/' }}>
        <img src="/Logo.jpg" alt="Cat Logo" className="h-[60px] object-contain" />
      </NavLink>

      <div className="ml-auto flex gap-x-[10px]">
        {routes.filter(route => {
          return !route.hideFromNavigation
        }).map(route => {
          return <NavLink to={{ pathname: route.path }} className="p-[10px]" key={route.path}>{route.name}</NavLink>
        })}

      </div>
    </nav>
  );
};
