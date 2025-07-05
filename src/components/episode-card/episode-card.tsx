import Link from 'next/link';
import type { EpisodeApi } from '@/types';
import styles from './episode-card.module.scss';

type EpisodeCardProps = Pick<EpisodeApi, 'id' | 'name' | 'episode'>;

export default function EpisodeCard({ id, name, episode }: EpisodeCardProps) {
  return (
    <div>
      <Link
        className={styles['episode-card']}
        href={`/episodes/${id.toString()}`}
      >
        <span>{episode}</span>
        <span>{name}</span>[ ↗ ]
      </Link>
    </div>
  );
}
