import { PublicLayout } from '@/layouts/PublicLayout';
import NotFoundPage from '@/pages/NotFoundPage';
import { routes } from '@/routes';
import { FC, PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';

type Props = unknown;
export const AppRoutes: FC<PropsWithChildren<Props>> = (props) => {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {/*
        <Route path="/" element={<HomePage />} />
        <Route path='/cats' element={<CatsPage />} />
        <Route path='/awesome-cats' element={<AwesomeCatsPage />} />
        <Route path='/cats/:ID' element={<CatDetailsPage />} />
        */}
        {routes.map(route => {
          return <Route path={route.path} element={<route.component />} key={route.path} />
        })}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
