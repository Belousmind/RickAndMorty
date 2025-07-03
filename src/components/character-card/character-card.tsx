import Link from "next/link";
import type { CharacterApi } from "@/types";
import styles from "./character-card.module.scss";

type CharacterCardProps = Pick<
  CharacterApi,
  "id" | "name" | "status" | "species" | "image"
>;

export default function CharacterCard({
  id,
  name,
  status,
  species,
  image,
}: CharacterCardProps) {
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
