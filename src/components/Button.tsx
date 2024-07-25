import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<PropsWithChildren<Props>> = (props) => {
  return (
    <button {...props} className={twMerge('px-[8px] py-[2px] rounded-[4px] border', props.className)}>
      {props.children}
    </button>
  );
};
