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

type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
};

export default async function Location({ params }: Params) {

  const resolvedParams = await params;
  const { id } = resolvedParams;

  const data: Location = await fetchData(`location/${id}`);
  const residents = await fetchMultiple(data.residents);

  return (
    <div className={styles.container}>
      <h1>Name: {data.name}</h1>
      <span>Type: {data.type}</span>
      <span>Dimension: {data.dimension}</span>
      <div className="list">
        {residents.map((item: CharacterCardProps) => (
          <CharacterCard
            key={item.id}
            name={item.name}
            status={item.status}
            id={item.id}
            species={item.species}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
