import { EpisodeCard, Pagination } from '@/components';
import { fetchPage } from '@/lib';
import type { EpisodeApiResponse } from '@/types';
import styles from './page.module.scss';

type Props = {
  searchParams: Promise<{ page?: string; query?: string }>;
};

export default async function EpisodesPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const currentPage = page ?? '1';

  const data: EpisodeApiResponse = await fetchPage('episode', currentPage);

  return (
    <>
      <h1>All Episodes</h1>
      <div className={styles.list}>
        {data.results.map((item) => (
          <EpisodeCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data.info.pages}
        basePath="/episodes"
      />
    </>
  );
}
