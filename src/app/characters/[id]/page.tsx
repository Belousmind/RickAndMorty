import { fetchData, fetchMultiple } from '@/lib';
import { EpisodeCard, CharacterProfile } from '@/components';
import type { CharacterApi, EpisodeApi } from '@/types';

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Character({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: CharacterApi = await fetchData(`character/${id}`);
  const episodes: EpisodeApi[] = await fetchMultiple('episode', data.episode);

  return (
    <div>
      <CharacterProfile {...data} />
      <div className="list">
        {episodes.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
