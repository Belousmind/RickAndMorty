"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './episode-card.module.scss'

export type EpisodeCardProps = {
  id: number;
  name: string;
  episode: string;
};

export default function EpisodeCard({ id, name, episode }: EpisodeCardProps) {
  const pathname = usePathname();
  return (
    <div>
      <Link className={styles['episode-card']} href={`/episodes/${id.toString()}`}>
        <span>{episode}</span>
        <span>{name}</span>
        [ ↗ ]
      </Link>
    </div>
  );
}
