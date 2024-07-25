import { api } from '@/api/index.api';
import { CatCard } from '@/components/CatCard';
import { Loader } from '@/components/Loader';
import { Cat } from '@/interfaces/cat.interface';
import { useEffect, useState } from 'react';

type Props = unknown;

export default function CatsPage(props: Props) {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState<Cat.SearchImage.Response[]>([]);

  const fetchCats = async () => {
    try {
      setLoading(true);
      const response = await api.cat.searchImages({
        page: 1,
        limit: 10,
      })
      setItems(response.data);
      console.info(response)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <main>
      <h1>Cats page</h1>

      {isLoading && (
        <Loader />
      )}

      <div className="grid grid-cols-3 gap-[10px]">
        {items.map(item => {
          return <CatCard cat={item} key={item.id} />
        })}
      </div>
    </main>
  );
}
