"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./character-card.module.scss";

export type CharacterCardProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

export default function CharacterCard({
  id,
  name,
  status,
  species,
  image,
}: CharacterCardProps) {
  const pathname = usePathname();
  return (
    <Link className={styles['character-card']} href={`/characters/${id.toString()}`}>
      <img className={styles['character-img']}  src={image} alt={name} />
      <h3 className={styles.title}>Name: {name}</h3>
      <span>Status: {status}</span>
      <span>Spacies: {species}</span>
    </Link>
  );
}
