import { fetchSearch } from "@/lib";

import { CharacterCard, Pagination, Search } from "@/components";

import type { CharacterApiResponse } from "@/types";

import styles from "./page.module.scss";

type Props = {
  searchParams: { page?: string; query?: string };
};

export default async function CharactersPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const query = searchParams?.query || "";

  const data: CharacterApiResponse = await fetchSearch(
    "character",
    page,
    query
  );

  return (
    <>
      <h1>All Characters</h1>
      <Search placeholder="Search character" />
      <div className={styles.list}>
        {data.results.map((item) => (
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
