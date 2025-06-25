import { fetchPage } from "@/lib/fetchData";
import EpisodeCard, {
  EpisodeCardProps,
} from "@/components/episode-card/episode-card";
import styles from "./page.module.scss";
import Pagination from "@/components/pagination/pagination";

type Props = {
  searchParams: { page?: string };
};

export default async function EpisodesPage({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;
  const data = await fetchPage("episode", page);

  return (
    <>
      <h1>All Episodes</h1>
      <div className={styles.list}>
        {data.results.map((item: EpisodeCardProps) => (
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
