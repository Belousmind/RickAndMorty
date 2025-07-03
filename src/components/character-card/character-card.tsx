import Link from "next/link";
import type { CharacterApi } from "@/types";
import { LabelText } from "@/components";
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

      <LabelText label="Name:" text={name} />
      <LabelText label="Status:" text={status} />
      <LabelText label="Spacies:" text={species} />
    </Link>
  );
}
