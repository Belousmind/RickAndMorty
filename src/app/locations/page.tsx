import { fetchPage } from '@/lib';
import { LocationCard, Pagination } from '@/components';
import type { LocationApiResponse } from '@/types';

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function LocationPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const currentPage = page ?? '1';
  const data: LocationApiResponse = await fetchPage('location', currentPage);

  return (
    <>
      <h1>All Location</h1>
      <div className="list">
        {data.results.map((item) => (
          <LocationCard key={item.id} {...item} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={data.info.pages}
        basePath="/locations"
      />
    </>
  );
}
