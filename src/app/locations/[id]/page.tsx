import { fetchData, fetchMultiple } from '@/lib';
import { CharacterCard } from '@/components';
import type { LocationApi, CharacterApi } from '@/types';
import styles from './page.module.scss';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Location({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: LocationApi = await fetchData(`location/${id}`);
  const residents: CharacterApi[] = await fetchMultiple(
    'character',
    data.residents,
  );

  const content =
    residents.length > 0 ? (
      residents.map((item) => <CharacterCard key={item.id} {...item} />)
    ) : (
      <p>There are no characters.</p>
    );

  return (
    <div className={styles.container}>
      <h1>Name: {data.name}</h1>
      <span>Type: {data.type}</span>
      <span>Dimension: {data.dimension}</span>
      <div className="list">{content}</div>
    </div>
  );
}
