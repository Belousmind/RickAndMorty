import { fetchData, fetchMultiple } from "@/lib";
import { EpisodeCard, NamedLink } from "@/components";
import type { CharacterApi, EpisodeApi } from "@/types";

import styles from "./style.module.scss";

type Params = {
  params: {
    id: string;
  };
};

export default async function Character({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: CharacterApi = await fetchData(`character/${id}`);
  const episodes: EpisodeApi[] = await fetchMultiple("episode", data.episode);

  return (
    <div>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <p className={styles.title}>
        Status: <span className={styles.subtitle}>{data.status}</span>
      </p>
      <p className={styles.title}>
        Species: <span className={styles.subtitle}>{data.species}</span>
      </p>
      <p className={styles.title}>
        Type: <span className={styles.subtitle}>{data.type || "Unknow"}</span>
      </p>
      <p className={styles.title}>
        Gender: <span className={styles.subtitle}>{data.gender}</span>
      </p>
      <p className={styles.title}>
        Origin:
        <NamedLink
          name={data.origin.name}
          url={data.origin.url}
          basePath="/locations"
        />
      </p>
      <p>
        Location:
        <NamedLink
          name={data.location.name}
          url={data.location.url}
          basePath="/locations"
        />
      </p>
      <div className="list">
        {episodes.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
