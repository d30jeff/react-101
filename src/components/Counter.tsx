import { Button } from '@/components/Button';
import { FC, PropsWithChildren, useState } from 'react';

type Props = unknown;
export const Counter: FC<PropsWithChildren<Props>> = (props) => {
  const [currentNumber, setCurrentNumber] = useState(1);

  return (
    <article className="flex flex-col border p-[10px] rounded">
      <h1 className="text-[20px] font-semibold">Counter</h1>

      <p>Current Number <br /></p>
      <span className="text-[18px] inline-block mt-[10px]">{currentNumber}</span>

      <Button type="button" className="max-w-[400px] mt-[40px]" onClick={() => {
        setCurrentNumber(currentNumber + 1)
      }}>Increment Number</Button>

    </article>
  );
};
