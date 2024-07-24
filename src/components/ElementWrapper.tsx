import { FC, PropsWithChildren, ReactElement } from 'react';

type Props = {
  element: ReactElement
};

export const ElementWrapper: FC<PropsWithChildren<Props>> = (props) => {
  const { element } = props;

  return (
    <div>
      {element}
    </div>
  );
};
