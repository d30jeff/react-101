import { FC, PropsWithChildren, ReactElement } from 'react';

type Props = {
  element: ReactElement
};

export const CustomComponentThatTakesAComponentAsProp: FC<PropsWithChildren<Props>> = (props) => {
  const { element } = props;

  return (
    <div>
      <h1 className="font-semibold">Here is your component</h1>
      {element}
    </div>
  );
};
