import { Button } from '@/components/Button';
import { Counter } from '@/components/Counter';
import { CustomComponentThatTakesAComponentAsProp } from '@/components/CustomComponentThatTakesAComponentAsProp';

type Props = unknown;

export default function HomePage(props: Props) {
  return (
    <main>
      {/* TODO: Refactor into heading component */}
      <h1 className="">Home page</h1>

      <CustomComponentThatTakesAComponentAsProp element={<Button>Hello</Button>} />

      <div className="grid grid-cols-2 gap-[40px]">
        <Counter />
        <Counter />
      </div>

    </main>
  );
}
