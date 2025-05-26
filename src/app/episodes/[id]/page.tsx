import {fetchData} from "@/lib/fetchData";
import { fetchMultiple } from "@/lib/fetchMultiple";
import CharacterCard, {
  CharacterCardProps,
} from "@/components/character-card/character-card";
import styles from "./page.module.scss";

type Params = {
  params: {
    id: string;
  };
};

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export default async function Episode({ params }: Params) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: Episode = await fetchData(`episode/${id}`);
  const characters = await fetchMultiple(data.characters);

  return (
    <div>
      <span>{data.episode}</span>
      <span>{data.name}</span>
      <span>{data.air_date}</span>
      <div className={styles.list}>
        {characters.map((item: CharacterCardProps) => (
          <CharacterCard
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
