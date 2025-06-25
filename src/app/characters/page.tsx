import CharacterCard, {
  CharacterCardProps,
} from "@/components/character-card/character-card";
import { fetchSearch } from "@/lib/fetchData";
import styles from "./page.module.scss";
import Pagination from "@/components/pagination/pagination";
import Search from "@/components/search/search";

type Props = {
  searchParams: { page?: string; query?: string };
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const query = searchParams?.query || "";

  const data = await fetchSearch("character", page, query);

  return (
    <>
      <h1>All Characters</h1>
      <Search placeholder="Search character" />
      <div className={styles.list}>
        {data.results.map((item: CharacterCardProps) => (
          <CharacterCard key={item.id} {...item} />
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
