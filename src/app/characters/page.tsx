import CharacterCard, {
  CharacterCardProps,
} from "@/components/character-card/character-card";
import fetchData from "@/lib/fetchData";
import styles from "./page.module.scss";
import Pagination from "@/components/pagination/pagination";

type Props = {
  searchParams: { page?: string };
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const data = await fetchData("character", page);

  return (
    <>
      <h1>All Characters</h1>
      <div className={styles.list}>
        {data.results.map((item: CharacterCardProps) => (
          <CharacterCard
            key={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.info.pages}
        basePath="/characters"
      />
    </>
  );
}
