import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = (props) => {
  return (
    <section className="max-w-screen-xl mx-auto">
      {props.children}
    </section>
  );
};
