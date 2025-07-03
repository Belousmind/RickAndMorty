import { EpisodeCard, Pagination } from "@/components";
import { fetchPage } from "@/lib";
import type { EpisodeApiResponse } from "@/types";
import styles from "./page.module.scss";

type Props = {
  searchParams: { page?: string };
};

export default async function EpisodesPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const data: EpisodeApiResponse = await fetchPage("episode", page);

  return (
    <>
      <h1>All Episodes</h1>
      <div className={styles.list}>
        {data.results.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.info.pages}
        basePath="/episodes"
      />
    </>
  );
}
