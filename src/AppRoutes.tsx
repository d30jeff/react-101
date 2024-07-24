import { PublicLayout } from '@/layouts/PublicLayout';
import CatDetailsPage from '@/pages/CatDetailsPage';
import CatsPage from '@/pages/CatsPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { FC, PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';

type Props = unknown;
export const AppRoutes: FC<PropsWithChildren<Props>> = (props) => {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path='/cats' element={<CatsPage />} />
        <Route path='/cats/:ID' element={<CatDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
