import { NamedLink } from "@/components";
import type { CharacterApi } from "@/types";

import styles from "./character-profile.module.scss";

type CharacterProfileProps = Omit<CharacterApi, "url" | "created" | "episode">;

export default function CharacterProfile({
  image,
  name,
  species,
  status,
  type,
  gender,
  origin,
  location,
}: CharacterProfileProps) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>

      <p className={styles.title}>
        Status: <span className={styles.subtitle}>{status}</span>
      </p>
      <p className={styles.title}>
        Species: <span className={styles.subtitle}>{species}</span>
      </p>
      <p className={styles.title}>
        Type: <span className={styles.subtitle}>{type}</span>
      </p>
      <p className={styles.title}>
        Gender: <span className={styles.subtitle}>{gender}</span>
      </p>

      <p className={styles.title}>
        Origin:
        <NamedLink name={origin.name} url={origin.url} basePath="/locations" />
      </p>
      <p className={styles.title}>
        Location:
        <NamedLink
          name={location.name}
          url={location.url}
          basePath="/locations"
        />
      </p>
    </div>
  );
}
