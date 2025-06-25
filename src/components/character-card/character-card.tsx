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
    <Link
      className={styles["character-card"]}
      href={`/characters/${id.toString()}`}
    >
      <img className={styles["character-img"]} src={image} alt={name} />

      <Text label="Name:" text={name} />
      <Text label="Status:" text={status} />
      <Text label="Spacies:" text={species} />
    </Link>
  );
}

type Props = {
  label: string;
  text: string;
};

function Text({ label, text }: Props) {
  return (
    <p className={styles.label}>
      {label}
      <span className={styles.text}>{text}</span>
    </p>
  );
}
