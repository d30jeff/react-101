import { useParams } from 'react-router-dom';


export default function CatDetailsPage() {
  const params = useParams();

  return (
    <main>
      <h1>Cat Details</h1>
      <h2>ID: {params.ID}</h2>
    </main>
  );
}
