import { Container } from '@/components/Container';
import { Navigation } from '@/components/Navigation';
import { FC, Fragment, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

type Props = unknown;
export const PublicLayout: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <Fragment>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </Fragment>
  );
};
