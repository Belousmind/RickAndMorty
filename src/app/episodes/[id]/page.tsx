import { fetchData } from "@/lib/fetchData";
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
  const characters = await fetchMultiple("character", data.characters);

  const content =
    characters.length > 0 ? (
      characters.map((item: CharacterCardProps) => (
        <CharacterCard key={item.id} {...item} />
      ))
    ) : (
      <p>There are no characters.</p>
    );

  return (
    <div>
      <span>{data.episode}</span>
      <span>{data.name}</span>
      <span>{data.air_date}</span>
      <div className={styles.list}>{content}</div>
    </div>
  );
}
