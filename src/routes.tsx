import { ComponentType, lazy, LazyExoticComponent } from 'react';

type Route = {
  path: string;
  component: LazyExoticComponent<ComponentType<unknown>>;
  name: string;
  hideFromNavigation?: boolean;
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: lazy(() => import('@/pages/HomePage'))
  },
  {
    path: '/cats',
    name: 'Cats',
    component: lazy(() => import('@/pages/CatsPage'))
  },
  {
    path: '/awesome-cats',
    name: 'Awesome Cats',
    component: lazy(() => import('@/pages/AwesomeCatsPage'))
  },
  {
    path: '/cats/:ID',
    name: 'Cat Details',
    component: lazy(() => import('@/pages/CatDetailsPage')),
    hideFromNavigation: true,
  },
];
