import { CatCard } from '@/components/CatCard';
import { Loader } from '@/components/Loader';
import { queries } from '@/queries/index.query';

type Props = unknown;

export default function AwesomeCatsPage(props: Props) {
  const { data, isFetching } = queries.cat.searchImages({
    page: 1,
    limit: 10,
  })

  return (
    <main>
      <h1 className="text-[32px] font-semibold">Awesome Cats Page</h1>

      {isFetching && (
        <Loader />
      )}

      <div className="grid grid-cols-3 gap-[10px]">
        {data?.data.map(item => {
          return <CatCard cat={item} key={item.id} />
        })}
      </div>
    </main>
  );
}
