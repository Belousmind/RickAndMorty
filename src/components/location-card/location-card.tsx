import Link from 'next/link';
import type { LocationApi } from '@/types';
import styles from './location-card.module.scss';

type LocationCardProps = Pick<LocationApi, 'id' | 'name' | 'type'>;

export default function LocationCard({ id, name, type }: LocationCardProps) {
  return (
    <Link
      className={styles['location-card']}
      href={`/locations/${id.toString()}`}
    >
      <span>Name: {name}</span>
      <span> / </span>
      <span>Type: {type}</span>
    </Link>
  );
}
