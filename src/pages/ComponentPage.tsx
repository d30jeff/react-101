import ArrowComponentWithDefaultExport from '@/components/ArrowComponentWithDefaultExport';
import { ArrowComponentWithNamedExport } from '@/components/ArrowComponentWithNamedExport';
import FunctionComponentWithDefaultExport from '@/components/FunctionComponentWithDefaultExport';
import { FunctionComponentWithNamedExport } from '@/components/FunctionComponentWithNamedExport';

export default function ComponentPage() {
  return (
    <main className="mt-[40px]">
      <div className="grid grid-cols-4">
        <ArrowComponentWithDefaultExport />
        <ArrowComponentWithNamedExport />
        <FunctionComponentWithDefaultExport />
        <FunctionComponentWithNamedExport />
      </div>
    </main>
  );
}
