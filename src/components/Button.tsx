import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  );
};
