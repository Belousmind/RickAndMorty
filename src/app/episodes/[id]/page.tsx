import { fetchData, fetchMultiple } from '@/lib';
import { CharacterCard } from '@/components';

import type { EpisodeApi, CharacterApi } from '@/types';

import styles from './page.module.scss';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Episode({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: EpisodeApi = await fetchData(`episode/${id}`);
  const characters: CharacterApi[] = await fetchMultiple(
    'character',
    data.characters,
  );

  const content =
    characters.length > 0 ? (
      characters.map((item) => <CharacterCard key={item.id} {...item} />)
    ) : (
      <p>There are no characters.</p>
    );

  return (
    <div>
      <span>{data.episode}</span>
      <span>{data.name}</span>
      <span>{data.air_date}</span>
      <div className={styles.list}>{content}</div>
    </div>
  );
}
